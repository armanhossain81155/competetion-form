/**
 * Google Sheet-e registration save kore.
 * Setup: README.md dekhun. Ei file Google Sheet > Extensions > Apps Script e paste korun.
 *
 * Website config.js er `sheetName` onujayi proti bochor alada tab toiri hoy (jemon "2026").
 */

const HEADERS = [
  "Registration ID",
  "Submitted At",
  "Participant Name",
  "Gender",
  "Date of Birth",
  "Age on Event Day",
  "Group",
  "Juz Memorized",
  "School / Madrasa",
  "Guardian Name",
  "Phone",
  "Email",
  "City / Area",
  "Notes",
  "Language",
];

const REQUIRED = ["participantName", "gender", "dateOfBirth", "groupName", "guardianName", "phone", "city"];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    const p = e.parameter || {};

    // Spam bot honeypot
    if (p.website) return json({ status: "ok", id: "-" });

    const missing = REQUIRED.filter((key) => !String(p[key] || "").trim());
    if (missing.length) return json({ status: "error", message: "Missing: " + missing.join(", ") });

    const sheet = getYearSheet(p.sheetName);

    if (isDuplicate(sheet, p)) return json({ status: "duplicate" });

    const id = sheet.getName() + "-" + String(sheet.getLastRow()).padStart(4, "0");
    sheet.appendRow(
      [
        id,
        new Date(),
        p.participantName,
        p.gender,
        p.dateOfBirth,
        p.ageOnEventDay,
        p.groupName,
        p.juzMemorized,
        p.institution,
        p.guardianName,
        p.phone,
        p.email,
        p.city,
        p.notes,
        p.language,
      ].map(safeCell)
    );

    return json({ status: "ok", id: id });
  } catch (err) {
    return json({ status: "error", message: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Browser-e URL khulle "ready" dekhabe — deploy thik hoyeche kina test korar jonno.
function doGet() {
  return json({ status: "ready" });
}

function getYearSheet(requestedName) {
  const name = String(requestedName || new Date().getFullYear()).replace(/[^\w\- ]/g, "").slice(0, 40);
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold").setBackground("#ede9fe");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

// Eki nam + jonmo tarikh + group diye abar registration hole atkay.
function isDuplicate(sheet, p) {
  const rows = sheet.getLastRow() - 1;
  if (rows < 1) return false;
  const data = sheet.getRange(2, 1, rows, HEADERS.length).getDisplayValues();
  const name = normalize(p.participantName);
  return data.some(
    (row) => normalize(row[2]) === name && row[4] === p.dateOfBirth && row[6] === p.groupName
  );
}

function normalize(value) {
  return String(value || "").trim().toLowerCase().replace(/\s+/g, " ");
}

// "=", "+", "-", "@" diye shuru hole Sheet formula hishebe na chalanor jonno.
function safeCell(value) {
  const str = String(value == null ? "" : value).slice(0, 500);
  return /^[=+\-@]/.test(str) ? "'" + str : str;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

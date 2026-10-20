// Page-er shob content config.js (window.COMPETITION) theke ashe.
// Proti bochor ei file edit korar dorkar nei.

const config = window.COMPETITION;
const TIME_ZONE = "Asia/Tokyo";
const LANG_KEY = "competition-lang";

const UI = {
  en: {
    registerNow: "Register now",
    deadline: "Registration deadline",
    daysLeft: (n) => (n === 1 ? "1 day left" : `${n} days left`),
    lastDay: "Last day today!",
    closed: "Closed",
    aboutEyebrow: "How it works",
    guidelines: "Competition guidelines",
    groupsEyebrow: "Choose your category",
    groups: "Competition groups",
    generalGroups: "General groups (Recitation)",
    hifzGroups: "Hifz groups (Memorization)",
    ages: (min, max) => `Ages ${min}–${max}`,
    juzRange: (min, max) => (max >= 30 ? `${min} Juz' up to the complete Qur'an` : `${min} to ${max} Juz'`),
    prizesEyebrow: "Rewards",
    prizes: "Prizes",
    formEyebrow: "Step one",
    formTitle: "Registration form",
    formIntro: "Please fill in the form with correct information.",
    requiredNote: "marked fields are required.",
    closedTitle: "Registration is closed",
    closedText: "The registration deadline has passed. Please contact the organizers below if you have any questions.",
    participantInfo: "Participant",
    participantName: "Participant's full name",
    gender: "Gender",
    male: "Boy",
    female: "Girl",
    select: "Select",
    dob: "Date of birth",
    year: "Year",
    month: "Month",
    day: "Day",
    ageOnEvent: (n) => `Age on competition day: ${n}`,
    group: "Competition group",
    selectGroup: "Select a group",
    juzMemorized: "Juz' memorized",
    institution: "School / Madrasa",
    guardianInfo: "Parent / Guardian",
    guardianName: "Guardian's name",
    phone: "Mobile number (WhatsApp)",
    email: "Email",
    city: "City / Area in Japan",
    notes: "Anything we should know?",
    consent: "I confirm the information is correct and agree that the organizers may contact me about the competition.",
    submit: "Complete registration",
    sending: "Sending…",
    successTitle: "Registration complete!",
    successText: "JazakAllahu khairan. We have received the registration. The organizers will contact you with audition details, inshAllah.",
    regId: "Registration ID:",
    registerAnother: "Register another participant",
    contactEyebrow: "Questions?",
    contact: "Contact us",
    enquiries: "Enquiries in",
    organizedBy: "Organized by",
    errRequired: "Please fill in all required fields.",
    errPhone: "Please enter a valid phone number.",
    errEmail: "Please enter a valid email address.",
    errAge: (min, max, age) => `This group is for ages ${min}–${max}. The participant will be ${age} on competition day.`,
    errJuz: (min, max) => `This group requires ${min}–${max} Juz' memorized.`,
    errConsent: "Please confirm the information is correct.",
    errNetwork: "Could not submit. Please check your internet connection and try again.",
    errDuplicate: "This participant is already registered in this group.",
    demoMode: "Demo mode: the form is not connected to Google Sheets yet (see README.md).",
  },
  bn: {
    registerNow: "নিবন্ধন করুন",
    deadline: "নিবন্ধনের শেষ তারিখ",
    daysLeft: (n) => `আর ${toBn(n)} দিন বাকি`,
    lastDay: "আজই শেষ দিন!",
    closed: "বন্ধ",
    aboutEyebrow: "যেভাবে হবে",
    guidelines: "প্রতিযোগিতার নিয়মাবলি",
    groupsEyebrow: "বিভাগ বেছে নিন",
    groups: "প্রতিযোগিতার গ্রুপ",
    generalGroups: "সাধারণ গ্রুপ (তিলাওয়াত)",
    hifzGroups: "হিফজ গ্রুপ (মুখস্থ)",
    ages: (min, max) => `বয়স ${toBn(min)}–${toBn(max)} বছর`,
    juzRange: (min, max) => (max >= 30 ? `কমপক্ষে ${toBn(min)} পারা থেকে সম্পূর্ণ কুরআন` : `${toBn(min)} থেকে ${toBn(max)} পারা`),
    prizesEyebrow: "পুরস্কার",
    prizes: "পুরস্কারসমূহ",
    formEyebrow: "অংশগ্রহণের প্রথম ধাপ",
    formTitle: "নিবন্ধন ফর্ম",
    formIntro: "সঠিক তথ্য দিয়ে ফর্মটি পূরণ করুন।",
    requiredNote: "চিহ্নিত ঘরগুলো আবশ্যক।",
    closedTitle: "নিবন্ধন বন্ধ হয়ে গেছে",
    closedText: "নিবন্ধনের সময়সীমা শেষ। কোনো প্রশ্ন থাকলে নিচের নম্বরে আয়োজকদের সঙ্গে যোগাযোগ করুন।",
    participantInfo: "প্রতিযোগীর তথ্য",
    participantName: "প্রতিযোগীর পূর্ণ নাম",
    gender: "লিঙ্গ",
    male: "ছেলে",
    female: "মেয়ে",
    select: "নির্বাচন করুন",
    dob: "জন্ম তারিখ",
    year: "বছর",
    month: "মাস",
    day: "দিন",
    ageOnEvent: (n) => `প্রতিযোগিতার দিন বয়স: ${toBn(n)} বছর`,
    group: "প্রতিযোগিতার গ্রুপ",
    selectGroup: "গ্রুপ নির্বাচন করুন",
    juzMemorized: "কত পারা মুখস্থ",
    institution: "স্কুল / মাদ্রাসা",
    guardianInfo: "অভিভাবকের তথ্য",
    guardianName: "অভিভাবকের নাম",
    phone: "মোবাইল নম্বর (WhatsApp)",
    email: "ইমেইল",
    city: "জাপানে শহর / এলাকা",
    notes: "আর কিছু জানাতে চান?",
    consent: "আমি নিশ্চিত করছি, দেওয়া তথ্যগুলো সঠিক এবং প্রতিযোগিতা সংক্রান্ত প্রয়োজনে আয়োজকরা আমার সঙ্গে যোগাযোগ করতে পারবেন।",
    submit: "নিবন্ধন সম্পন্ন করুন",
    sending: "পাঠানো হচ্ছে…",
    successTitle: "নিবন্ধন সম্পন্ন হয়েছে!",
    successText: "জাযাকাল্লাহু খাইরান। আপনার নিবন্ধন আমরা পেয়েছি। অডিশনের বিস্তারিত জানাতে আয়োজকরা যোগাযোগ করবেন, ইনশাআল্লাহ।",
    regId: "নিবন্ধন নম্বর:",
    registerAnother: "আরেকজনকে নিবন্ধন করুন",
    contactEyebrow: "প্রশ্ন আছে?",
    contact: "যোগাযোগ",
    enquiries: "যোগাযোগের ভাষা:",
    organizedBy: "আয়োজনে",
    errRequired: "অনুগ্রহ করে সব আবশ্যক ঘর পূরণ করুন।",
    errPhone: "সঠিক মোবাইল নম্বর লিখুন।",
    errEmail: "সঠিক ইমেইল ঠিকানা লিখুন।",
    errAge: (min, max, age) => `এই গ্রুপের বয়সসীমা ${toBn(min)}–${toBn(max)} বছর। প্রতিযোগিতার দিন প্রতিযোগীর বয়স হবে ${toBn(age)} বছর।`,
    errJuz: (min, max) => `এই গ্রুপের জন্য ${toBn(min)}–${toBn(max)} পারা মুখস্থ থাকতে হবে।`,
    errConsent: "তথ্য সঠিক কিনা নিশ্চিত করুন।",
    errNetwork: "পাঠানো যায়নি। ইন্টারনেট সংযোগ দেখে আবার চেষ্টা করুন।",
    errDuplicate: "এই প্রতিযোগী এই গ্রুপে আগেই নিবন্ধিত।",
    demoMode: "ডেমো মোড: ফর্মটি এখনো Google Sheets-এর সঙ্গে যুক্ত নয় (README.md দেখুন)।",
  },
};

const form = document.querySelector("#registration-form");
const statusEl = document.querySelector("#form-status");
const groupSelect = document.querySelector("#group-select");
const juzField = document.querySelector("#juz-field");
const juzInput = form.elements.juzMemorized;
const dobInput = form.elements.dateOfBirth;
const dobYear = document.querySelector("#dob-year");
const dobMonth = document.querySelector("#dob-month");
const dobDay = document.querySelector("#dob-day");
const successBox = document.querySelector("#success-box");

let lang = loadLang();

function toBn(value) {
  return String(value).replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[d]);
}

function t(key, ...args) {
  const entry = UI[lang][key];
  return typeof entry === "function" ? entry(...args) : entry;
}

// { en, bn } object hole current bhasha-r text, noyto string-tai.
function text(value) {
  return value && typeof value === "object" ? value[lang] ?? value.en : value ?? "";
}

function getPath(path) {
  return path.split(".").reduce((obj, key) => obj?.[key], config);
}

function loadLang() {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "en" || saved === "bn") return saved;
  } catch {}
  return navigator.language?.startsWith("bn") ? "bn" : "en";
}

function formatDate(iso, options) {
  const locale = lang === "bn" ? "bn-BD" : "en-GB";
  return new Intl.DateTimeFormat(locale, { timeZone: TIME_ZONE, ...options }).format(new Date(iso));
}

// Event-er din (Japan time) e boyosh koto hobe.
function ageOn(dobString, onIso) {
  const [by, bm, bd] = dobString.split("-").map(Number);
  const eventDay = new Intl.DateTimeFormat("en-CA", { timeZone: TIME_ZONE }).format(new Date(onIso));
  const [ey, em, ed] = eventDay.split("-").map(Number);
  let age = ey - by;
  if (em < bm || (em === bm && ed < bd)) age -= 1;
  return age;
}

function isClosed() {
  return Date.now() > new Date(config.registrationDeadline).getTime();
}

function el(tag, className, content) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (content !== undefined) node.textContent = content;
  return node;
}

function groupDetail(group) {
  if (group.type === "hifz") return t("juzRange", group.minJuz, group.maxJuz);
  return t("ages", group.minAge, group.maxAge);
}

function render() {
  document.documentElement.lang = lang;
  document.title = `${text(config.title)} ${text(config.region)} | ${t("formTitle")}`;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-config]").forEach((node) => {
    node.textContent = text(getPath(node.dataset.config));
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
  });

  document.querySelector("#event-date").textContent = formatDate(config.eventDate, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  document.querySelector("#event-time").textContent = formatDate(config.eventDate, { hour: "numeric", minute: "2-digit" });
  document.querySelector("#venue-link").href = config.venue.mapUrl;

  const notes = document.querySelector("#event-notes");
  notes.replaceChildren(...config.notes.map((note) => el("li", "", text(note))));

  document.querySelector("#guideline-points").replaceChildren(
    ...config.guidelines.points.map((point) => el("li", "", text(point)))
  );

  const groupItem = (group) => {
    const li = el("li");
    li.append(el("strong", "", text(group.name)), el("span", "", groupDetail(group)));
    return li;
  };
  document.querySelector("#general-groups").replaceChildren(
    ...config.groups.filter((g) => g.type !== "hifz").map(groupItem)
  );
  document.querySelector("#hifz-groups").replaceChildren(
    ...config.groups.filter((g) => g.type === "hifz").map(groupItem)
  );

  document.querySelector("#prize-list").replaceChildren(
    ...config.prizes.list.map((prize, i) => {
      const li = el("li");
      li.append(el("span", "prize-rank", lang === "bn" ? toBn(i + 1) : String(i + 1)));
      const body = el("div");
      body.append(el("strong", "", text(prize.place)), el("span", "", text(prize.reward)));
      li.append(body);
      return li;
    })
  );

  document.querySelector("#contact-list").replaceChildren(
    ...config.contacts.people.map((person) => {
      const digits = person.phone.replace(/\D/g, "");
      const li = el("li");
      li.append(el("strong", "", person.name));
      const links = el("div", "contact-links");
      const call = el("a", "", person.phone);
      call.href = `tel:+${digits}`;
      const wa = el("a", "whatsapp", "WhatsApp");
      wa.href = `https://wa.me/${digits}`;
      wa.target = "_blank";
      wa.rel = "noopener";
      links.append(call, wa);
      li.append(links);
      return li;
    })
  );

  renderGroupOptions();
  renderDobOptions();
  renderDeadline();
  updateAgeHint();
  updateGroupHint();
  document.querySelector("#footer-year").textContent = text(config.title);
}

function renderGroupOptions() {
  const selected = groupSelect.value;
  const placeholder = groupSelect.options[0];
  const options = config.groups.map((group) => {
    const option = el("option", "", `${text(group.name)} — ${groupDetail(group)}`);
    option.value = group.id;
    return option;
  });
  groupSelect.replaceChildren(placeholder, ...options);
  groupSelect.value = selected;
}

// placeholder option rekhe baki option notun kore boshay, ager selection thakle rekhe dey.
function fillSelect(select, items) {
  const selected = select.value;
  const options = items.map(([value, label]) => {
    const option = el("option", "", label);
    option.value = value;
    return option;
  });
  select.replaceChildren(select.options[0], ...options);
  select.value = options.some((o) => o.value === selected) ? selected : "";
}

// Bochor: competition-er bochor theke 3–20 bochor age porjonto (notun theke puron).
function renderDobOptions() {
  const digits = (n) => (lang === "bn" ? toBn(n) : String(n));
  const eventYear = Number(config.eventDate.slice(0, 4));
  const years = [];
  for (let y = eventYear - 3; y >= eventYear - 20; y--) years.push([String(y), digits(y)]);
  fillSelect(dobYear, years);

  const monthName = new Intl.DateTimeFormat(lang === "bn" ? "bn-BD" : "en-GB", { month: "long", timeZone: "UTC" });
  fillSelect(
    dobMonth,
    Array.from({ length: 12 }, (_, i) => [String(i + 1).padStart(2, "0"), monthName.format(Date.UTC(2000, i, 1))])
  );

  // Mash/bochor onujayi koto din (February 28/29 ityadi)
  const daysInMonth = dobMonth.value
    ? new Date(Date.UTC(Number(dobYear.value) || 2000, Number(dobMonth.value), 0)).getUTCDate()
    : 31;
  fillSelect(
    dobDay,
    Array.from({ length: daysInMonth }, (_, i) => [String(i + 1).padStart(2, "0"), digits(i + 1)])
  );
}

function updateDob() {
  renderDobOptions();
  dobInput.value = dobYear.value && dobMonth.value && dobDay.value ? `${dobYear.value}-${dobMonth.value}-${dobDay.value}` : "";
  updateAgeHint();
}

function renderDeadline() {
  document.querySelector("#deadline-date").textContent = formatDate(config.registrationDeadline, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const countdown = document.querySelector("#deadline-countdown");
  const closed = isClosed();
  document.querySelector("#deadline-badge").classList.toggle("is-closed", closed);

  if (closed) {
    countdown.textContent = t("closed");
  } else {
    const msLeft = new Date(config.registrationDeadline).getTime() - Date.now();
    const days = Math.floor(msLeft / 86400000);
    countdown.textContent = days < 1 ? t("lastDay") : t("daysLeft", days);
  }

  document.querySelector("#closed-box").hidden = !closed;
  form.hidden = closed || !successBox.hidden;
}

function selectedGroup() {
  return config.groups.find((g) => g.id === groupSelect.value);
}

function updateAgeHint() {
  const hint = document.querySelector("#age-hint");
  hint.textContent = dobInput.value ? t("ageOnEvent", ageOn(dobInput.value, config.eventDate)) : "";
}

function updateGroupHint() {
  const group = selectedGroup();
  const isHifz = group?.type === "hifz";
  juzField.hidden = !isHifz;
  juzInput.required = isHifz;
  document.querySelector("#group-hint").textContent = group ? groupDetail(group) : "";
  document.querySelector("#juz-hint").textContent = isHifz ? t("juzRange", group.minJuz, group.maxJuz) : "";
  if (isHifz) {
    juzInput.min = group.minJuz;
    juzInput.max = Math.min(group.maxJuz, 30);
  }
}

function showStatus(message, isError = false) {
  statusEl.textContent = message;
  statusEl.classList.toggle("error", isError);
}

function markInvalid(field) {
  field.setAttribute("aria-invalid", "true");
  field.focus();
}

function validate() {
  form.querySelectorAll("[aria-invalid]").forEach((f) => f.removeAttribute("aria-invalid"));

  const requiredFields = [...form.querySelectorAll("[required]")].filter((f) => f.type !== "checkbox");
  const empty = requiredFields.find((f) => !f.value.trim());
  if (empty) {
    markInvalid(empty);
    return t("errRequired");
  }

  const { phone, email, consent } = form.elements;
  if (!phone.checkValidity() || phone.value.replace(/\D/g, "").length < 10) {
    markInvalid(phone);
    return t("errPhone");
  }
  if (email.value && !email.checkValidity()) {
    markInvalid(email);
    return t("errEmail");
  }

  const group = selectedGroup();
  if (group.minAge !== undefined) {
    const age = ageOn(dobInput.value, config.eventDate);
    if (age < group.minAge || age > group.maxAge) {
      markInvalid(groupSelect);
      return t("errAge", group.minAge, group.maxAge, age);
    }
  }
  if (group.type === "hifz") {
    const juz = Number(juzInput.value);
    if (!Number.isInteger(juz) || juz < group.minJuz || juz > group.maxJuz) {
      markInvalid(juzInput);
      return t("errJuz", group.minJuz, Math.min(group.maxJuz, 30));
    }
  }

  if (!consent.checked) {
    consent.focus();
    return t("errConsent");
  }
  return "";
}

async function handleSubmit(event) {
  event.preventDefault();
  if (isClosed()) return renderDeadline();

  const error = validate();
  if (error) return showStatus(error, true);

  // Bot honeypot field puron korle chupchap success dekhai.
  if (form.elements.website.value) return showSuccess("—");

  if (!config.submitUrl) {
    showStatus(t("demoMode"), true);
    console.table(Object.fromEntries(new FormData(form)));
    return;
  }

  const group = selectedGroup();
  const data = new URLSearchParams(new FormData(form));
  data.delete("consent");
  data.set("groupName", group.name.en);
  data.set("juzMemorized", group.type === "hifz" ? juzInput.value : "");
  data.set("ageOnEventDay", ageOn(dobInput.value, config.eventDate));
  data.set("language", lang);
  data.set("sheetName", config.sheetName);

  const button = form.querySelector(".submit-button");
  button.disabled = true;
  showStatus(t("sending"));

  try {
    const response = await fetch(submitEndpoint(), { method: "POST", body: data });
    const result = await response.json();
    if (result.status === "duplicate") return showStatus(t("errDuplicate"), true);
    if (result.status !== "ok") throw new Error(result.message || "Submit failed");
    showSuccess(result.id);
  } catch (err) {
    console.error(err);
    showStatus(t("errNetwork"), true);
  } finally {
    button.disabled = false;
  }
}

// Shudhu Deployment ID (AKfycb...) dile-o pura URL baniye ney.
function submitEndpoint() {
  const url = config.submitUrl.trim();
  return url.startsWith("http") ? url : `https://script.google.com/macros/s/${url}/exec`;
}

function showSuccess(id) {
  document.querySelector("#reg-id").textContent = id;
  form.hidden = true;
  successBox.hidden = false;
  successBox.focus();
}

function resetForm() {
  form.reset();
  dobInput.value = "";
  renderDobOptions();
  showStatus("");
  successBox.hidden = true;
  updateGroupHint();
  updateAgeHint();
  renderDeadline();
  form.elements.participantName.focus();
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    lang = button.dataset.lang;
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {}
    render();
    if (statusEl.textContent) showStatus("");
  });
});

groupSelect.addEventListener("change", updateGroupHint);
[dobYear, dobMonth, dobDay].forEach((select) => select.addEventListener("change", updateDob));
form.addEventListener("submit", handleSubmit);
form.addEventListener("input", (e) => e.target.removeAttribute("aria-invalid"));
document.querySelector("#register-another").addEventListener("click", resetForm);

render();

# Kids Qur'an Competition — Registration Website

Proti bochor competition-er registration-er jonno ekta website. English + বাংলা, data jay Google Sheets-e.

## Files

| File | Ki kaj |
|---|---|
| `config.js` | **Proti bochor shudhu eta edit korun.** Date, venue, deadline, group, prize, contact. |
| `index.html`, `script.js`, `style.css` | Website. Shadharonoto edit korte hobe na. |
| `google-apps-script/Code.gs` | Google Sheet-e data save korar script. |

## Prothombar setup (ekbar korlei hobe)

### 1. Google Sheet connect kora

1. [sheets.new](https://sheets.new) e giye notun Google Sheet khulun, nam din (jemon "Qur'an Competition Registrations").
2. **Extensions → Apps Script** e jan.
3. Je code ache ta muche `google-apps-script/Code.gs` er pura code paste korun. Save (💾) korun.
4. Upore dane **Deploy → New deployment** e click korun.
   - Gear icon ⚙ → **Web app** select korun
   - *Execute as*: **Me**
   - *Who has access*: **Anyone**
   - **Deploy** korun. Google permission chaile allow korun ("Advanced → Go to … (unsafe)", karon script-ta apnar nijer).
5. Je **Web app URL** (`https://script.google.com/macros/s/.../exec`) dibe seta copy korun.
6. `config.js` e `submitUrl: ""` er moddhe URL-ta paste korun.

> Test: URL-ta browser-e khulle `{"status":"ready"}` dekhabe.

### 2. Website online kora (free)

Shobcheye shohoj: **Netlify Drop**
1. [app.netlify.com/drop](https://app.netlify.com/drop) e jan.
2. Ei pura folder-ta drag kore chere din. Link pabe, seta share korun.

Othoba **GitHub Pages**: repo GitHub-e push kore *Settings → Pages → Deploy from branch → main*.

### 3. QR code

Website link diye QR code banan (jemon [qr-code-generator.com](https://www.qr-code-generator.com)) ar poster-e boshan.

## Proti bochor ki korben

1. `config.js` khulun ar update korun:
   - `sheetName` → notun bochor (jemon `"2027"`). Sheet-e nije theke notun tab toiri hobe, ager bochorer data thik thakbe.
   - `registrationDeadline`, `eventDate`
   - `region`, `venue`, `groups`, `prizes`, `contacts` dorkar hole
2. `index.html`-e `?v=` number gulo ek bariye din (jemon `?v=7` theke `?v=8`). Na korle kichu phone cache theke puron tarikh dekhabe.
3. GitHub-e push korun (ba Netlify-te abar folder drag korun). Link eki thakbe.

Google Apps Script abar deploy korte **hobe na**.

## Ja ja kaj kore

- Deadline par hole form nije theke bondho hoye jay
- Countdown ("আর ৫ দিন বাকি")
- Competition-er din-er boyosh hishab kore group-er age limit check kore
- Hifz group nile "koto para mukhosto" ghor ashe ar range check kore
- Eki nam + jonmo tarikh + group diye duibar registration atkay
- Protiti registration-e ID dey (jemon `2026-0007`)
- Contact number-e direct WhatsApp/call link

## Data dekha

Google Sheet-ta ayojok-der sathe **Share** korun (Viewer ba Editor). Excel/CSV lagle: *File → Download*.

## Local-e test

`index.html` double-click kore browser-e khulun. `submitUrl` khali thakle form submit korle demo message dekhabe, data browser console-e print hobe.

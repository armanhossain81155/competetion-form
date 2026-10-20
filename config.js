/*
 * ============================================================
 *  EVENT CONFIG — notun bochorer jonno shudhu ei file-ta edit korun.
 *  Edit only this file for each new year's competition.
 *
 *  Text gulo { en: "...", bn: "..." } format-e — dui bhashai likhun.
 *  Date gulo Japan time (+09:00) e likhun.
 * ============================================================
 */
window.COMPETITION = {
  // Google Apps Script Web App URL (README.md dekhun). Khali thakle form demo mode-e thakbe.
  submitUrl: "https://script.google.com/macros/s/AKfycbwtpKLjeFY5UCVDqWNSC3w3gsUdzQ9VAiekpFRgVDLFRhSPNlcmPWkU3SCm_BoAueMq/exec",

  // Google Sheet-e ei nam-er tab-e registration jabe (proti bochor alada tab).
  sheetName: "2027",

  // Ei shomoyer por form nije theke bondho hoye jabe.
  registrationDeadline: "2027-08-13T23:59:59+09:00",

  // Competition-er din o shomoy. Boyosh ei tarikh onujayi hishab hobe.
  eventDate: "2027-08-15T17:30:00+09:00",

  title: {
    en: "International Kids Qur'an Competition",
    bn: "আন্তর্জাতিক শিশু-কিশোর কুরআন প্রতিযোগিতা",
  },
  region: { en: "Misato", bn: "মিসাতো" },

  hadith: {
    en: "“Whoever recites the Qur'an and acts upon it, his parents will be crowned on the Day of Judgment…” — (Ahmad, Abu Dawood, Sahih)",
    bn: "“যে ব্যক্তি কুরআন পাঠ করে এবং সে অনুযায়ী আমল করে, কিয়ামতের দিন তার পিতা-মাতাকে মুকুট পরানো হবে…” — (আহমদ, আবু দাউদ, সহিহ)",
  },

  venue: {
    name: "Kibonogokoryu Center",
    address: "3 Chome-7-19 Hikonari, Misato, Saitama",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=3+Chome-7-19+Hikonari+Misato+Saitama",
  },

  // Venue/date card-er niche choto note.
  notes: [{ en: "Dinner will be served, inshAllah.", bn: "রাতের খাবারের ব্যবস্থা থাকবে, ইনশাআল্লাহ।" }],

  guidelines: {
    intro: {
      en: "This competition is open to children and teenagers residing in Japan. The primary selection will be held regionally, with auditions conducted in various locations.",
      bn: "জাপানে বসবাসরত শিশু-কিশোরদের জন্য এই প্রতিযোগিতা উন্মুক্ত। প্রাথমিক বাছাই আঞ্চলিকভাবে বিভিন্ন স্থানে অডিশনের মাধ্যমে অনুষ্ঠিত হবে।",
    },
    points: [
      {
        en: "From each region, 1 participant out of every 8 will be selected to participate in the Grand Final.",
        bn: "প্রতিটি অঞ্চল থেকে প্রতি ৮ জনে ১ জন গ্র্যান্ড ফাইনালে অংশ নেওয়ার জন্য নির্বাচিত হবে।",
      },
      {
        en: "All participants from the Misato region will receive gifts, inshAllah.",
        bn: "মিসাতো অঞ্চলের সকল অংশগ্রহণকারী উপহার পাবে, ইনশাআল্লাহ।",
      },
      {
        en: "The 1st place winners from each group will advance to the central Grand Final.",
        bn: "প্রতিটি গ্রুপের প্রথম স্থান অধিকারী কেন্দ্রীয় গ্র্যান্ড ফাইনালে অংশ নেবে।",
      },
    ],
    closing: {
      en: "The Grand Final will be held at a central location (Tokyo/Saitama) and organized by the national body.",
      bn: "গ্র্যান্ড ফাইনাল একটি কেন্দ্রীয় স্থানে (টোকিও/সাইতামা) জাতীয় কমিটির আয়োজনে অনুষ্ঠিত হবে।",
    },
  },

  /*
   * Groups. type: "general" (recitation) ba "hifz" (memorization).
   * minAge/maxAge dile event-er din-er boyosh check kora hobe.
   * minJuz/maxJuz dile koto juz mukhosto ta check kora hobe.
   */
  groups: [
    { id: "G1", type: "general", name: { en: "General Group 1", bn: "সাধারণ গ্রুপ ১" }, minAge: 3, maxAge: 6 },
    { id: "G2", type: "general", name: { en: "General Group 2", bn: "সাধারণ গ্রুপ ২" }, minAge: 7, maxAge: 12 },
    { id: "G3", type: "general", name: { en: "General Group 3", bn: "সাধারণ গ্রুপ ৩" }, minAge: 13, maxAge: 15 },
    { id: "H1", type: "hifz", name: { en: "Hifz Group 1", bn: "হিফজ গ্রুপ ১" }, minJuz: 1, maxJuz: 5 },
    { id: "H2", type: "hifz", name: { en: "Hifz Group 2", bn: "হিফজ গ্রুপ ২" }, minJuz: 6, maxJuz: 30 },
  ],

  prizes: {
    title: { en: "Group-wise for the Final Round", bn: "ফাইনাল রাউন্ডে প্রতিটি গ্রুপের জন্য" },
    list: [
      { place: { en: "1st Prize", bn: "১ম পুরস্কার" }, reward: { en: "Cash ¥30,000, Certificate & Crest", bn: "নগদ ৩০,০০০ ইয়েন, সনদ ও ক্রেস্ট" } },
      { place: { en: "2nd Prize", bn: "২য় পুরস্কার" }, reward: { en: "Cash ¥20,000, Certificate & Crest", bn: "নগদ ২০,০০০ ইয়েন, সনদ ও ক্রেস্ট" } },
      { place: { en: "3rd Prize", bn: "৩য় পুরস্কার" }, reward: { en: "Cash ¥10,000, Certificate & Crest", bn: "নগদ ১০,০০০ ইয়েন, সনদ ও ক্রেস্ট" } },
      { place: { en: "4th–10th Place", bn: "৪র্থ–১০ম স্থান" }, reward: { en: "Cash ¥1,000, Certificate & Crest", bn: "নগদ ১,০০০ ইয়েন, সনদ ও ক্রেস্ট" } },
    ],
    note: {
      en: "All participants in the final round will be given a medal and a certificate.",
      bn: "ফাইনাল রাউন্ডের সকল অংশগ্রহণকারীকে মেডেল ও সনদ দেওয়া হবে।",
    },
  },

  contacts: {
    languages: { en: "English / Bangla / Japanese", bn: "ইংরেজি / বাংলা / জাপানি" },
    people: [
      { name: "Arifur Rahman", phone: "+81 70-2196-3624" },
      { name: "Forhad Hossain", phone: "+81 80-6654-7450" },
      { name: "Mohammad Abu Bokor", phone: "+81 90-6621-6252" },
    ],
  },

  organizer: {
    name: "Islamic Cultural Foundation Japan",
    tagline: {
      en: "A registered Da'wah and social welfare organization in Japan",
      bn: "জাপানে নিবন্ধিত একটি দাওয়াহ ও সমাজকল্যাণ সংস্থা",
    },
  },
};

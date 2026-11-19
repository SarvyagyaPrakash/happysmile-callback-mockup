/**
 * HappySmile Lead Callback Mockup - Application Logic
 * Vanilla JavaScript, Zero Dependencies, Accessible & Self-contained
 */

(function () {
  'use strict';

  // =========================================================================
  // Seed Data & Initial State
  // =========================================================================

  const INITIAL_LEADS = [
    {
      id: 'priya-sharma',
      name: 'Priya Sharma',
      initials: 'PS',
      avatarBg: '#D0593B',
      phone: '+91 98•••• ••214',
      treatment: 'Aligners',
      clinic: 'Indiranagar',
      askedTime: '2:04 PM',
      calledTime: null,
      responseDuration: 'Calling in 2 min',
      group: 'AI',
      status: 'Queued',
      bookedSlot: null,
      summary: 'Enquiry received 2:04 PM. AI assistant preparing call in about 2 minutes.',
      tags: [],
      urgent: false,
      waitingMins: null,
      recordingLength: 48,
      consent: "Form v3 · 2:03 PM · 'OK to be called, including by an AI assistant' · source: website enquiry form",
      transcript: [
        { speaker: 'Smile', text: "Hi Priya, this is Smile, HappySmile's AI assistant. You asked about aligners at Indiranagar. Is now a good time?" },
        { speaker: 'Priya', text: "Yes, go ahead." },
        { speaker: 'Smile', text: "Great. Would a weekend slot work for a free consultation?" },
        { speaker: 'Priya', text: "Saturday morning." },
        { speaker: 'Smile', text: "Saturday 11:30 AM with Dr. Rao is open. Shall I book it?" },
        { speaker: 'Priya', text: "Yes please." }
      ],
      callLogs: [
        { time: '2:04 PM', duration: '—', outcome: 'Enquiry registered', agent: 'Website form' }
      ]
    },
    {
      id: 'rahul-verma',
      name: 'Rahul Verma',
      initials: 'RV',
      avatarBg: '#2B4C7E',
      phone: '+91 97•••• ••891',
      treatment: 'Whitening',
      clinic: 'Koregaon Park',
      askedTime: '2:11 PM',
      calledTime: '2:13 PM',
      responseDuration: '2 min',
      group: 'AI',
      status: 'Booked',
      bookedSlot: 'Friday, 6:00 PM · Dr. Kulkarni',
      summary: 'Enquired about in-clinic teeth whitening packages. AI called in 2 min and confirmed evening availability. Booked Fri 6:00 PM with Dr. Kulkarni.',
      tags: [],
      urgent: false,
      waitingMins: null,
      recordingLength: 48,
      consent: "Form v3 · 2:10 PM · 'OK to be called, including by an AI assistant' · source: website enquiry form",
      transcript: [
        { speaker: 'Smile', text: "Hi Rahul, this is Smile from HappySmile. You enquired about teeth whitening at Koregaon Park. Is now a good time?" },
        { speaker: 'Rahul', text: "Yes, sure." },
        { speaker: 'Smile', text: "We have an opening this Friday at 6:00 PM with Dr. Kulkarni. Would that suit you?" },
        { speaker: 'Rahul', text: "Friday 6 works great for me." }
      ],
      callLogs: [
        { time: '2:13 PM', duration: '0:48', outcome: 'Booked consultation', agent: 'Smile (AI)' }
      ]
    },
    {
      id: 'neha-joshi',
      name: 'Neha Joshi',
      initials: 'NJ',
      avatarBg: '#7C4A3A',
      phone: '+91 96•••• ••432',
      treatment: 'Braces',
      clinic: 'Koregaon Park',
      askedTime: '9:22 AM',
      calledTime: '9:24 AM',
      responseDuration: '2 min',
      group: 'AI',
      status: 'Booked',
      bookedSlot: 'Saturday, 10:00 AM · Dr. Kulkarni',
      summary: 'Enquired about ceramic braces consultation. AI called in 2 min. Confirmed Saturday slot at 10:00 AM with Dr. Kulkarni.',
      tags: [],
      urgent: false,
      waitingMins: null,
      recordingLength: 52,
      consent: "Form v3 · 9:20 AM · 'OK to be called, including by an AI assistant' · source: website enquiry form",
      transcript: [
        { speaker: 'Smile', text: "Hi Neha, this is Smile, HappySmile's AI assistant. You enquired about ceramic braces at Koregaon Park. Can we chat briefly?" },
        { speaker: 'Neha', text: "Yes please." },
        { speaker: 'Smile', text: "Would Saturday at 10:00 AM work for a consultation with Dr. Kulkarni?" },
        { speaker: 'Neha', text: "Perfect, please book it." }
      ],
      callLogs: [
        { time: '9:24 AM', duration: '0:52', outcome: 'Booked consultation', agent: 'Smile (AI)' }
      ]
    },
    {
      id: 'ananya-iyer',
      name: 'Ananya Iyer',
      initials: 'AI',
      avatarBg: '#B45309',
      phone: '+91 98•••• ••655',
      treatment: 'Braces',
      clinic: 'Banjara Hills',
      askedTime: '1:48 PM',
      calledTime: '1:50 PM',
      responseDuration: '2 min',
      group: 'AI',
      status: 'Needs a human',
      bookedSlot: null,
      summary: 'Parent calling about braces for a 14-year-old daughter. Asked total cost and EMI options. Not booked.',
      tags: ['Price question', 'Minor'],
      urgent: false,
      waitingMins: null,
      recordingLength: 45,
      consent: "Form v3 · 1:47 PM · 'OK to be called, including by an AI assistant' · source: website enquiry form",
      transcript: [
        { speaker: 'Smile', text: "Hi Ananya, this is Smile from HappySmile regarding your braces enquiry at Banjara Hills." },
        { speaker: 'Parent', text: "Hello, I am Ananya's mother. She is 14. What will be the total price range and do you offer monthly EMI plans?" },
        { speaker: 'Smile', text: "Because this involves personalized treatment planning and flexible EMI options for a minor, let me connect you directly to our front-desk manager." }
      ],
      callLogs: [
        { time: '1:50 PM', duration: '0:45', outcome: 'Handoff: Price & Minor', agent: 'Smile (AI)' }
      ]
    },
    {
      id: 'mohammed-faisal',
      name: 'Mohammed Faisal',
      initials: 'MF',
      avatarBg: '#C53030',
      phone: '+91 99•••• ••310',
      treatment: 'Aligners',
      clinic: 'Indiranagar',
      askedTime: '12:30 PM',
      calledTime: '12:32 PM',
      responseDuration: '2 min',
      group: 'AI',
      status: 'Needs a human',
      bookedSlot: null,
      summary: 'Tooth pain for three days. Wants to be seen today. AI gave no advice and handed over.',
      tags: ['Pain'],
      urgent: true,
      waitingMins: 14,
      recordingLength: 35,
      consent: "Form v3 · 12:29 PM · 'OK to be called, including by an AI assistant' · source: website enquiry form",
      transcript: [
        { speaker: 'Smile', text: "Hi Mohammed, this is Smile, HappySmile's AI assistant regarding aligners at Indiranagar." },
        { speaker: 'Mohammed', text: "Hi, I have severe tooth pain in my lower molar for three days now. Can someone see me right away today?" },
        { speaker: 'Smile', text: "I understand you are experiencing tooth pain. As an AI assistant, I cannot provide medical advice. I am flagging this as urgent for our clinic team to contact you immediately." }
      ],
      callLogs: [
        { time: '12:32 PM', duration: '0:35', outcome: 'Handoff: Urgent Pain', agent: 'Smile (AI)' }
      ]
    },
    {
      id: 'sneha-kulkarni',
      name: 'Sneha Kulkarni',
      initials: 'SK',
      avatarBg: '#2D6A4F',
      phone: '+91 91•••• ••778',
      treatment: 'Implants',
      clinic: 'Banjara Hills',
      askedTime: '10:40 AM',
      calledTime: '10:42 AM',
      responseDuration: '2 min',
      group: 'AI',
      status: 'Needs a human',
      bookedSlot: null,
      summary: 'Enquired about single-tooth dental implant for upper molar. Specifically asked to talk to clinic doctor regarding procedure and recovery time.',
      tags: ['Implant', 'Asked for a person'],
      urgent: false,
      waitingMins: null,
      recordingLength: 48,
      consent: "Form v3 · 10:39 AM · 'OK to be called, including by an AI assistant' · source: website enquiry form",
      transcript: [
        { speaker: 'Smile', text: "Hi Sneha, this is Smile, HappySmile's AI assistant regarding your dental implant enquiry at Banjara Hills." },
        { speaker: 'Sneha', text: "Yes, I need to speak directly with an implantologist about bone grafting and recovery timeline before booking." },
        { speaker: 'Smile', text: "Certainly. Implants require specialized clinical assessment. I am passing your request to our senior front-desk team now." }
      ],
      callLogs: [
        { time: '10:42 AM', duration: '0:48', outcome: 'Handoff: Implant & Doctor consultation', agent: 'Smile (AI)' }
      ]
    },
    {
      id: 'kavya-nair',
      name: 'Kavya Nair',
      initials: 'KN',
      avatarBg: '#A2416B',
      phone: '+91 95•••• ••129',
      treatment: 'Whitening',
      clinic: 'Koregaon Park',
      askedTime: '1:02 PM',
      calledTime: '1:03 PM',
      responseDuration: '1 min',
      group: 'AI',
      status: 'No answer',
      bookedSlot: null,
      summary: 'No answer on initial AI call. Automated WhatsApp intro sent. Next automated retry queued for 6:00 PM.',
      tags: [],
      urgent: false,
      waitingMins: null,
      recordingLength: 25,
      consent: "Form v3 · 1:01 PM · 'OK to be called, including by an AI assistant' · source: website enquiry form",
      transcript: [
        { speaker: 'Smile', text: "Ringing for 25 seconds... No answer. Automated voicemail and WhatsApp callback link dispatched." }
      ],
      callLogs: [
        { time: '1:03 PM', duration: '0:25', outcome: 'No answer · WhatsApp sent', agent: 'Smile (AI)' }
      ]
    },
    {
      id: 'arjun-mehta',
      name: 'Arjun Mehta',
      initials: 'AM',
      avatarBg: '#4A5568',
      phone: '+91 98•••• ••543',
      treatment: 'Braces',
      clinic: 'Indiranagar',
      askedTime: '11:15 AM',
      calledTime: '11:17 AM & 12:15 PM',
      responseDuration: '2 min',
      group: 'AI',
      status: 'No answer',
      bookedSlot: null,
      summary: 'Two call attempts unanswered at 11:17 AM and 12:15 PM. WhatsApp enquiry link sent.',
      tags: [],
      urgent: false,
      waitingMins: null,
      recordingLength: 30,
      consent: "Form v3 · 11:14 AM · 'OK to be called, including by an AI assistant' · source: website enquiry form",
      transcript: [
        { speaker: 'Smile', text: "Attempt 1 (11:17 AM): Ringing 30s, no answer. Attempt 2 (12:15 PM): Busy. WhatsApp link delivered." }
      ],
      callLogs: [
        { time: '11:17 AM', duration: '0:30', outcome: 'No answer', agent: 'Smile (AI)' },
        { time: '12:15 PM', duration: '0:20', outcome: 'Line busy · WhatsApp sent', agent: 'Smile (AI)' }
      ]
    },
    {
      id: 'rohan-das',
      name: 'Rohan Das',
      initials: 'RD',
      avatarBg: '#57534E',
      phone: '+91 93•••• ••481',
      treatment: 'Whitening',
      clinic: 'Banjara Hills',
      askedTime: '11:45 AM',
      calledTime: '11:47 AM',
      responseDuration: '2 min',
      group: 'AI',
      status: 'Opted out',
      bookedSlot: null,
      summary: "AI called enquirer. Caller said 'please don't call me' on the call. Opted out, calls stopped immediately.",
      tags: [],
      urgent: false,
      waitingMins: null,
      recordingLength: 18,
      consent: "Form v3 · 11:44 AM · 'OK to be called, including by an AI assistant' · source: website enquiry form",
      transcript: [
        { speaker: 'Smile', text: "Hi Rohan, this is Smile, HappySmile's AI assistant regarding whitening at Banjara Hills." },
        { speaker: 'Rohan', text: "Please don't call me. I was just browsing." },
        { speaker: 'Smile', text: "Understood immediately. We have updated our records and will not call you again." }
      ],
      callLogs: [
        { time: '11:47 AM', duration: '0:18', outcome: 'Opted out · Calls halted', agent: 'Smile (AI)' }
      ]
    },
    {
      id: 'vikram-singh',
      name: 'Vikram Singh',
      initials: 'VS',
      avatarBg: '#78716C',
      phone: '+91 98•••• ••902',
      treatment: 'Aligners',
      clinic: 'Koregaon Park',
      askedTime: '2:20 PM',
      calledTime: null,
      responseDuration: 'Queued (10m)',
      group: 'Normal',
      status: 'Queued',
      bookedSlot: null,
      summary: 'Callback queued for front desk, due by about 6:20 PM.',
      tags: [],
      urgent: false,
      waitingMins: null,
      recordingLength: null,
      consent: "Form v3 · 2:19 PM · 'OK to be called' · source: website enquiry form",
      transcript: [],
      callLogs: [
        { time: '2:20 PM', duration: '—', outcome: 'Queued for human callback', agent: 'Clinic Front Desk' }
      ]
    },
    {
      id: 'divya-reddy',
      name: 'Divya Reddy',
      initials: 'DR',
      avatarBg: '#78716C',
      phone: '+91 97•••• ••634',
      treatment: 'Whitening',
      clinic: 'Banjara Hills',
      askedTime: '1:15 PM',
      calledTime: null,
      responseDuration: 'Queued (75m)',
      group: 'Normal',
      status: 'Queued',
      bookedSlot: null,
      summary: 'Callback queued for front desk, due by about 5:15 PM.',
      tags: [],
      urgent: false,
      waitingMins: null,
      recordingLength: null,
      consent: "Form v3 · 1:14 PM · 'OK to be called' · source: website enquiry form",
      transcript: [],
      callLogs: [
        { time: '1:15 PM', duration: '—', outcome: 'Queued for human callback', agent: 'Clinic Front Desk' }
      ]
    },
    {
      id: 'imran-qureshi',
      name: 'Imran Qureshi',
      initials: 'IQ',
      avatarBg: '#D0593B',
      phone: '+91 94•••• ••119',
      treatment: 'Braces',
      clinic: 'Indiranagar',
      askedTime: '9:52 AM',
      calledTime: '2:10 PM',
      responseDuration: '4 h 18 min',
      group: 'Normal',
      status: 'Booked',
      bookedSlot: 'Monday, 5:00 PM · Dr. Rao',
      summary: 'Asked 9:52 AM. Front desk reached him at 2:10 PM (4 h 18 min later). Booked Mon 5:00 PM.',
      tags: [],
      urgent: false,
      waitingMins: null,
      recordingLength: 192,
      consent: "Form v3 · 9:50 AM · 'OK to be called' · source: website enquiry form",
      transcript: [
        { speaker: 'Meera (Front Desk)', text: "Good afternoon Imran, calling from HappySmile Indiranagar regarding your braces enquiry from this morning." },
        { speaker: 'Imran', text: "Hello, yes. I had almost forgotten I filled the form, but I am still interested." },
        { speaker: 'Meera', text: "Apologies for the delay! We have a slot open next Monday at 5:00 PM with Dr. Rao. Shall I book that for you?" },
        { speaker: 'Imran', text: "Yes, Monday 5:00 PM works." }
      ],
      callLogs: [
        { time: '2:10 PM', duration: '3:12', outcome: 'Booked consultation', agent: 'Meera (Front desk)' }
      ]
    }
  ];

  const INITIAL_RULES = [
    { id: 'rule-pain', label: 'Pain or urgent symptoms', enabled: true },
    { id: 'rule-price', label: 'Any price, EMI or discount question', enabled: true },
    { id: 'rule-implant', label: 'Implants and other complex treatments', enabled: true },
    { id: 'rule-person', label: 'Caller asks for a person', enabled: true },
    { id: 'rule-minor', label: 'Caller is under 18', enabled: true },
    { id: 'rule-confused', label: 'Caller sounds confused or the line is poor', enabled: true },
    { id: 'rule-language', label: "A language the AI isn't confident in", enabled: true }
  ];

  // Storage key
  const STORAGE_KEY = 'happysmile_mockup_state_v1';

  // App State Container
  let state = {
    leads: JSON.parse(JSON.stringify(INITIAL_LEADS)),
    patientFlow: {
      step: 'initial', // 'initial' | 'ringing' | 'calling' | 'booked' | 'scheduled' | 'handoff' | 'optout'
      phone: '+91 98•••• ••214',
      isEditingPhone: false,
      scheduledTime: null,
      transcriptLinesRevealed: 0
    },
    rules: JSON.parse(JSON.stringify(INITIAL_RULES)),
    selectedClinic: 'all',
    activeTab: 'needs-human',
    newlyUpdatedLeadId: null,
    highlightUntil: 0,
    playingRecordingId: null,
    recordingProgress: 0,
    bookingSlotForId: null
  };

  // Safe Persistence
  function saveState() {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify({
        leads: state.leads,
        patientFlow: state.patientFlow,
        rules: state.rules,
        selectedClinic: state.selectedClinic,
        activeTab: state.activeTab
      }));
    } catch (e) {
      // In-memory fallback if storage blocked
    }
  }

  function loadState() {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.leads) state.leads = parsed.leads;
        if (parsed.patientFlow) state.patientFlow = parsed.patientFlow;
        if (parsed.rules) state.rules = parsed.rules;
        if (parsed.selectedClinic) state.selectedClinic = parsed.selectedClinic;
        if (parsed.activeTab) state.activeTab = parsed.activeTab;
      }
    } catch (e) {
      // Keep defaults
    }
  }

  // Active Intervals
  let ringingTimer = null;
  let transcriptTimer = null;
  let audioTimer = null;
  let urgentTickerInterval = null;

  // =========================================================================
  // DOM References
  // =========================================================================

  const navBtnPatient = document.getElementById('nav-btn-patient');
  const navBtnTeam = document.getElementById('nav-btn-team');
  const screenPatient = document.getElementById('screen-patient');
  const screenTeam = document.getElementById('screen-team');
  const patientContent = document.getElementById('patient-content');
  const btnPatientStartOverTop = document.getElementById('btn-patient-start-over-top');

  const clinicSelect = document.getElementById('clinic-select');
  const btnHandoffRules = document.getElementById('btn-handoff-rules');
  const btnResetDemo = document.getElementById('btn-reset-demo');
  const leadsListEl = document.getElementById('leads-list');

  const modalRulesOverlay = document.getElementById('modal-rules-overlay');
  const btnCloseRulesModal = document.getElementById('btn-close-rules-modal');
  const btnSaveRules = document.getElementById('btn-save-rules');
  const handoffRulesList = document.getElementById('handoff-rules-list');

  const drawerOverlay = document.getElementById('lead-drawer-overlay');
  const drawerPanel = document.getElementById('lead-drawer');
  const btnCloseDrawer = document.getElementById('btn-close-drawer');
  const drawerTitle = document.getElementById('drawer-title');
  const drawerSubtitle = document.getElementById('drawer-subtitle');
  const drawerBody = document.getElementById('drawer-body');

  const toastRegion = document.getElementById('toast-region');

  // Tab elements
  const tabButtons = {
    'needs-human': document.getElementById('tab-needs-human'),
    'booked': document.getElementById('tab-booked'),
    'follow-up': document.getElementById('tab-follow-up'),
    'control-group': document.getElementById('tab-control-group'),
    'all': document.getElementById('tab-all')
  };

  const countBadges = {
    'needs-human': document.getElementById('count-needs-human'),
    'booked': document.getElementById('count-booked'),
    'follow-up': document.getElementById('count-follow-up'),
    'control-group': document.getElementById('count-control-group'),
    'all': document.getElementById('count-all')
  };

  // =========================================================================
  // Toast Notification System
  // =========================================================================

  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'status');
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="#D0593B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M16 6l-8 8-4-4"/>
      </svg>
      <span>${escapeHtml(message)}</span>
    `;
    toastRegion.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(8px)';
      toast.style.transition = 'all 0.2s ease-out';
      setTimeout(() => toast.remove(), 220);
    }, 3200);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function (m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
    });
  }

  // =========================================================================
  // Routing (#/patient and #/team)
  // =========================================================================

  function handleRoute() {
    let hash = window.location.hash;
    if (hash !== '#/patient' && hash !== '#/team') {
      window.location.hash = '#/patient';
      return;
    }

    if (hash === '#/patient') {
      screenPatient.style.display = 'block';
      screenPatient.setAttribute('aria-hidden', 'false');
      screenTeam.style.display = 'none';
      screenTeam.setAttribute('aria-hidden', 'true');

      navBtnPatient.classList.add('active');
      navBtnPatient.setAttribute('aria-selected', 'true');
      navBtnPatient.tabIndex = 0;

      navBtnTeam.classList.remove('active');
      navBtnTeam.setAttribute('aria-selected', 'false');
      navBtnTeam.tabIndex = -1;

      renderPatientScreen();
    } else {
      screenPatient.style.display = 'none';
      screenPatient.setAttribute('aria-hidden', 'true');
      screenTeam.style.display = 'block';
      screenTeam.setAttribute('aria-hidden', 'false');

      navBtnTeam.classList.add('active');
      navBtnTeam.setAttribute('aria-selected', 'true');
      navBtnTeam.tabIndex = 0;

      navBtnPatient.classList.remove('active');
      navBtnPatient.setAttribute('aria-selected', 'false');
      navBtnPatient.tabIndex = -1;

      renderTeamScreen();
    }
  }

  navBtnPatient.addEventListener('click', () => { window.location.hash = '#/patient'; });
  navBtnTeam.addEventListener('click', () => { window.location.hash = '#/team'; });

  // Top nav keyboard arrow support
  [navBtnPatient, navBtnTeam].forEach((btn, idx, arr) => {
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const next = arr[idx === 0 ? 1 : 0];
        next.focus();
        next.click();
      }
    });
  });

  // =========================================================================
  // Screen 1: Patient Screen Rendering & Logic
  // =========================================================================

  function renderPatientScreen() {
    const flow = state.patientFlow;
    btnPatientStartOverTop.style.display = (flow.step !== 'initial') ? 'inline-flex' : 'none';

    if (flow.step === 'initial') {
      renderPatientInitial();
    } else if (flow.step === 'ringing') {
      renderPatientRinging();
    } else if (flow.step === 'calling') {
      renderPatientCalling();
    } else if (flow.step === 'booked') {
      renderPatientBooked();
    } else if (flow.step === 'scheduled') {
      renderPatientScheduled();
    } else if (flow.step === 'handoff') {
      renderPatientHandoff();
    } else if (flow.step === 'optout') {
      renderPatientOptout();
    }
  }

  function renderPatientInitial() {
    patientContent.innerHTML = `
      <div class="success-tick-wrapper" aria-hidden="true">
        <svg class="tick-svg" viewBox="0 0 44 44" fill="none">
          <circle class="tick-circle" cx="22" cy="22" r="20" stroke-width="2.5" fill="#E8F6F4"/>
          <path class="tick-check" d="M14 22L19.5 27.5L30 17" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>

      <h2 class="patient-heading">Thanks, Priya. We've got your enquiry.</h2>

      <span class="treatment-chip">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        Aligners · Indiranagar clinic
      </span>

      <div class="patient-announcement">
        Smile, our AI assistant, will call you on
        <span class="phone-number-display" id="phone-display-text">${escapeHtml(state.patientFlow.phone)}</span>
        in about 2 minutes.
        <button id="btn-wrong-number" class="text-link wrong-number-link">Wrong number?</button>
      </div>

      <div id="phone-edit-container" style="display: ${state.patientFlow.isEditingPhone ? 'flex' : 'none'};" class="phone-edit-row">
        <input type="tel" id="input-edit-phone" class="phone-edit-input" value="${escapeHtml(state.patientFlow.phone)}" aria-label="Edit phone number">
        <button id="btn-save-phone" class="btn btn-secondary btn-sm">Save</button>
      </div>

      <div class="mint-info-card" role="note">
        <svg class="mint-info-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="10" cy="10" r="9"/>
          <line x1="10" y1="9" x2="10" y2="14"/>
          <circle cx="10" cy="6" r="0.7" fill="currentColor"/>
        </svg>
        <p class="mint-info-text">The first call is from an AI assistant. A real person from our team is one tap away, any time.</p>
      </div>

      <div class="patient-actions-stack">
        <button id="btn-call-now" class="btn btn-primary">Call me now</button>
        <button id="btn-call-later" class="btn btn-secondary">Call me later</button>
        <button id="btn-speak-person" class="btn btn-outline">I'd rather speak to a person</button>
      </div>

      <!-- Expandable inline chips for Call me later -->
      <div id="later-chips-panel" class="later-chips-panel" style="display: none;">
        <span class="chips-label">Pick a callback time</span>
        <div class="chips-row">
          <button class="chip-btn" data-time="In 30 minutes">In 30 minutes</button>
          <button class="chip-btn" data-time="Today 6 to 8 PM">Today 6 to 8 PM</button>
          <button class="chip-btn" data-time="Tomorrow morning">Tomorrow morning</button>
          <button class="chip-btn" id="chip-btn-custom">Choose a time</button>
        </div>
        <div id="custom-time-row" class="time-picker-wrapper" style="display: none;">
          <input type="time" id="native-time-input" class="native-time-input" aria-label="Select custom time">
          <button id="btn-confirm-time" class="btn btn-secondary btn-sm">Confirm</button>
        </div>
      </div>

      <div class="small-print-block">
        <p class="consent-notice">When you sent the form you agreed to be called by HappySmile, including by our AI assistant.</p>
        <button id="btn-dont-call" class="text-link text-subtle">Don't call me</button>
      </div>
    `;

    // Attach Event Listeners
    attachInitialListeners();
  }

  function attachInitialListeners() {
    const btnWrongNumber = document.getElementById('btn-wrong-number');
    const phoneEditContainer = document.getElementById('phone-edit-container');
    const inputEditPhone = document.getElementById('input-edit-phone');
    const btnSavePhone = document.getElementById('btn-save-phone');
    const phoneDisplayText = document.getElementById('phone-display-text');

    btnWrongNumber.addEventListener('click', () => {
      state.patientFlow.isEditingPhone = true;
      phoneEditContainer.style.display = 'flex';
      inputEditPhone.focus();
    });

    btnSavePhone.addEventListener('click', () => {
      const val = inputEditPhone.value.trim();
      if (val) {
        state.patientFlow.phone = val;
        phoneDisplayText.textContent = val;
        // Also update Priya's lead phone in state
        const priya = state.leads.find(l => l.id === 'priya-sharma');
        if (priya) priya.phone = val;
      }
      state.patientFlow.isEditingPhone = false;
      phoneEditContainer.style.display = 'none';
      saveState();
      showToast('Phone number updated');
    });

    const btnCallNow = document.getElementById('btn-call-now');
    const btnCallLater = document.getElementById('btn-call-later');
    const laterChipsPanel = document.getElementById('later-chips-panel');
    const btnSpeakPerson = document.getElementById('btn-speak-person');
    const btnDontCall = document.getElementById('btn-dont-call');

    btnCallNow.addEventListener('click', () => {
      startCallNowFlow();
    });

    btnCallLater.addEventListener('click', () => {
      const isVisible = laterChipsPanel.style.display === 'flex';
      laterChipsPanel.style.display = isVisible ? 'none' : 'flex';
    });

    // Chips click
    laterChipsPanel.querySelectorAll('.chip-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const time = btn.getAttribute('data-time');
        if (time) {
          selectCallLaterTime(time);
        } else if (btn.id === 'chip-btn-custom') {
          const customRow = document.getElementById('custom-time-row');
          customRow.style.display = 'flex';
          const timeInput = document.getElementById('native-time-input');
          timeInput.focus();
        }
      });
    });

    const btnConfirmTime = document.getElementById('btn-confirm-time');
    const nativeTimeInput = document.getElementById('native-time-input');
    btnConfirmTime.addEventListener('click', () => {
      if (nativeTimeInput.value) {
        selectCallLaterTime('Today at ' + nativeTimeInput.value);
      } else {
        selectCallLaterTime('Today at 6:30 PM');
      }
    });

    btnSpeakPerson.addEventListener('click', () => {
      selectSpeakToPerson();
    });

    btnDontCall.addEventListener('click', () => {
      selectDontCallMe();
    });
  }

  // Flow A: Call Me Now
  function startCallNowFlow() {
    clearTimers();
    state.patientFlow.step = 'ringing';
    saveState();
    renderPatientScreen();

    // 3 seconds ringing, then start call transcript
    ringingTimer = setTimeout(() => {
      state.patientFlow.step = 'calling';
      state.patientFlow.transcriptLinesRevealed = 1;
      saveState();
      renderPatientScreen();

      // Progressively reveal transcript every 1.4 seconds
      const priya = state.leads.find(l => l.id === 'priya-sharma');
      const totalLines = priya.transcript.length; // 6 lines

      transcriptTimer = setInterval(() => {
        if (state.patientFlow.transcriptLinesRevealed < totalLines) {
          state.patientFlow.transcriptLinesRevealed++;
          renderTranscriptItems();
          // scroll to bottom
          const container = document.getElementById('transcript-container');
          if (container) container.scrollTop = container.scrollHeight;
        } else {
          clearInterval(transcriptTimer);
          // 1.4 seconds after final line: go to Booked state
          setTimeout(() => {
            finishCallNowAsBooked();
          }, 1400);
        }
      }, 1400);

    }, 3000);
  }

  function renderPatientRinging() {
    patientContent.innerHTML = `
      <div class="calling-view">
        <div class="pulse-phone-container" aria-hidden="true">
          <div class="pulse-ring"></div>
          <div class="pulse-ring ring-2"></div>
          <div class="pulse-phone-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </div>
        </div>

        <h3 class="calling-title">Smile is calling you…</h3>
        <p class="calling-sub">Connecting AI assistant to ${escapeHtml(state.patientFlow.phone)}</p>

        <div class="calling-footer-action">
          <button id="btn-cancel-to-human" class="btn btn-outline" style="width: 100%;">Talk to a person</button>
        </div>
      </div>
    `;

    document.getElementById('btn-cancel-to-human').addEventListener('click', () => {
      clearTimers();
      selectSpeakToPerson();
    });
  }

  function renderPatientCalling() {
    patientContent.innerHTML = `
      <div class="active-call-view">
        <div class="call-status-bar">
          <div class="call-live-indicator">
            <span class="dot-live"></span>
            <span>Call connected · Smile AI</span>
          </div>
          <span>Indiranagar Clinic</span>
        </div>

        <div id="transcript-container" class="transcript-container" role="log" aria-live="polite">
          <!-- Bubbles injected by renderTranscriptItems -->
        </div>

        <div class="call-bottom-action">
          <button id="btn-call-talk-person" class="btn btn-outline btn-sm" style="width: 100%;">Talk to a person</button>
        </div>
      </div>
    `;

    renderTranscriptItems();

    document.getElementById('btn-call-talk-person').addEventListener('click', () => {
      clearTimers();
      selectSpeakToPerson();
    });
  }

  function renderTranscriptItems() {
    const container = document.getElementById('transcript-container');
    if (!container) return;

    const priya = state.leads.find(l => l.id === 'priya-sharma');
    const lines = priya.transcript.slice(0, state.patientFlow.transcriptLinesRevealed);

    container.innerHTML = lines.map(line => {
      const isAI = line.speaker === 'Smile';
      return `
        <div class="chat-bubble ${isAI ? 'bubble-ai' : 'bubble-user'}">
          <span class="speaker-tag">${escapeHtml(line.speaker)}</span>
          <p>${escapeHtml(line.text)}</p>
        </div>
      `;
    }).join('');

    container.scrollTop = container.scrollHeight;
  }

  function finishCallNowAsBooked() {
    clearTimers();
    state.patientFlow.step = 'booked';

    // Update Priya's lead
    const priya = state.leads.find(l => l.id === 'priya-sharma');
    if (priya) {
      priya.status = 'Booked';
      priya.group = 'AI';
      priya.bookedSlot = 'Saturday, 11:30 AM · Dr. Rao';
      priya.calledTime = '2:06 PM';
      priya.responseDuration = '2 min';
      priya.summary = 'Enquired about aligners at Indiranagar. AI called in 2 min and verified availability. Booked free consultation for Sat 11:30 AM with Dr. Rao.';
      priya.callLogs = [
        { time: '2:04 PM', duration: '—', outcome: 'Enquiry registered', agent: 'Website form' },
        { time: '2:06 PM', duration: '0:48', outcome: 'Booked consultation', agent: 'Smile (AI)' }
      ];
    }

    saveState();
    renderPatientScreen();
  }

  function renderPatientBooked() {
    patientContent.innerHTML = `
      <div class="result-view">
        <div class="success-tick-wrapper" aria-hidden="true">
          <svg class="tick-svg" viewBox="0 0 44 44" fill="none">
            <circle class="tick-circle" cx="22" cy="22" r="20" stroke-width="2.5" fill="#E8F6F4"/>
            <path class="tick-check" d="M14 22L19.5 27.5L30 17" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <div class="result-card card-booked">
          <h3 class="result-title">Booked: Saturday, 11:30 AM · Free consultation · Dr. Rao · HappySmile Indiranagar</h3>
          <p class="result-desc">You'll get a WhatsApp confirmation and a reminder the day before.</p>
        </div>

        <div class="result-actions-secondary">
          <button id="btn-add-calendar" class="btn btn-outline btn-sm">Add to calendar</button>
          <button id="btn-change-slot" class="btn btn-outline btn-sm">Change slot</button>
        </div>

        <div class="result-primary-cta">
          <button id="btn-see-happysmile" class="btn btn-primary btn-large-cta">See what HappySmile sees →</button>
          <button id="btn-start-over-inner" class="text-link text-subtle text-xs" style="align-self: center;">Start over</button>
        </div>
      </div>
    `;

    document.getElementById('btn-add-calendar').addEventListener('click', () => {
      showToast('Added to calendar (Saturday, 11:30 AM)');
    });

    document.getElementById('btn-change-slot').addEventListener('click', () => {
      showToast('Slot change request noted. Clinic team will reach out.');
    });

    document.getElementById('btn-see-happysmile').addEventListener('click', () => {
      goToScreen2WithLead('priya-sharma', 'booked');
    });

    document.getElementById('btn-start-over-inner').addEventListener('click', resetPatientView);
  }

  // Flow B: Call Me Later
  function selectCallLaterTime(timeStr) {
    clearTimers();
    state.patientFlow.step = 'scheduled';
    state.patientFlow.scheduledTime = timeStr;

    // Update Priya's lead
    const priya = state.leads.find(l => l.id === 'priya-sharma');
    if (priya) {
      priya.status = 'Scheduled';
      priya.group = 'AI';
      priya.bookedSlot = null;
      priya.calledTime = null;
      priya.responseDuration = 'Scheduled (' + timeStr + ')';
      priya.summary = 'Enquired about aligners at Indiranagar. Requested callback at ' + timeStr + '. AI automated callback scheduled.';
      priya.callLogs = [
        { time: '2:04 PM', duration: '—', outcome: 'Enquiry registered', agent: 'Website form' },
        { time: '2:05 PM', duration: '—', outcome: 'Callback scheduled: ' + timeStr, agent: 'Patient selection' }
      ];
    }

    saveState();
    renderPatientScreen();
  }

  function renderPatientScheduled() {
    patientContent.innerHTML = `
      <div class="result-view">
        <div class="result-card card-scheduled">
          <h3 class="result-title">Done. Smile will call you at ${escapeHtml(state.patientFlow.scheduledTime)}.</h3>
          <p class="result-desc">We've saved your slot. Smile will call ${escapeHtml(state.patientFlow.phone)} right on time.</p>
          <div style="margin-top: 8px;">
            <button id="btn-change-later-time" class="text-link text-xs">Change</button>
          </div>
        </div>

        <div class="result-primary-cta">
          <button id="btn-see-happysmile" class="btn btn-primary btn-large-cta">See what HappySmile sees →</button>
          <button id="btn-start-over-inner" class="text-link text-subtle text-xs" style="align-self: center;">Start over</button>
        </div>
      </div>
    `;

    document.getElementById('btn-change-later-time').addEventListener('click', () => {
      state.patientFlow.step = 'initial';
      renderPatientScreen();
      // Reopen chips
      setTimeout(() => {
        const chips = document.getElementById('later-chips-panel');
        if (chips) chips.style.display = 'flex';
      }, 50);
    });

    document.getElementById('btn-see-happysmile').addEventListener('click', () => {
      goToScreen2WithLead('priya-sharma', 'follow-up');
    });

    document.getElementById('btn-start-over-inner').addEventListener('click', resetPatientView);
  }

  // Flow C: Speak to a person
  function selectSpeakToPerson() {
    clearTimers();
    state.patientFlow.step = 'handoff';

    // Update Priya's lead
    const priya = state.leads.find(l => l.id === 'priya-sharma');
    if (priya) {
      priya.status = 'Needs a human';
      priya.group = 'AI';
      priya.bookedSlot = null;
      priya.calledTime = '2:05 PM';
      priya.responseDuration = '1 min';
      priya.tags = ['Asked for a person'];
      priya.summary = 'Enquired about aligners at Indiranagar. Requested to speak directly with clinic front-desk team. Handed over.';
      priya.callLogs = [
        { time: '2:04 PM', duration: '—', outcome: 'Enquiry registered', agent: 'Website form' },
        { time: '2:05 PM', duration: '—', outcome: 'Handoff to front desk requested', agent: 'Patient selection' }
      ];
    }

    saveState();
    renderPatientScreen();
  }

  function renderPatientHandoff() {
    patientContent.innerHTML = `
      <div class="result-view">
        <div class="result-card card-handoff">
          <h3 class="result-title">A team member from Indiranagar will call you within about 10 minutes (clinic hours 9 AM to 8 PM).</h3>
          <p class="result-desc">We've shared your enquiry, so you won't have to repeat yourself.</p>
        </div>

        <div class="result-primary-cta">
          <button id="btn-see-happysmile" class="btn btn-primary btn-large-cta">See what HappySmile sees →</button>
          <button id="btn-start-over-inner" class="text-link text-subtle text-xs" style="align-self: center;">Start over</button>
        </div>
      </div>
    `;

    document.getElementById('btn-see-happysmile').addEventListener('click', () => {
      goToScreen2WithLead('priya-sharma', 'needs-human');
    });

    document.getElementById('btn-start-over-inner').addEventListener('click', resetPatientView);
  }

  // Flow D: Don't call me
  function selectDontCallMe() {
    clearTimers();
    state.patientFlow.step = 'optout';

    // Update Priya's lead
    const priya = state.leads.find(l => l.id === 'priya-sharma');
    if (priya) {
      priya.status = 'Opted out';
      priya.group = 'AI';
      priya.bookedSlot = null;
      priya.calledTime = null;
      priya.responseDuration = 'Opted out';
      priya.tags = [];
      priya.summary = 'Asked not to be called. Calls stopped.';
      priya.callLogs = [
        { time: '2:04 PM', duration: '—', outcome: 'Enquiry registered', agent: 'Website form' },
        { time: '2:05 PM', duration: '—', outcome: 'Opted out: Calls halted', agent: 'Patient selection' }
      ];
    }

    saveState();
    renderPatientScreen();
  }

  function renderPatientOptout() {
    patientContent.innerHTML = `
      <div class="result-view">
        <div class="result-card card-optout">
          <h3 class="result-title">Understood. We won't call you.</h3>
          <p class="result-desc">Your enquiry is closed, and you can enquire again whenever you like.</p>
        </div>

        <div class="result-primary-cta">
          <button id="btn-see-happysmile" class="btn btn-primary btn-large-cta">See what HappySmile sees →</button>
          <button id="btn-start-over-inner" class="text-link text-subtle text-xs" style="align-self: center;">Start over</button>
        </div>
      </div>
    `;

    document.getElementById('btn-see-happysmile').addEventListener('click', () => {
      goToScreen2WithLead('priya-sharma', 'all');
    });

    document.getElementById('btn-start-over-inner').addEventListener('click', resetPatientView);
  }

  function resetPatientView() {
    clearTimers();
    state.patientFlow = {
      step: 'initial',
      phone: '+91 98•••• ••214',
      isEditingPhone: false,
      scheduledTime: null,
      transcriptLinesRevealed: 0
    };

    // Reset Priya to initial queued lead
    const priyaInitial = INITIAL_LEADS.find(l => l.id === 'priya-sharma');
    const priyaCurrent = state.leads.find(l => l.id === 'priya-sharma');
    if (priyaCurrent && priyaInitial) {
      Object.assign(priyaCurrent, JSON.parse(JSON.stringify(priyaInitial)));
    }

    saveState();
    renderPatientScreen();
    showToast('Screen 1 reset to initial enquiry');
  }

  btnPatientStartOverTop.addEventListener('click', resetPatientView);

  function clearTimers() {
    if (ringingTimer) clearTimeout(ringingTimer);
    if (transcriptTimer) clearInterval(transcriptTimer);
    if (audioTimer) clearInterval(audioTimer);
  }

  function goToScreen2WithLead(leadId, targetTab) {
    state.activeTab = targetTab;
    state.newlyUpdatedLeadId = leadId;
    state.highlightUntil = Date.now() + 6000;
    saveState();
    window.location.hash = '#/team';
  }

  // =========================================================================
  // Screen 2: Lead Desk Rendering & Logic
  // =========================================================================

  function renderTeamScreen() {
    clinicSelect.value = state.selectedClinic;
    updateTabCounts();
    renderTabsHeader();
    renderLeadsList();
  }

  clinicSelect.addEventListener('change', (e) => {
    state.selectedClinic = e.target.value;
    saveState();
    updateTabCounts();
    renderLeadsList();
  });

  // Filter leads based on clinic and tab
  function getFilteredLeads() {
    let list = state.leads;

    // Clinic filter
    if (state.selectedClinic !== 'all') {
      list = list.filter(l => l.clinic === state.selectedClinic);
    }

    // Tab filter
    if (state.activeTab === 'booked') {
      list = list.filter(l => l.status === 'Booked');
    } else if (state.activeTab === 'needs-human') {
      list = list.filter(l => l.status === 'Needs a human' || l.status === 'With front desk');
    } else if (state.activeTab === 'follow-up') {
      list = list.filter(l => l.status === 'No answer' || l.status === 'Scheduled');
    } else if (state.activeTab === 'control-group') {
      list = list.filter(l => l.group === 'Normal');
    } else if (state.activeTab === 'all') {
      // all leads for the clinic
    }

    return list;
  }

  function updateTabCounts() {
    let list = state.leads;
    if (state.selectedClinic !== 'all') {
      list = list.filter(l => l.clinic === state.selectedClinic);
    }

    const counts = {
      'needs-human': list.filter(l => l.status === 'Needs a human' || l.status === 'With front desk').length,
      'booked': list.filter(l => l.status === 'Booked').length,
      'follow-up': list.filter(l => l.status === 'No answer' || l.status === 'Scheduled').length,
      'control-group': list.filter(l => l.group === 'Normal').length,
      'all': list.length
    };

    for (const key in counts) {
      if (countBadges[key]) {
        countBadges[key].textContent = counts[key];
      }
    }
  }

  function renderTabsHeader() {
    for (const key in tabButtons) {
      const btn = tabButtons[key];
      const isSelected = key === state.activeTab;
      btn.setAttribute('aria-selected', isSelected ? 'true' : 'false');
      btn.tabIndex = isSelected ? 0 : -1;
    }
  }

  // Tab click and arrow key navigation
  Object.keys(tabButtons).forEach((key, idx, arrKeys) => {
    const btn = tabButtons[key];
    btn.addEventListener('click', () => {
      state.activeTab = key;
      saveState();
      renderTabsHeader();
      renderLeadsList();
    });

    btn.addEventListener('keydown', (e) => {
      let targetIdx = null;
      if (e.key === 'ArrowRight') {
        targetIdx = (idx + 1) % arrKeys.length;
      } else if (e.key === 'ArrowLeft') {
        targetIdx = (idx - 1 + arrKeys.length) % arrKeys.length;
      }

      if (targetIdx !== null) {
        e.preventDefault();
        const nextKey = arrKeys[targetIdx];
        state.activeTab = nextKey;
        saveState();
        renderTabsHeader();
        renderLeadsList();
        tabButtons[nextKey].focus();
      }
    });
  });

  function renderLeadsList() {
    const filtered = getFilteredLeads();
    const now = Date.now();
    const isPriyaHighlight = state.newlyUpdatedLeadId && (now < state.highlightUntil);

    if (filtered.length === 0) {
      leadsListEl.innerHTML = `
        <div class="empty-state-view">
          <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
          </svg>
          <h3 class="empty-title">No leads in this view</h3>
          <p class="empty-sub">There are currently no enquiries under the selected clinic and tab filter.</p>
        </div>
      `;
      return;
    }

    leadsListEl.innerHTML = filtered.map(lead => {
      const isHighlighted = isPriyaHighlight && lead.id === state.newlyUpdatedLeadId;
      return createLeadCardHtml(lead, isHighlighted);
    }).join('');

    attachLeadCardListeners();

    // If highlighted, clear badge after remaining time
    if (isPriyaHighlight) {
      const remaining = state.highlightUntil - now;
      setTimeout(() => {
        state.newlyUpdatedLeadId = null;
        renderLeadsList();
      }, remaining);
    }
  }

  function createLeadCardHtml(lead, isHighlighted) {
    const statusClass = getStatusPillClass(lead.status);
    const isPlaying = state.playingRecordingId === lead.id;

    // Timeline description
    let timelineHtml = '';
    if (lead.calledTime) {
      const isFast = lead.group === 'AI';
      timelineHtml = `
        <div class="timeline-row">
          <span class="timeline-text">Asked ${escapeHtml(lead.askedTime)} → Called ${escapeHtml(lead.calledTime)} (${escapeHtml(lead.responseDuration)})</span>
          <div class="timeline-bar-wrapper">
            <div class="timeline-bar-fill ${isFast ? 'fast' : 'slow'}"></div>
          </div>
        </div>
      `;
    } else {
      timelineHtml = `
        <div class="timeline-row">
          <span class="timeline-text">Asked ${escapeHtml(lead.askedTime)} · ${escapeHtml(lead.responseDuration)}</span>
        </div>
      `;
    }

    // Urgent waiting ticker
    let urgentTagHtml = '';
    if (lead.urgent && lead.waitingMins) {
      urgentTagHtml = `
        <span class="urgent-ticker-tag" id="waiting-ticker-${lead.id}">
          <span class="urgent-dot"></span>
          Waiting ${lead.waitingMins} min
        </span>
      `;
    }

    // Reason tags
    const tagsHtml = (lead.tags || []).map(t => `<span class="handoff-tag">${escapeHtml(t)}</span>`).join('');

    // Summary
    let summaryHtml = '';
    if (lead.summary) {
      summaryHtml = `<div class="ai-summary-block">${escapeHtml(lead.summary)}</div>`;
    }

    // Simulated recording playback UI
    let audioHtml = '';
    if (isPlaying) {
      const progressPercent = Math.min(100, Math.round((state.recordingProgress / lead.recordingLength) * 100));
      const currentSecs = Math.floor(state.recordingProgress);
      const formattedTime = '0:' + (currentSecs < 10 ? '0' : '') + currentSecs;
      audioHtml = `
        <div class="audio-player-sim">
          <button class="btn-play-sim btn-pause-action" data-id="${lead.id}" aria-label="Pause recording">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16"/>
              <rect x="14" y="4" width="4" height="16"/>
            </svg>
          </button>
          <div class="audio-track-sim">
            <div class="audio-time-meta">
              <span>Playing simulated call recording</span>
              <span>${formattedTime} / 0:${lead.recordingLength}</span>
            </div>
            <div class="audio-bar-track">
              <div class="audio-bar-fill" style="width: ${progressPercent}%;"></div>
            </div>
          </div>
        </div>
      `;
    }

    // Actions
    let actionButtons = `
      <div class="actions-left">
        ${lead.recordingLength ? `
          <button class="btn btn-outline btn-sm btn-play-recording" data-id="${lead.id}">
            <svg class="icon-inline" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
            <span>${isPlaying ? 'Pause' : 'Play recording 0:' + lead.recordingLength}</span>
          </button>
        ` : ''}

        ${lead.status === 'Needs a human' ? `
          <button class="btn btn-primary btn-sm btn-take-over" data-id="${lead.id}">Take over</button>
        ` : ''}

        ${lead.status === 'With front desk' ? `
          <span class="card-chip" style="color: var(--teal-primary); font-weight: 600;">Assigned to Meera</span>
        ` : ''}

        ${(lead.status === 'Needs a human' || lead.status === 'With front desk' || lead.status === 'Scheduled' || lead.status === 'No answer' || lead.status === 'Queued') ? `
          <button class="btn btn-outline btn-sm btn-open-mark-booked" data-id="${lead.id}">Mark booked</button>
        ` : ''}

        ${lead.status === 'No answer' ? `
          <button class="btn btn-secondary btn-sm btn-retry-now" data-id="${lead.id}">Retry now</button>
        ` : ''}
      </div>
      <button class="btn btn-outline btn-sm btn-open-details" data-id="${lead.id}">Details</button>
    `;

    // Inline slot selector if triggered
    let slotPopoverHtml = '';
    if (state.bookingSlotForId === lead.id) {
      slotPopoverHtml = `
        <div class="slot-select-popover">
          <select class="slot-dropdown" id="slot-select-${lead.id}" aria-label="Select booking slot">
            <option value="Today 4:00 PM · Dr. Rao">Today 4:00 PM · Dr. Rao</option>
            <option value="Tomorrow 11:30 AM · Dr. Kulkarni">Tomorrow 11:30 AM · Dr. Kulkarni</option>
            <option value="Saturday 10:00 AM · Dr. Rao">Saturday 10:00 AM · Dr. Rao</option>
            <option value="Monday 5:00 PM · Dr. Sharma">Monday 5:00 PM · Dr. Sharma</option>
          </select>
          <button class="btn btn-primary btn-sm btn-confirm-booked" data-id="${lead.id}">Confirm</button>
          <button class="btn btn-outline btn-sm btn-cancel-booked" data-id="${lead.id}">Cancel</button>
        </div>
      `;
    }

    return `
      <article class="lead-card ${lead.urgent ? 'card-urgent' : ''} ${isHighlighted ? 'card-highlight-new' : ''}" id="lead-card-${lead.id}">
        ${isHighlighted ? '<span class="new-badge">New</span>' : ''}

        <div class="card-header">
          <div class="patient-identity">
            <div class="avatar-circle" style="background-color: ${lead.avatarBg};" aria-hidden="true">${lead.initials}</div>
            <div class="patient-meta-text">
              <h3 class="lead-name">${escapeHtml(lead.name)}</h3>
              <span class="lead-phone">${escapeHtml(lead.phone)}</span>
            </div>
          </div>
          <div class="card-badges">
            <span class="status-pill ${statusClass}">${escapeHtml(lead.status)}</span>
            <span class="group-badge ${lead.group === 'AI' ? 'group-badge-ai' : 'group-badge-normal'}">${lead.group === 'AI' ? 'AI group' : 'Normal group'}</span>
          </div>
        </div>

        <div class="chips-row-card">
          <span class="card-chip">${escapeHtml(lead.treatment)}</span>
          <span class="card-chip">${escapeHtml(lead.clinic)}</span>
          ${urgentTagHtml}
          ${tagsHtml}
        </div>

        ${timelineHtml}
        ${summaryHtml}
        ${audioHtml}

        ${slotPopoverHtml}

        <div class="card-actions-toolbar">
          ${actionButtons}
        </div>
      </article>
    `;
  }

  function getStatusPillClass(status) {
    switch (status) {
      case 'Booked': return 'pill-booked';
      case 'Needs a human': return 'pill-human';
      case 'No answer': return 'pill-noanswer';
      case 'Scheduled': return 'pill-scheduled';
      case 'With front desk': return 'pill-frontdesk';
      case 'Opted out': return 'pill-optout';
      case 'Queued': return 'pill-queued';
      default: return 'pill-queued';
    }
  }

  function attachLeadCardListeners() {
    // Play recording
    leadsListEl.querySelectorAll('.btn-play-recording').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        toggleAudioPlayback(id);
      });
    });

    leadsListEl.querySelectorAll('.btn-pause-action').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        toggleAudioPlayback(id);
      });
    });

    // Take over
    leadsListEl.querySelectorAll('.btn-take-over').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const lead = state.leads.find(l => l.id === id);
        if (lead) {
          lead.status = 'With front desk';
          lead.callLogs.push({
            time: '2:30 PM',
            duration: '—',
            outcome: 'Assigned to Meera (front desk)',
            agent: 'Meera (Front Desk)'
          });
          saveState();
          updateTabCounts();
          renderLeadsList();
          showToast(`Lead assigned to Meera (front desk)`);
        }
      });
    });

    // Open mark booked slot dropdown
    leadsListEl.querySelectorAll('.btn-open-mark-booked').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        state.bookingSlotForId = (state.bookingSlotForId === id) ? null : id;
        renderLeadsList();
      });
    });

    leadsListEl.querySelectorAll('.btn-confirm-booked').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const select = document.getElementById(`slot-select-${id}`);
        const slotVal = select ? select.value : 'Tomorrow 11:30 AM · Dr. Kulkarni';
        const lead = state.leads.find(l => l.id === id);
        if (lead) {
          lead.status = 'Booked';
          lead.bookedSlot = slotVal;
          lead.callLogs.push({
            time: '2:30 PM',
            duration: '—',
            outcome: 'Booked: ' + slotVal,
            agent: 'Meera (Front Desk)'
          });
          state.bookingSlotForId = null;
          saveState();
          updateTabCounts();
          renderLeadsList();
          showToast(`Marked as booked: ${slotVal}`);
        }
      });
    });

    leadsListEl.querySelectorAll('.btn-cancel-booked').forEach(btn => {
      btn.addEventListener('click', () => {
        state.bookingSlotForId = null;
        renderLeadsList();
      });
    });

    // Retry now
    leadsListEl.querySelectorAll('.btn-retry-now').forEach(btn => {
      btn.addEventListener('click', () => {
        showToast('Retry queued for 6:00 PM');
      });
    });

    // Details drawer
    leadsListEl.querySelectorAll('.btn-open-details').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        openDetailsDrawer(id);
      });
    });
  }

  // Simulated audio playback engine
  function toggleAudioPlayback(leadId) {
    if (state.playingRecordingId === leadId) {
      // Pause
      if (audioTimer) clearInterval(audioTimer);
      state.playingRecordingId = null;
      renderLeadsList();
    } else {
      if (audioTimer) clearInterval(audioTimer);
      state.playingRecordingId = leadId;
      state.recordingProgress = 0;
      renderLeadsList();

      const lead = state.leads.find(l => l.id === leadId);
      const total = lead.recordingLength || 48;

      audioTimer = setInterval(() => {
        state.recordingProgress += 1;
        if (state.recordingProgress > total) {
          clearInterval(audioTimer);
          state.playingRecordingId = null;
          state.recordingProgress = 0;
          renderLeadsList();
        } else {
          // Re-render audio bar
          const fill = document.querySelector(`#lead-card-${leadId} .audio-bar-fill`);
          const meta = document.querySelector(`#lead-card-${leadId} .audio-time-meta span:last-child`);
          if (fill && meta) {
            const percent = Math.min(100, Math.round((state.recordingProgress / total) * 100));
            fill.style.width = percent + '%';
            const cur = Math.floor(state.recordingProgress);
            meta.textContent = `0:${cur < 10 ? '0' : ''}${cur} / 0:${total}`;
          }
        }
      }, 500); // simulated double-time so user can see progress fast
    }
  }

  // =========================================================================
  // Details Drawer
  // =========================================================================

  function openDetailsDrawer(leadId) {
    const lead = state.leads.find(l => l.id === leadId);
    if (!lead) return;

    drawerTitle.textContent = lead.name;
    drawerSubtitle.textContent = `${lead.treatment} · ${lead.clinic} clinic · ${lead.phone}`;

    let transcriptHtml = '';
    if (lead.transcript && lead.transcript.length > 0) {
      transcriptHtml = `
        <div class="drawer-section">
          <h4 class="drawer-section-title">Call Transcript</h4>
          <div class="transcript-container" style="max-height: 220px; background: var(--bg-surface-alt); padding: 12px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
            ${lead.transcript.map(line => `
              <div class="chat-bubble ${line.speaker === 'Smile' ? 'bubble-ai' : 'bubble-user'}">
                <span class="speaker-tag">${escapeHtml(line.speaker)}</span>
                <p>${escapeHtml(line.text)}</p>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    const callLogsHtml = `
      <div class="drawer-section">
        <h4 class="drawer-section-title">Call Log & Events</h4>
        <table class="drawer-call-table">
          <thead>
            <tr>
              <th scope="col">Time</th>
              <th scope="col">Duration</th>
              <th scope="col">Outcome</th>
              <th scope="col">Handled By</th>
            </tr>
          </thead>
          <tbody>
            ${(lead.callLogs || []).map(log => `
              <tr>
                <td>${escapeHtml(log.time)}</td>
                <td>${escapeHtml(log.duration)}</td>
                <td>${escapeHtml(log.outcome)}</td>
                <td>${escapeHtml(log.agent)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;

    drawerBody.innerHTML = `
      <div class="drawer-section">
        <h4 class="drawer-section-title">Lead Status</h4>
        <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 8px;">
          <span class="status-pill ${getStatusPillClass(lead.status)}">${escapeHtml(lead.status)}</span>
          <span class="group-badge ${lead.group === 'AI' ? 'group-badge-ai' : 'group-badge-normal'}">${lead.group === 'AI' ? 'AI group' : 'Normal group'}</span>
          ${lead.bookedSlot ? `<span class="card-chip" style="color: var(--green-text); font-weight: 600;">${escapeHtml(lead.bookedSlot)}</span>` : ''}
        </div>
      </div>

      ${lead.summary ? `
        <div class="drawer-section">
          <h4 class="drawer-section-title">Summary</h4>
          <div class="ai-summary-block">${escapeHtml(lead.summary)}</div>
        </div>
      ` : ''}

      ${transcriptHtml}
      ${callLogsHtml}

      <div class="drawer-section">
        <h4 class="drawer-section-title">Consent Record</h4>
        <div class="consent-card-box">
          <p><strong>Consent verified:</strong> ${escapeHtml(lead.consent)}</p>
        </div>
      </div>
    `;

    drawerOverlay.style.display = 'block';
    drawerOverlay.setAttribute('aria-hidden', 'false');
    drawerPanel.style.display = 'flex';
    drawerPanel.setAttribute('aria-hidden', 'false');
    btnCloseDrawer.focus();
  }

  function closeDetailsDrawer() {
    drawerOverlay.style.display = 'none';
    drawerOverlay.setAttribute('aria-hidden', 'true');
    drawerPanel.style.display = 'none';
    drawerPanel.setAttribute('aria-hidden', 'true');
  }

  btnCloseDrawer.addEventListener('click', closeDetailsDrawer);
  drawerOverlay.addEventListener('click', closeDetailsDrawer);

  // =========================================================================
  // Handoff Rules Modal
  // =========================================================================

  function openHandoffRulesModal() {
    renderHandoffRulesList();
    modalRulesOverlay.style.display = 'flex';
    modalRulesOverlay.setAttribute('aria-hidden', 'false');
    btnCloseRulesModal.focus();
  }

  function closeHandoffRulesModal() {
    modalRulesOverlay.style.display = 'none';
    modalRulesOverlay.setAttribute('aria-hidden', 'true');
  }

  function renderHandoffRulesList() {
    handoffRulesList.innerHTML = state.rules.map(rule => `
      <li class="rule-toggle-item">
        <label class="rule-label" for="switch-${rule.id}">${escapeHtml(rule.label)}</label>
        <label class="switch">
          <input type="checkbox" id="switch-${rule.id}" data-id="${rule.id}" ${rule.enabled ? 'checked' : ''}>
          <span class="slider" aria-hidden="true"></span>
        </label>
      </li>
    `).join('');

    handoffRulesList.querySelectorAll('input[type="checkbox"]').forEach(input => {
      input.addEventListener('change', (e) => {
        const id = input.getAttribute('data-id');
        const rule = state.rules.find(r => r.id === id);
        if (rule) {
          rule.enabled = input.checked;
        }
      });
    });
  }

  btnHandoffRules.addEventListener('click', openHandoffRulesModal);
  btnCloseRulesModal.addEventListener('click', closeHandoffRulesModal);
  modalRulesOverlay.addEventListener('click', (e) => {
    if (e.target === modalRulesOverlay) closeHandoffRulesModal();
  });

  btnSaveRules.addEventListener('click', () => {
    saveState();
    closeHandoffRulesModal();
    showToast('Handoff rules updated successfully');
  });

  // Global ESC Key Handler
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (modalRulesOverlay.style.display === 'flex') {
        closeHandoffRulesModal();
      } else if (drawerPanel.style.display === 'flex') {
        closeDetailsDrawer();
      }
    }
  });

  // =========================================================================
  // Reset Demo Logic
  // =========================================================================

  btnResetDemo.addEventListener('click', () => {
    clearTimers();
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch (e) {}

    state.leads = JSON.parse(JSON.stringify(INITIAL_LEADS));
    state.patientFlow = {
      step: 'initial',
      phone: '+91 98•••• ••214',
      isEditingPhone: false,
      scheduledTime: null,
      transcriptLinesRevealed: 0
    };
    state.rules = JSON.parse(JSON.stringify(INITIAL_RULES));
    state.selectedClinic = 'all';
    state.activeTab = 'needs-human';
    state.newlyUpdatedLeadId = null;
    state.highlightUntil = 0;
    state.playingRecordingId = null;
    state.bookingSlotForId = null;

    saveState();
    renderPatientScreen();
    renderTeamScreen();
    showToast('Demo reset to initial seed data');
  });

  // Urgent Ticker: Mohammed Faisal waiting timer ticks up every 30s
  urgentTickerInterval = setInterval(() => {
    const mf = state.leads.find(l => l.id === 'mohammed-faisal');
    if (mf && mf.urgent) {
      mf.waitingMins = (mf.waitingMins || 14) + 1;
      const tickerEl = document.getElementById(`waiting-ticker-${mf.id}`);
      if (tickerEl) {
        tickerEl.innerHTML = `
          <span class="urgent-dot"></span>
          Waiting ${mf.waitingMins} min
        `;
      }
    }
  }, 30000);

  // =========================================================================
  // Initialization
  // =========================================================================

  loadState();
  handleRoute();
  window.addEventListener('hashchange', handleRoute);

})();

/* =========================================================
   PMMS - Preventive Maintenance Management System
   Complete JavaScript
========================================================= */


/* =========================================================
   DEFAULT USERS
========================================================= */

const DEFAULT_USERS = [
    {
        id: "USR001",
        name: "Super Administrator",
        username: "superadmin",
        password: "Super@123",
        role: "Super Admin"
    },

    {
        id: "USR002",
        name: "Administrator",
        username: "admin",
        password: "Admin@123",
        role: "Admin"
    },

    {
        id: "USR003",
        name: "Maintenance Supervisor",
        username: "supervisor",
        password: "Supervisor@123",
        role: "Supervisor"
    },
    {
        id: "USR004",
        name: "Quality Assurance",
        username: "quality",
        password: "Quality@123",
        role: "Quality"
    }
];


/* =========================================================
   MACHINE / PM MASTER DATA
========================================================= */

const PM_TASKS = [

    {
        id: 1,
        machine: "Feeding Tray E1 / E2",
        component: "Tray & hopper body",
        activity: "Visual check for cracks, dents, foreign material; clear blockages",
        frequency: "Daily",
        responsible: "Operator"
    },

    {
        id: 2,
        machine: "Feeding Tray E1 / E2",
        component: "Fasteners & supports",
        activity: "Check tightness of bolts, clamps and support frame",
        frequency: "Weekly",
        responsible: "Maintenance"
    },

    {
        id: 3,
        machine: "Feeding Tray E1 / E2",
        component: "Body surface",
        activity: "Inspect for corrosion / paint damage; clean surface",
        frequency: "Monthly",
        responsible: "Maintenance"
    },

    {
        id: 4,
        machine: "Feeding Tray E1 / E2",
        component: "Structure",
        activity: "Full structural inspection including welds and load-bearing points",
        frequency: "Quarterly",
        responsible: "Maintenance"
    },


    {
        id: 5,
        machine: "Fumigation Bin 1-4",
        component: "Bin shell & lid",
        activity: "Visual check for leaks, dents, pest activity before loading",
        frequency: "Daily",
        responsible: "Plant Supervisor"
    },

    {
        id: 6,
        machine: "Fumigation Bin 1-4",
        component: "Door seals / gaskets",
        activity: "Inspect gas-proof seals, locking mechanism, hinges",
        frequency: "Weekly",
        responsible: "Maintenance"
    },

    {
        id: 7,
        machine: "Fumigation Bin 1-4",
        component: "Bin interior",
        activity: "Clean and dry bin; check for residue and pest activity",
        frequency: "Monthly",
        responsible: "Plant Supervisor"
    },

    {
        id: 8,
        machine: "Fumigation Bin 1-4",
        component: "Gas-tightness",
        activity: "Pressure/leak test of bin and inlet ports",
        frequency: "Quarterly",
        responsible: "Maintenance + Fumigation Agency"
    },

    {
        id: 9,
        machine: "Fumigation Bin 1-4",
        component: "Bin shell",
        activity: "Corrosion check, touch-up coating/repainting as needed",
        frequency: "Annual",
        responsible: "Maintenance"
    },


    {
        id: 10,
        machine: "Belt Conveyor B1 / B2",
        component: "Belt & tracking",
        activity: "Visual check of belt tracking, tears, and debris on belt",
        frequency: "Daily",
        responsible: "Operator"
    },

    {
        id: 11,
        machine: "Belt Conveyor B1 / B2",
        component: "Belt tension, rollers",
        activity: "Check belt tension, idlers/rollers for wear, clean pulleys",
        frequency: "Weekly",
        responsible: "Maintenance"
    },

    {
        id: 12,
        machine: "Belt Conveyor B1 / B2",
        component: "Bearings & motor",
        activity: "Lubricate bearings, check motor mounting and noise",
        frequency: "Monthly",
        responsible: "Maintenance"
    },

    {
        id: 13,
        machine: "Belt Conveyor B1 / B2",
        component: "Gearbox & alignment",
        activity: "Check gearbox oil level, belt alignment, guard condition",
        frequency: "Quarterly",
        responsible: "Maintenance"
    },

    {
        id: 14,
        machine: "Belt Conveyor B1 / B2",
        component: "Belt & gearbox",
        activity: "Assess belt for replacement; full gearbox oil change",
        frequency: "Annual",
        responsible: "Maintenance"
    },


    {
        id: 15,
        machine: "Bucket Conveyor (Elevator) E3 / E4",
        component: "General running",
        activity: "Visual check, listen for abnormal noise/vibration",
        frequency: "Daily",
        responsible: "Operator"
    },

    {
        id: 16,
        machine: "Bucket Conveyor (Elevator) E3 / E4",
        component: "Buckets & belt",
        activity: "Check bucket bolts/cups, belt tension, chain lubrication",
        frequency: "Weekly",
        responsible: "Maintenance"
    },

    {
        id: 17,
        machine: "Bucket Conveyor (Elevator) E3 / E4",
        component: "Boot & head pulley",
        activity: "Inspect boot section for choke, lubricate head/tail bearings",
        frequency: "Monthly",
        responsible: "Maintenance"
    },

    {
        id: 18,
        machine: "Bucket Conveyor (Elevator) E3 / E4",
        component: "Buckets & alignment",
        activity: "Inspect buckets for wear/deformation, check belt alignment",
        frequency: "Quarterly",
        responsible: "Maintenance"
    },

    {
        id: 19,
        machine: "Bucket Conveyor (Elevator) E3 / E4",
        component: "Gearbox & full unit",
        activity: "Gearbox oil change, full elevator inspection & overhaul check",
        frequency: "Annual",
        responsible: "Maintenance"
    },


    {
        id: 20,
        machine: "Aspirator (Fine Dust & Filth Separator)",
        component: "Screens / filters",
        activity: "Clean screens and dust collection bags/cyclone",
        frequency: "Daily",
        responsible: "Operator"
    },

    {
        id: 21,
        machine: "Aspirator (Fine Dust & Filth Separator)",
        component: "Fan & drive belt",
        activity: "Check fan blades for dust build-up, belt tension",
        frequency: "Weekly",
        responsible: "Maintenance"
    },

    {
        id: 22,
        machine: "Aspirator (Fine Dust & Filth Separator)",
        component: "Ducting & motor bearing",
        activity: "Inspect ducting for leaks/choke, lubricate motor bearings",
        frequency: "Monthly",
        responsible: "Maintenance"
    },

    {
        id: 23,
        machine: "Aspirator (Fine Dust & Filth Separator)",
        component: "Airflow calibration",
        activity: "Verify airflow/suction settings against product profile",
        frequency: "Quarterly",
        responsible: "Maintenance + QA"
    },

    {
        id: 24,
        machine: "Aspirator (Fine Dust & Filth Separator)",
        component: "Fan & motor",
        activity: "Fan balancing check; motor bearing replacement as needed",
        frequency: "Annual",
        responsible: "Maintenance"
    },


    {
        id: 25,
        machine: "De-stoner",
        component: "Deck / screen",
        activity: "Clean deck surface and stone outlet chute",
        frequency: "Daily",
        responsible: "Operator"
    },

    {
        id: 26,
        machine: "De-stoner",
        component: "Drive & eccentric mechanism",
        activity: "Check oscillation/eccentric drive and drive belt",
        frequency: "Weekly",
        responsible: "Maintenance"
    },

    {
        id: 27,
        machine: "De-stoner",
        component: "Bearings & screen mesh",
        activity: "Lubricate bearings; inspect screen/mesh condition",
        frequency: "Monthly",
        responsible: "Maintenance"
    },

    {
        id: 28,
        machine: "De-stoner",
        component: "Deck inclination",
        activity: "Calibrate deck inclination/vibration setting; check drive belt wear",
        frequency: "Quarterly",
        responsible: "Maintenance"
    },

    {
        id: 29,
        machine: "De-stoner",
        component: "Full unit",
        activity: "Full overhaul of drive assembly and deck",
        frequency: "Annual",
        responsible: "Maintenance"
    },


    {
        id: 30,
        machine: "Holding Storage Bin",
        component: "Bin body",
        activity: "Visual check for leaks, moisture ingress, pest activity",
        frequency: "Daily",
        responsible: "Operator"
    },

    {
        id: 31,
        machine: "Holding Storage Bin",
        component: "Discharge gate",
        activity: "Check discharge gate/valve operation and level indicator if fitted",
        frequency: "Weekly",
        responsible: "Maintenance"
    },

    {
        id: 32,
        machine: "Holding Storage Bin",
        component: "Bin interior",
        activity: "Clean bin interior; check for residue build-up",
        frequency: "Monthly",
        responsible: "Plant Supervisor"
    },

    {
        id: 33,
        machine: "Holding Storage Bin",
        component: "Structure",
        activity: "Structural inspection of bin shell and supports",
        frequency: "Quarterly",
        responsible: "Maintenance"
    },


    {
        id: 34,
        machine: "Auto Weighing & Packing Machine",
        component: "Weighing hopper / pan",
        activity: "Zero-check, clean hopper and weighing pan, verify bag count accuracy",
        frequency: "Daily",
        responsible: "Operator"
    },

    {
        id: 35,
        machine: "Auto Weighing & Packing Machine",
        component: "Load cells / pneumatics",
        activity: "Check load cell readings, air pressure, pneumatic leaks, sensors",
        frequency: "Weekly",
        responsible: "Maintenance"
    },

    {
        id: 36,
        machine: "Auto Weighing & Packing Machine",
        component: "Calibration",
        activity: "Full calibration with certified test weights; lubricate moving parts",
        frequency: "Monthly",
        responsible: "QA + Maintenance"
    },

    {
        id: 37,
        machine: "Auto Weighing & Packing Machine",
        component: "Seals & electricals",
        activity: "Replace worn seals/gaskets; check electrical connections/wiring",
        frequency: "Quarterly",
        responsible: "Maintenance"
    },

    {
        id: 38,
        machine: "Auto Weighing & Packing Machine",
        component: "External calibration",
        activity: "Third-party calibration certification of load cells; full servicing",
        frequency: "Annual",
        responsible: "Maintenance + External Agency"
    },


    {
        id: 39,
        machine: "Metal Detector (CCP-1)",
        component: "Start-up / challenge test",
        activity: "Start-up test cards Fe/Non-Fe/SS; challenge test every 2 hrs; log results",
        frequency: "Daily",
        responsible: "Operator + QA Executive"
    },

    {
        id: 40,
        machine: "Metal Detector (CCP-1)",
        component: "Reject mechanism",
        activity: "Check reject/diverter mechanism operation and belt condition",
        frequency: "Weekly",
        responsible: "Maintenance"
    },

    {
        id: 41,
        machine: "Metal Detector (CCP-1)",
        component: "Sensitivity calibration",
        activity: "Verify sensitivity settings and product learning mode profiles",
        frequency: "Monthly",
        responsible: "QA Executive"
    },

    {
        id: 42,
        machine: "Metal Detector (CCP-1)",
        component: "Electrical & software",
        activity: "Check electrical connections; verify firmware/settings backup",
        frequency: "Quarterly",
        responsible: "Maintenance"
    },

    {
        id: 43,
        machine: "Metal Detector (CCP-1)",
        component: "Vendor calibration",
        activity: "External calibration certificate and full OEM servicing",
        frequency: "Annual",
        responsible: "Maintenance + External Agency"
    },


    {
        id: 44,
        machine: "Stitching Machine (OPRP-1)",
        component: "Needle & thread path",
        activity: "Clean needle area, check thread tension and stitch quality",
        frequency: "Daily",
        responsible: "Operator"
    },

    {
        id: 45,
        machine: "Stitching Machine (OPRP-1)",
        component: "Lubrication & needle",
        activity: "Lubricate moving parts; inspect/replace worn needles",
        frequency: "Weekly",
        responsible: "Maintenance"
    },

    {
        id: 46,
        machine: "Stitching Machine (OPRP-1)",
        component: "Timing belt / motor",
        activity: "Check timing belt condition and motor drive",
        frequency: "Monthly",
        responsible: "Maintenance"
    },

    {
        id: 47,
        machine: "Stitching Machine (OPRP-1)",
        component: "Loopers & tension unit",
        activity: "Replace worn needles/loopers; full lubrication service",
        frequency: "Quarterly",
        responsible: "Maintenance"
    },

    {
        id: 48,
        machine: "Stitching Machine (OPRP-1)",
        component: "Motor & gearbox",
        activity: "Motor and gearbox overhaul / inspection",
        frequency: "Annual",
        responsible: "Maintenance"
    },


    {
        id: 49,
        machine: "Finished Goods Storage",
        component: "Storage area",
        activity: "Visual pest check; monitor temperature/humidity of storage area",
        frequency: "Daily",
        responsible: "Warehouse Supervisor"
    },

    {
        id: 50,
        machine: "Finished Goods Storage",
        component: "Pallets & racking",
        activity: "Check pallet condition and racking for damage",
        frequency: "Weekly",
        responsible: "Warehouse Supervisor"
    },

    {
        id: 51,
        machine: "Finished Goods Storage",
        component: "Pest control",
        activity: "Pest control inspection/treatment; verify cover-fumigation compliance",
        frequency: "Monthly",
        responsible: "QC Head"
    },

    {
        id: 52,
        machine: "Finished Goods Storage",
        component: "Structure",
        activity: "Structural inspection of racking, flooring and roof for leaks",
        frequency: "Quarterly",
        responsible: "Maintenance"
    },


    {
        id: 53,
        machine: "Digital Weighing Balance (QC Lab)",
        component: "Pan & zero check",
        activity: "Clean weighing pan; zero-check before use",
        frequency: "Daily",
        responsible: "QA Executive"
    },

    {
        id: 54,
        machine: "Digital Weighing Balance (QC Lab)",
        component: "Calibration check",
        activity: "Verify calibration using standard reference weights",
        frequency: "Weekly",
        responsible: "QA Executive"
    },

    {
        id: 55,
        machine: "Digital Weighing Balance (QC Lab)",
        component: "Log book review",
        activity: "Review instrument usage log book for completeness",
        frequency: "Monthly",
        responsible: "QA Manager"
    },

    {
        id: 56,
        machine: "Digital Weighing Balance (QC Lab)",
        component: "External calibration",
        activity: "External/NABL calibration certification",
        frequency: "Annual",
        responsible: "QA Manager + External Agency"
    },


    {
        id: 57,
        machine: "Digital Moisture Meter (QC Lab)",
        component: "Sample chamber",
        activity: "Clean sample chamber; zero-check before use",
        frequency: "Daily",
        responsible: "QA Executive"
    },

    {
        id: 58,
        machine: "Digital Moisture Meter (QC Lab)",
        component: "Calibration check",
        activity: "Verify reading against known moisture reference sample",
        frequency: "Weekly",
        responsible: "QA Executive"
    },

    {
        id: 59,
        machine: "Digital Moisture Meter (QC Lab)",
        component: "Log book review",
        activity: "Review calibration/usage log for completeness",
        frequency: "Monthly",
        responsible: "QA Manager"
    },

    {
        id: 60,
        machine: "Digital Moisture Meter (QC Lab)",
        component: "External calibration",
        activity: "External calibration certification",
        frequency: "Annual",
        responsible: "QA Manager + External Agency"
    }

];


/* =========================================================
   STORAGE
========================================================= */

const USERS_KEY = "PMMS_USERS_V3";
const RECORDS_KEY = "PMMS_RECORDS_V3";
const SESSION_KEY = "PMMS_SESSION_V3";
const SETTINGS_KEY = "PMMS_SETTINGS_V4";
const REPORT_BATCH_KEY = "PMMS_REPORT_BATCHES_V4";


/* =========================================================
   GLOBAL STATE
========================================================= */

let currentUser = null;
let selectedStatuses = {};


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", function () {
    initializeApplication();
    applyTheme(getSettings().theme || "light");
});


/* =========================================================
   INITIALIZE
========================================================= */

function initializeApplication() {

    initializeUsers();

    setupEventListeners();

    const savedSession = localStorage.getItem(SESSION_KEY);

    if (savedSession) {

        try {

            const session = JSON.parse(savedSession);

            const user = getUsers().find(
                u => u.id === session.id
            );

            if (user) {

                currentUser = user;

                showApplication();

                return;
            }

        } catch (error) {

            localStorage.removeItem(SESSION_KEY);

        }
    }

    showLogin();

}


/* =========================================================
   INITIALIZE USERS
========================================================= */

function initializeUsers() {

    const existing = localStorage.getItem(USERS_KEY);

    if (!existing) {

        localStorage.setItem(
            USERS_KEY,
            JSON.stringify(DEFAULT_USERS)
        );

    } else {

        try {

            let users = JSON.parse(existing);

            if (!Array.isArray(users) || users.length === 0) {
                users = [...DEFAULT_USERS];
            } else {
                // Always restore any missing built-in accounts. This prevents
                // older PMMS_V3/V4 browser data from causing "Invalid username
                // or password" after an application update. Existing custom
                // users are preserved.
                DEFAULT_USERS.forEach(defaultUser => {
                    const index = users.findIndex(
                        u => String(u && u.username || "").trim().toLowerCase() ===
                             defaultUser.username.toLowerCase()
                    );

                    if (index === -1) {
                        users.push({ ...defaultUser });
                    } else {
                        // Repair missing/corrupt built-in credentials while
                        // preserving the user's name/role if already valid.
                        const existingUser = users[index] || {};
                        if (existingUser.id === defaultUser.id ||
                            defaultUser.username === "superadmin" ||
                            defaultUser.username === "admin" ||
                            defaultUser.username === "supervisor" ||
                            defaultUser.username === "quality") {
                            users[index] = {
                                ...defaultUser,
                                name: existingUser.name || defaultUser.name,
                                role: existingUser.role || defaultUser.role
                            };
                        }
                    }
                });
            }

            localStorage.setItem(USERS_KEY, JSON.stringify(users));

        } catch (error) {

            localStorage.setItem(
                USERS_KEY,
                JSON.stringify(DEFAULT_USERS)
            );

        }
    }
}


/* =========================================================
   GET USERS
========================================================= */

function getUsers() {

    try {

        return JSON.parse(
            localStorage.getItem(USERS_KEY)
        ) || [];

    } catch (error) {

        return [];
    }
}


/* =========================================================
   SAVE USERS
========================================================= */

function saveUsers(users) {

    localStorage.setItem(
        USERS_KEY,
        JSON.stringify(users)
    );

}


/* =========================================================
   GET RECORDS
========================================================= */

function getRecords() {

    try {

        return JSON.parse(
            localStorage.getItem(RECORDS_KEY)
        ) || [];

    } catch (error) {

        return [];
    }
}


/* =========================================================
   SAVE RECORDS
========================================================= */

function saveRecords(records) {

    localStorage.setItem(
        RECORDS_KEY,
        JSON.stringify(records)
    );

}


/* =========================================================
   REPORT BATCH / SETTINGS HELPERS
========================================================= */

function getSettings() {
    try {
        return JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {
            theme: "light",
            supervisorDownloadApproved: false
        };
    } catch (error) {
        return { theme: "light", supervisorDownloadApproved: false };
    }
}

function saveSettings(settings) {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

function getReportBatches() {
    try {
        return JSON.parse(localStorage.getItem(REPORT_BATCH_KEY)) || [];
    } catch (error) {
        return [];
    }
}

function saveReportBatches(batches) {
    localStorage.setItem(REPORT_BATCH_KEY, JSON.stringify(batches));
}

function getSupervisorSheetCount(date, supervisorId) {
    return getReportBatches().filter(
        b => b.date === date &&
             b.supervisorId === supervisorId &&
             !b.authorizationOnly
    ).length;
}

function hasCompleteReport(date, supervisorId) {
    const records = getRecords().filter(
        r => r.date === date && r.supervisorId === supervisorId
    );
    return PM_TASKS.every(task => records.some(
        r => r.taskId === task.id && r.status
    ));
}

function canDownloadData() {
    if (!currentUser) return false;
    if (
        currentUser.role === "Admin" ||
        currentUser.role === "Super Admin" ||
        currentUser.role === "Quality"
    ) return true;

    if (currentUser.role === "Supervisor") {
        return !!getSettings().supervisorDownloadApproved;
    }

    return false;
}

function isPrivilegedViewer() {
    return !!currentUser &&
        ["Admin", "Super Admin", "Quality"].includes(currentUser.role);
}

function getWeekStart(dateString) {
    const d = new Date(dateString + "T00:00:00");
    const day = d.getDay();
    const diff = day === 0 ? -6 : 1 - day;
    d.setDate(d.getDate() + diff);
    return formatDate(d);
}

function formatDate(date) {
    return [
        date.getFullYear(),
        String(date.getMonth() + 1).padStart(2, "0"),
        String(date.getDate()).padStart(2, "0")
    ].join("-");
}

function getMonthStart(dateString) {
    const d = new Date(dateString + "T00:00:00");
    d.setDate(1);
    return formatDate(d);
}

function getYearStart(dateString) {
    const d = new Date(dateString + "T00:00:00");
    d.setMonth(0, 1);
    return formatDate(d);
}

/* Automatic report scheduling:
   - Daily: every day
   - Weekly: every Monday for the previous/current week view
   - Monthly: on the first day of a new month and month-end view
   - Yearly: on Jan 1 and year-end view
   A date may belong to more than one schedule. */
function getAutomaticReportTypes(dateString = getToday()) {
    const d = new Date(dateString + "T00:00:00");
    const next = new Date(d);
    next.setDate(next.getDate() + 1);
    const isLastDayOfMonth = next.getMonth() !== d.getMonth();
    const isLastDayOfYear = isLastDayOfMonth && d.getMonth() === 11;

    const types = ["Daily"];
    if (d.getDay() === 1) types.push("Weekly");
    if (d.getDate() === 1 || isLastDayOfMonth) types.push("Monthly");
    if ((d.getMonth() === 0 && d.getDate() === 1) || isLastDayOfYear) {
        types.push("Yearly");
    }
    return [...new Set(types)];
}

function getReportRange(type, anchorDate) {
    const d = new Date((anchorDate || getToday()) + "T00:00:00");

    if (type === "Daily") {
        const x = formatDate(d);
        return { from: x, to: x };
    }

    if (type === "Weekly") {
        const from = new Date(d);
        const day = from.getDay();
        from.setDate(from.getDate() + (day === 0 ? -6 : 1 - day));
        const to = new Date(from);
        to.setDate(to.getDate() + 6);
        return { from: formatDate(from), to: formatDate(to) };
    }

    if (type === "Monthly") {
        const from = new Date(d.getFullYear(), d.getMonth(), 1);
        const to = new Date(d.getFullYear(), d.getMonth() + 1, 0);
        return { from: formatDate(from), to: formatDate(to) };
    }

    const from = new Date(d.getFullYear(), 0, 1);
    const to = new Date(d.getFullYear(), 11, 31);
    return { from: formatDate(from), to: formatDate(to) };
}

function filterRecordsByReportType(records, type, anchorDate) {
    const range = getReportRange(type, anchorDate);
    return records.filter(r => r.date >= range.from && r.date <= range.to);
}

function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const settings = getSettings();
    settings.theme = theme;
    saveSettings(settings);
    const select = document.getElementById("themeSelect");
    if (select) select.value = theme;
}

/* =========================================================
   LOGIN
========================================================= */

function login(username, password) {

    const users = getUsers();

    const cleanUsername = username.trim().toLowerCase();

    const cleanPassword = String(password ?? "");

    const user = users.find(
        u =>
            u &&
            String(u.username ?? "").trim().toLowerCase() === cleanUsername &&
            String(u.password ?? "") === cleanPassword
    );

    if (!user) {

        return false;
    }

    currentUser = user;

    localStorage.setItem(
        SESSION_KEY,
        JSON.stringify({
            id: user.id
        })
    );

    return true;
}


/* =========================================================
   SHOW LOGIN
========================================================= */

function showLogin() {

    document.getElementById("loginPage")
        .classList.remove("hidden");

    document.getElementById("appPage")
        .classList.add("hidden");

}


/* =========================================================
   SHOW APPLICATION
========================================================= */

function showApplication() {

    document.getElementById("loginPage")
        .classList.add("hidden");

    document.getElementById("appPage")
        .classList.remove("hidden");

    updateUserInterface();

    setDefaultDates();

    renderPMTable();

    updateDashboard();

    renderRecords();

    renderApproval();

    renderUsers();
    updateDownloadAccessUI();
    renderReports();

    applyTheme(getSettings().theme || "light");
    showPage("dashboardPage");

}


/* =========================================================
   UPDATE USER INTERFACE
========================================================= */

function updateUserInterface() {

    if (!currentUser) return;

    document.getElementById("sideUserName").textContent = currentUser.name;
    document.getElementById("sideUserRole").textContent = currentUser.role;
    document.getElementById("topUserName").textContent = currentUser.name;
    document.getElementById("topUserRole").textContent = currentUser.role;

    document.querySelectorAll(".supervisor-only").forEach(element => {
        element.style.display = currentUser.role === "Supervisor" ? "flex" : "none";
    });

    document.querySelectorAll(".admin-only").forEach(element => {
        element.style.display =
            (currentUser.role === "Admin" || currentUser.role === "Super Admin")
                ? "flex" : "none";
    });

    document.querySelectorAll(".superadmin-only").forEach(element => {
        element.style.display = currentUser.role === "Super Admin" ? "flex" : "none";
    });

    document.querySelectorAll(".quality-only").forEach(element => {
        element.style.display =
            (currentUser.role === "Quality" ||
             currentUser.role === "Admin" ||
             currentUser.role === "Super Admin")
                ? "flex" : "none";
    });

    document.querySelectorAll(".download-access").forEach(element => {
        const canDownload =
            currentUser.role === "Super Admin" ||
            currentUser.role === "Admin" ||
            currentUser.role === "Quality" ||
            currentUser.role === "Supervisor";
        element.style.display = canDownload ? "" : "none";
    });
}

/* =========================================================
   LOGOUT
========================================================= */

function logout() {

    currentUser = null;

    localStorage.removeItem(SESSION_KEY);

    selectedStatuses = {};

    showLogin();

    document.getElementById("loginForm").reset();

    document.getElementById("loginError").textContent = "";

}


/* =========================================================
   DATE FUNCTIONS
========================================================= */

function getToday() {

    const date = new Date();

    const year = date.getFullYear();

    const month = String(
        date.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
        date.getDate()
    ).padStart(2, "0");

    return `${year}-${month}-${day}`;
}


function setDefaultDates() {

    const today = getToday();

    document.getElementById("dashboardDate").value =
        today;

    document.getElementById("reportDate").value =
        today;

    document.getElementById("approvalDate").value =
        today;

    const reportAnchor = document.getElementById("reportAnchorDate");
    if (reportAnchor) reportAnchor.value = today;

    const extraDate = document.getElementById("extraSheetDate");
    if (extraDate) extraDate.value = today;

}


/* =========================================================
   SETUP EVENTS
========================================================= */

function setupEventListeners() {


    /* LOGIN */

    document.getElementById("loginForm")
        .addEventListener("submit", function (event) {

            event.preventDefault();

            const username =
                document.getElementById("username").value;

            const password =
                document.getElementById("password").value;

            const error =
                document.getElementById("loginError");


            if (!username || !password) {

                error.textContent =
                    "Please enter username and password.";

                return;
            }


            const success =
                login(username, password);


            if (success) {

                error.textContent = "";

                showApplication();

            } else {

                error.textContent =
                    "Invalid username or password.";

            }

        });


    /* PASSWORD */

    document.getElementById("togglePassword")
        .addEventListener("click", function () {

            const password =
                document.getElementById("password");

            if (password.type === "password") {

                password.type = "text";

                this.textContent = "Hide";

            } else {

                password.type = "password";

                this.textContent = "Show";

            }

        });


    /* LOGOUT */

    document.getElementById("logoutBtn")
        .addEventListener("click", logout);


    /* NAVIGATION */

    document.querySelectorAll(".nav-btn")
        .forEach(button => {

            button.addEventListener("click", function () {

                const page =
                    this.dataset.page;

                showPage(page);

            });

        });


    /* SAVE PM */

    document.getElementById("savePMBtn")
        .addEventListener("click", savePMReport);


    /* CLEAR PM */

    document.getElementById("clearPMBtn")
        .addEventListener("click", function () {

            selectedStatuses = {};

            renderPMTable();

        });


    /* APPROVAL DATE */

    document.getElementById("approvalDate")
        .addEventListener("change", renderApproval);


    /* APPROVE ALL */

    document.getElementById("approveAllBtn")
        .addEventListener("click", approveAllNoIssue);


    /* FILTER */

    document.getElementById("filterBtn")
        .addEventListener("click", renderRecords);


    document.getElementById("resetFilterBtn")
        .addEventListener("click", function () {

            document.getElementById("filterFrom").value = "";

            document.getElementById("filterTo").value = "";

            document.getElementById("filterStatus").value =
                "all";

            renderRecords();

        });


    /* EXPORT */

    document.getElementById("exportBtn")
        .addEventListener("click", exportExcel);


    /* ADD USER */

    document.getElementById("addUserBtn")
        .addEventListener("click", addUser);


    /* DASHBOARD DATE */

    document.getElementById("dashboardDate")
        .addEventListener("change", updateDashboard);

    const themeSelect = document.getElementById("themeSelect");
    if (themeSelect) {
        themeSelect.addEventListener("change", e => applyTheme(e.target.value));
    }

    const reportType = document.getElementById("reportType");
    const reportAnchorDate = document.getElementById("reportAnchorDate");
    if (reportType) reportType.addEventListener("change", renderReports);
    if (reportAnchorDate) reportAnchorDate.addEventListener("change", renderReports);

    const reportExportBtn = document.getElementById("reportExportBtn");
    if (reportExportBtn) reportExportBtn.addEventListener("click", exportReport);

    const supervisorDownloadApprovalBtn =
        document.getElementById("supervisorDownloadApprovalBtn");
    if (supervisorDownloadApprovalBtn) {
        supervisorDownloadApprovalBtn.addEventListener(
            "click",
            authorizeSupervisorDownload
        );
    }

    const extraSheetBtn = document.getElementById("authorizeExtraSheetBtn");
    if (extraSheetBtn) {
        extraSheetBtn.addEventListener("click", authorizeExtraSheet);
    }

}


/* =========================================================
   SHOW PAGE
========================================================= */

function showPage(pageId) {

    document.querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active-page");

        });


    const page =
        document.getElementById(pageId);

    if (!page) return;

    page.classList.add("active-page");


    document.querySelectorAll(".nav-btn")
        .forEach(button => {

            button.classList.remove("active");

            if (button.dataset.page === pageId) {

                button.classList.add("active");

            }

        });


    const titles = {

        dashboardPage: [
            "Dashboard",
            "Preventive Maintenance Overview"
        ],

        dailyPMPage: [
            "Daily PM",
            "Daily Preventive Maintenance Report"
        ],

        approvalPage: [
            "Approval",
            "Admin Maintenance Approval"
        ],

        recordsPage: [
            "Records",
            "Maintenance History"
        ],

        usersPage: [
            "Users",
            "User Management"
        ]

    };


    if (titles[pageId]) {

        document.getElementById("pageTitle")
            .textContent = titles[pageId][0];

        document.getElementById("pageSubtitle")
            .textContent = titles[pageId][1];

    }


    if (pageId === "dashboardPage") {

        updateDashboard();

    }

    if (pageId === "recordsPage") {

        renderRecords();

    }

    if (pageId === "approvalPage") {

        renderApproval();

    }

    if (pageId === "usersPage") {
        renderUsers();
    }

    if (pageId === "reportsPage") {
        renderReports();
    }

}


/* =========================================================
   RENDER PM TABLE
========================================================= */

function updateSheetCountUI() {
    const el = document.getElementById("sheetCountText");
    if (!el || !currentUser || currentUser.role !== "Supervisor") return;

    const count = getSupervisorSheetCount(getToday(), currentUser.id);
    const allowed = getAllowedSheetCount(getToday(), currentUser.id);
    el.textContent = `Submitted: ${count} / ${allowed}`;
    if (count >= 2 && allowed > 2) {
        el.textContent += " • Extra sheet authorized";
    }
}

function renderPMTable() {

    updateSheetCountUI();

    const tbody =
        document.getElementById("pmTableBody");

    tbody.innerHTML = "";


    const reportDate =
        document.getElementById("reportDate").value ||
        getToday();


    const supervisorRecords = getRecords().filter(
        r => r.date === reportDate &&
             r.supervisorId === currentUser?.id
    );
    const latestBatch = supervisorRecords.reduce(
        (max, r) => Math.max(max, Number(r.batchNo || 1)),
        0
    );
    const records = latestBatch
        ? supervisorRecords.filter(r => Number(r.batchNo || 1) === latestBatch)
        : [];


    PM_TASKS.forEach(task => {

        const existing =
            records.find(
                r => r.taskId === task.id
            );


        if (existing) {

            selectedStatuses[task.id] =
                existing.status;

        }


        const row =
            document.createElement("tr");


        row.innerHTML = `

            <td>${task.id}</td>

            <td>
                <strong>${escapeHtml(task.machine)}</strong>
            </td>

            <td>
                ${escapeHtml(task.component)}
            </td>

            <td>
                ${escapeHtml(task.activity)}
            </td>

            <td>
                ${escapeHtml(task.frequency)}
            </td>

            <td>
                ${escapeHtml(task.responsible)}
            </td>

            <td>

                <div class="status-buttons">

                    <button
                        type="button"
                        class="status-btn no-issue
                        ${selectedStatuses[task.id] === "No Issue" ? "active" : ""}"
                        data-task="${task.id}"
                        data-status="No Issue"
                    >
                        ✓ Normal
                    </button>

                    <button
                        type="button"
                        class="status-btn minor
                        ${selectedStatuses[task.id] === "Minor Issue" ? "active" : ""}"
                        data-task="${task.id}"
                        data-status="Minor Issue"
                    >
                        ! Minor
                    </button>

                    <button
                        type="button"
                        class="status-btn major
                        ${selectedStatuses[task.id] === "Major Issue" ? "active" : ""}"
                        data-task="${task.id}"
                        data-status="Major Issue"
                    >
                        ⚠ Major
                    </button>

                </div>

            </td>

            <td>

                <textarea
                    class="remarks-input"
                    id="remarks-${task.id}"
                    placeholder="Optional for Normal / Required for Minor or Major"
                >${existing ? escapeHtml(existing.remarks || "") : ""}</textarea>

            </td>

        `;


        tbody.appendChild(row);

    });


    document.querySelectorAll(".status-btn")
        .forEach(button => {

            button.addEventListener("click", function () {

                const taskId =
                    Number(this.dataset.task);

                const status =
                    this.dataset.status;

                selectedStatuses[taskId] =
                    status;


                const buttons =
                    document.querySelectorAll(
                        `[data-task="${taskId}"]`
                    );


                buttons.forEach(btn => {

                    btn.classList.remove("active");

                });


                this.classList.add("active");

                const remarks = document.getElementById(`remarks-${taskId}`);
                if (remarks) {
                    const needsRemarks =
                        status === "Minor Issue" ||
                        status === "Major Issue";

                    remarks.required = needsRemarks;
                    remarks.placeholder = needsRemarks
                        ? "Remarks required for Minor / Major Issue"
                        : "Remarks optional for Normal";
                }

            });

        });

}


/* =========================================================
   SAVE PM REPORT
========================================================= */

function savePMReport() {

    if (!currentUser || currentUser.role !== "Supervisor") {
        showToast("Only Supervisor can submit PM reports.", "error");
        return;
    }

    const reportDate = document.getElementById("reportDate").value;
    const today = getToday();

    if (reportDate !== today) {
        showToast("Supervisor can submit only today's report.", "error");
        return;
    }

    const existingRecords = getRecords();
    const currentBatchCount = getSupervisorSheetCount(today, currentUser.id);
    const allowedSheetCount = getAllowedSheetCount(today, currentUser.id);

    if (currentBatchCount >= allowedSheetCount) {
        showToast(
            "Daily sheet limit reached. After 2 sheets, Super Admin must authorize an extra sheet.",
            "error"
        );
        return;
    }

    /* Every PM task is mandatory. No partial submission is allowed. */
    const missing = [];
    PM_TASKS.forEach(task => {
        if (!selectedStatuses[task.id]) missing.push(task.id);
    });

    if (missing.length) {
        showToast(
            `PM report not submitted. ${missing.length} task(s) are still unmarked.`,
            "error"
        );
        return;
    }

    /* Major and Minor issues require remarks. */
    for (const task of PM_TASKS) {
        const status = selectedStatuses[task.id];
        const remarksElement = document.getElementById(`remarks-${task.id}`);
        const remarks = remarksElement ? remarksElement.value.trim() : "";

        if (
            (status === "Minor Issue" || status === "Major Issue") &&
            !remarks
        ) {
            showToast(`Remarks required for Task ${task.id}.`, "error");
            return;
        }
    }

    const batchNo = currentBatchCount + 1;
    const batchId = generateId();

    PM_TASKS.forEach(task => {
        const status = selectedStatuses[task.id];
        const remarksElement = document.getElementById(`remarks-${task.id}`);
        const remarks = remarksElement ? remarksElement.value.trim() : "";

        const existingIndex = existingRecords.findIndex(
            r =>
                r.date === reportDate &&
                r.taskId === task.id &&
                r.supervisorId === currentUser.id &&
                r.batchNo === batchNo
        );

        const record = {
            id: existingIndex >= 0 ? existingRecords[existingIndex].id : generateId(),
            batchId,
            batchNo,
            taskId: task.id,
            date: reportDate,
            machine: task.machine,
            component: task.component,
            activity: task.activity,
            frequency: task.frequency,
            responsible: task.responsible,
            status,
            remarks,
            supervisor: currentUser.name,
            supervisorId: currentUser.id,
            approval: existingIndex >= 0
                ? existingRecords[existingIndex].approval
                : "Pending",
            approvedBy: existingIndex >= 0
                ? existingRecords[existingIndex].approvedBy || ""
                : "",
            approvedAt: existingIndex >= 0
                ? existingRecords[existingIndex].approvedAt || ""
                : "",
            createdAt: existingIndex >= 0
                ? existingRecords[existingIndex].createdAt
                : new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        if (existingIndex >= 0) {
            existingRecords[existingIndex] = record;
        } else {
            existingRecords.push(record);
        }
    });

    const batches = getReportBatches();
    batches.push({
        id: batchId,
        batchNo,
        date: reportDate,
        supervisorId: currentUser.id,
        supervisor: currentUser.name,
        submittedAt: new Date().toISOString(),
        authorizedExtra: false,
        authorizationOnly: false
    });

    saveRecords(existingRecords);
    saveReportBatches(batches);

    selectedStatuses = {};
    showToast(
        `PM Sheet ${batchNo} submitted successfully. All ${PM_TASKS.length} tasks completed.`,
        "success"
    );

    renderPMTable();
    updateDashboard();
    renderRecords();
}

/* =========================================================
   VALIDATION HELPER
========================================================= */

function throwValidationError(message) {

    showToast(
        message,
        "error"
    );

    throw new Error(message);

}


/* =========================================================
   APPROVAL
========================================================= */

function renderApproval() {

    const tbody =
        document.getElementById(
            "approvalTableBody"
        );


    if (!tbody) return;


    tbody.innerHTML = "";


    if (
        !currentUser ||
        (
            currentUser.role !== "Admin" &&
            currentUser.role !== "Super Admin"
        )
    ) {

        return;

    }


    const date =
        document.getElementById("approvalDate").value ||
        getToday();


    const records =
        getRecords().filter(
            r => r.date === date
        );


    if (records.length === 0) {

        tbody.innerHTML = `
            <tr>
                <td colspan="7" class="empty-cell">
                    No maintenance records found.
                </td>
            </tr>
        `;

        return;
    }


    records.forEach(record => {

        const row =
            document.createElement("tr");


        row.innerHTML = `

            <td>${record.date}</td>

            <td>${escapeHtml(record.machine)}</td>

            <td>${escapeHtml(record.activity)}</td>

            <td>
                ${getStatusBadge(record.status)}
            </td>

            <td>
                ${escapeHtml(record.remarks || "-")}
            </td>

            <td>
                ${escapeHtml(record.supervisor)}
            </td>

            <td>

                ${
                    record.approval === "Approved"

                    ? `<span class="approval-status approved">
                        Approved
                       </span>`

                    : record.approval === "Rejected"

                    ? `<span class="approval-status rejected">
                        Rejected
                       </span>`

                    : `
                        <button
                            class="primary-btn"
                            onclick="approveRecord('${record.id}')"
                        >
                            Approve
                        </button>

                        <button
                            class="secondary-btn"
                            onclick="rejectRecord('${record.id}')"
                        >
                            Reject
                        </button>
                    `
                }

            </td>

        `;


        tbody.appendChild(row);

    });

}


/* =========================================================
   APPROVE SINGLE RECORD
========================================================= */

function approveRecord(recordId) {

    if (!isAdmin()) {

        showToast(
            "Only Admin or Super Admin can approve records.",
            "error"
        );

        return;
    }


    const records =
        getRecords();


    const record =
        records.find(
            r => r.id === recordId
        );


    if (!record) return;


    record.approval =
        "Approved";

    record.approvedBy =
        currentUser.name;

    record.approvedAt =
        new Date().toISOString();


    saveRecords(records);

    renderApproval();

    renderRecords();

    updateDashboard();

    showToast(
        "Record approved.",
        "success"
    );

}


/* =========================================================
   REJECT RECORD
========================================================= */

function rejectRecord(recordId) {

    if (!isAdmin()) {

        showToast(
            "Only Admin or Super Admin can reject records.",
            "error"
        );

        return;
    }


    const records =
        getRecords();


    const record =
        records.find(
            r => r.id === recordId
        );


    if (!record) return;


    record.approval =
        "Rejected";

    record.approvedBy =
        currentUser.name;

    record.approvedAt =
        new Date().toISOString();


    saveRecords(records);

    renderApproval();

    renderRecords();

    updateDashboard();

    showToast(
        "Record rejected.",
        "success"
    );

}


/* =========================================================
   APPROVE ALL NO ISSUE
========================================================= */

function approveAllNoIssue() {

    if (!isAdmin()) {

        showToast(
            "Only Admin or Super Admin can approve records.",
            "error"
        );

        return;
    }


    const date =
        document.getElementById("approvalDate").value ||
        getToday();


    const records =
        getRecords();


    let count = 0;


    records.forEach(record => {

        if (
            record.date === date &&
            record.status === "No Issue" &&
            record.approval !== "Approved"
        ) {

            record.approval =
                "Approved";

            record.approvedBy =
                currentUser.name;

            record.approvedAt =
                new Date().toISOString();

            count++;

        }

    });


    saveRecords(records);

    renderApproval();

    renderRecords();

    updateDashboard();


    showToast(
        `${count} No Issue record(s) approved.`,
        "success"
    );

}


/* =========================================================
   RECORDS
========================================================= */

function renderRecords() {

    const tbody =
        document.getElementById(
            "recordsTableBody"
        );


    if (!tbody) return;


    tbody.innerHTML = "";


    let records =
        getRecords();


    const from =
        document.getElementById(
            "filterFrom"
        ).value;


    const to =
        document.getElementById(
            "filterTo"
        ).value;


    const status =
        document.getElementById(
            "filterStatus"
        ).value;


    if (from) {

        records =
            records.filter(
                r => r.date >= from
            );

    }


    if (to) {

        records =
            records.filter(
                r => r.date <= to
            );

    }


    if (status !== "all") {

        records =
            records.filter(
                r => r.status === status
            );

    }


    records.sort(
        (a, b) =>
            new Date(b.date) -
            new Date(a.date)
    );


    if (records.length === 0) {

        tbody.innerHTML = `
            <tr>
                <td colspan="10" class="empty-cell">
                    No records found.
                </td>
            </tr>
        `;

        return;
    }


    records.forEach(record => {

        const row =
            document.createElement("tr");


        row.innerHTML = `

            <td>${record.date}</td>

            <td>${record.taskId}</td>

            <td>
                ${escapeHtml(record.machine)}
            </td>

            <td>
                ${escapeHtml(record.component)}
            </td>

            <td>
                ${escapeHtml(record.activity)}
            </td>

            <td>
                ${escapeHtml(record.frequency)}
            </td>

            <td>
                ${getStatusBadge(record.status)}
            </td>

            <td>
                ${escapeHtml(record.remarks || "-")}
            </td>

            <td>
                ${escapeHtml(record.supervisor)}
            </td>

            <td>
                <span class="
                    approval-status
                    ${
                        record.approval === "Approved"
                            ? "approved"
                            : record.approval === "Rejected"
                            ? "rejected"
                            : "pending"
                    }
                ">
                    ${record.approval}
                </span>
                ${
                    currentUser?.role === "Super Admin"
                        ? `<button class="delete-record" onclick="deleteRecord('${record.id}')">Delete</button>`
                        : ""
                }
            </td>

        `;


        tbody.appendChild(row);

    });

}


/* =========================================================
   DASHBOARD
========================================================= */

function updateDashboard() {

    const date =
        document.getElementById(
            "dashboardDate"
        ).value ||
        getToday();


    const records =
        getRecords().filter(
            r => r.date === date
        );


    const total =
        PM_TASKS.length;


    const noIssue =
        records.filter(
            r => r.status === "No Issue"
        ).length;


    const minor =
        records.filter(
            r => r.status === "Minor Issue"
        ).length;


    const major =
        records.filter(
            r => r.status === "Major Issue"
        ).length;


    const approved =
        records.filter(
            r => r.approval === "Approved"
        ).length;


    const pending =
        records.filter(
            r =>
                r.approval === "Pending" &&
                r.status
        ).length;


    const completed =
        noIssue +
        minor +
        major;


    const notCompleted =
        Math.max(
            0,
            total - completed
        );


    setText(
        "totalTasks",
        total
    );

    setText(
        "noIssueCount",
        noIssue
    );

    setText(
        "minorCount",
        minor
    );

    setText(
        "majorCount",
        major
    );

    setText(
        "pendingCount",
        pending
    );

    setText(
        "approvedCount",
        approved
    );


    setText(
        "summaryNoIssue",
        noIssue
    );

    setText(
        "summaryMinor",
        minor
    );

    setText(
        "summaryMajor",
        major
    );

    setText(
        "summaryPending",
        notCompleted
    );


    setText(
        "summaryNoIssuePercent",
        percentage(noIssue, total)
    );

    setText(
        "summaryMinorPercent",
        percentage(minor, total)
    );

    setText(
        "summaryMajorPercent",
        percentage(major, total)
    );

    setText(
        "summaryPendingPercent",
        percentage(notCompleted, total)
    );

}


/* =========================================================
   USER MANAGEMENT
========================================================= */

function renderExtraSheetSupervisorOptions() {
    const select = document.getElementById("extraSheetSupervisor");
    if (!select) return;
    const supervisors = getUsers().filter(u => u.role === "Supervisor");
    select.innerHTML = supervisors.length
        ? supervisors.map(u =>
            `<option value="${escapeHtml(u.id)}">${escapeHtml(u.name)} (${escapeHtml(u.username)})</option>`
          ).join("")
        : `<option value="">No Supervisor</option>`;
    const date = document.getElementById("extraSheetDate");
    if (date && !date.value) date.value = getToday();
}

function renderUsers() {

    const tbody =
        document.getElementById(
            "usersTableBody"
        );


    if (!tbody) return;


    tbody.innerHTML = "";


    if (
        !currentUser ||
        currentUser.role !== "Super Admin"
    ) {

        return;
    }


    const users =
        getUsers();


    users.forEach(user => {

        const row =
            document.createElement("tr");


        row.innerHTML = `

            <td>
                ${escapeHtml(user.name)}
            </td>

            <td>
                ${escapeHtml(user.username)}
            </td>

            <td>
                ${escapeHtml(user.role)}
            </td>

            <td>

                ${
                    user.id === currentUser.id

                    ? `<span>Current User</span>`

                    : `
                        <button
                            class="delete-user"
                            onclick="deleteUser('${user.id}')"
                        >
                            Delete
                        </button>
                    `
                }

            </td>

        `;


        tbody.appendChild(row);

    });

}


/* =========================================================
   ADD USER
========================================================= */

function addUser() {

    if (
        !currentUser ||
        currentUser.role !== "Super Admin"
    ) {

        showToast(
            "Only Super Admin can add users.",
            "error"
        );

        return;
    }


    const name =
        document.getElementById(
            "newUserName"
        ).value.trim();


    const username =
        document.getElementById(
            "newUsername"
        ).value.trim();


    const password =
        document.getElementById(
            "newPassword"
        ).value;


    const role =
        document.getElementById(
            "newUserRole"
        ).value;


    if (!name ||
        !username ||
        !password) {

        showToast(
            "Please fill all user fields.",
            "error"
        );

        return;
    }


    const users =
        getUsers();


    const duplicate =
        users.some(
            u =>
                u.username.toLowerCase() ===
                username.toLowerCase()
        );


    if (duplicate) {

        showToast(
            "Username already exists.",
            "error"
        );

        return;
    }


    const newUser = {

        id: generateId(),

        name: name,

        username: username,

        password: password,

        role: role

    };


    users.push(newUser);

    saveUsers(users);


    document.getElementById(
        "newUserName"
    ).value = "";


    document.getElementById(
        "newUsername"
    ).value = "";


    document.getElementById(
        "newPassword"
    ).value = "";


    renderUsers();


    showToast(
        "User added successfully.",
        "success"
    );

}


/* =========================================================
   DELETE USER
========================================================= */

function deleteUser(userId) {

    if (
        !currentUser ||
        currentUser.role !== "Super Admin"
    ) {

        showToast(
            "Only Super Admin can delete users.",
            "error"
        );

        return;
    }


    if (
        !confirm(
            "Are you sure you want to delete this user?"
        )
    ) {

        return;
    }


    let users =
        getUsers();


    users =
        users.filter(
            u => u.id !== userId
        );


    saveUsers(users);

    renderUsers();


    showToast(
        "User deleted.",
        "success"
    );

}


/* =========================================================
   EXPORT CSV / EXCEL
========================================================= */

function exportExcel() {

    if (
        !currentUser ||
        (
            currentUser.role !== "Admin" &&
            currentUser.role !== "Super Admin"
        )
    ) {

        showToast(
            "Only Admin and Super Admin can export records.",
            "error"
        );

        return;
    }


    let records =
        getRecords();


    const from =
        document.getElementById(
            "filterFrom"
        ).value;


    const to =
        document.getElementById(
            "filterTo"
        ).value;


    const status =
        document.getElementById(
            "filterStatus"
        ).value;


    if (from) {

        records =
            records.filter(
                r => r.date >= from
            );

    }


    if (to) {

        records =
            records.filter(
                r => r.date <= to
            );

    }


    if (status !== "all") {

        records =
            records.filter(
                r => r.status === status
            );

    }


    const headers = [

        "Date",
        "Task No",
        "Machine",
        "Component",
        "Activity",
        "Frequency",
        "Responsible",
        "Status",
        "Remarks",
        "Supervisor",
        "Approval",
        "Approved By"

    ];


    const rows =
        records.map(r => [

            r.date,

            r.taskId,

            r.machine,

            r.component,

            r.activity,

            r.frequency,

            r.responsible,

            r.status,

            r.remarks,

            r.supervisor,

            r.approval,

            r.approvedBy

        ]);


    const csv = [

        headers,

        ...rows

    ]

        .map(
            row =>
                row.map(
                    value =>
                        `"${String(
                            value ?? ""
                        ).replace(
                            /"/g,
                            '""'
                        )}"`
                ).join(",")
        )

        .join("\n");


    const blob =
        new Blob(
            ["\ufeff" + csv],
            {
                type:
                    "text/csv;charset=utf-8;"
            }
        );


    const url =
        URL.createObjectURL(blob);


    const link =
        document.createElement("a");


    link.href = url;

    link.download =
        `PMMS_Maintenance_Records_${getToday()}.csv`;


    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);


    URL.revokeObjectURL(url);


    showToast(
        "Records exported successfully.",
        "success"
    );

}


/* =========================================================
   SUPER ADMIN RECORD CONTROLS / DOWNLOAD ACCESS
========================================================= */

function deleteRecord(recordId) {
    if (!currentUser || currentUser.role !== "Super Admin") {
        showToast("Only Super Admin can delete PM records.", "error");
        return;
    }

    if (!confirm("Delete this PM record permanently?")) return;

    const records = getRecords().filter(r => r.id !== recordId);
    saveRecords(records);
    renderRecords();
    renderApproval();
    updateDashboard();
    showToast("PM record deleted.", "success");
}

function authorizeSupervisorDownload() {
    if (!currentUser || !["Admin", "Super Admin"].includes(currentUser.role)) {
        showToast("Only Admin or Super Admin can change supervisor download access.", "error");
        return;
    }

    const settings = getSettings();
    settings.supervisorDownloadApproved = !settings.supervisorDownloadApproved;
    saveSettings(settings);
    updateDownloadAccessUI();
    showToast(
        settings.supervisorDownloadApproved
            ? "Supervisor download access approved."
            : "Supervisor download access revoked.",
        "success"
    );
}

function updateDownloadAccessUI() {
    const settings = getSettings();
    const button = document.getElementById("supervisorDownloadApprovalBtn");
    const state = document.getElementById("downloadAccessState");

    if (state) {
        state.textContent = settings.supervisorDownloadApproved
            ? "Approved"
            : "Approval Required";
        state.className = settings.supervisorDownloadApproved
            ? "access-state approved"
            : "access-state pending";
    }

    if (button) {
        button.textContent = settings.supervisorDownloadApproved
            ? "Revoke Supervisor Download"
            : "Approve Supervisor Download";
        button.className = settings.supervisorDownloadApproved
            ? "secondary-btn"
            : "approve-btn";
        button.style.display =
            currentUser && ["Admin", "Super Admin"].includes(currentUser.role)
                ? "inline-flex" : "none";
    }
}

function authorizeExtraSheet() {
    if (!currentUser || currentUser.role !== "Super Admin") {
        showToast("Only Super Admin can authorize an extra Supervisor sheet.", "error");
        return;
    }

    const selectedId =
        document.getElementById("extraSheetSupervisor")?.value || "";
    const supervisor = getUsers().find(
        u => u.role === "Supervisor" && (!selectedId || u.id === selectedId)
    );
    if (!supervisor) {
        showToast("No Supervisor user found.", "error");
        return;
    }

    const date =
        document.getElementById("extraSheetDate")?.value || getToday();
    const batches = getReportBatches();
    const count = getSupervisorSheetCount(date, supervisor.id);

    if (count < 2) {
        showToast("Supervisor has not reached the normal 2-sheet limit yet.", "error");
        return;
    }

    const extraId = "EXTRA-" + date + "-" + Date.now();
    batches.push({
        id: extraId,
        batchNo: count + 1,
        date,
        supervisorId: supervisor.id,
        supervisor: supervisor.name,
        authorizedExtra: true,
        authorizedBy: currentUser.name,
        authorizedAt: new Date().toISOString(),
        authorizationOnly: true
    });
    saveReportBatches(batches);

    /* The authorization-only batch is consumed by the next submit. */
    showToast(`Extra Sheet ${count + 1} authorized for ${supervisor.name}.`, "success");
}

function getAllowedSheetCount(date, supervisorId) {
    const batches = getReportBatches().filter(
        b => b.date === date && b.supervisorId === supervisorId
    );
    const authorizedExtra = batches.filter(b => b.authorizedExtra).length;
    return Math.max(2, 2 + authorizedExtra);
}

/* =========================================================
   REPORT CENTER
========================================================= */

function renderReports() {
    const tbody = document.getElementById("reportsTableBody");
    if (!tbody) return;

    const type = document.getElementById("reportType")?.value || "Daily";
    const anchor = document.getElementById("reportAnchorDate")?.value || getToday();
    const records = filterRecordsByReportType(getRecords(), type, anchor);

    const counts = {
        "No Issue": records.filter(r => r.status === "No Issue").length,
        "Minor Issue": records.filter(r => r.status === "Minor Issue").length,
        "Major Issue": records.filter(r => r.status === "Major Issue").length,
        "Pending": records.filter(r => r.approval === "Pending").length,
        "Approved": records.filter(r => r.approval === "Approved").length
    };

    setText("reportTotal", records.length);
    setText("reportNormal", counts["No Issue"]);
    setText("reportMinor", counts["Minor Issue"]);
    setText("reportMajor", counts["Major Issue"]);
    setText("reportPending", counts.Pending);
    setText("reportApproved", counts.Approved);

    const schedule = getAutomaticReportTypes(anchor);
    const scheduleBox = document.getElementById("automaticScheduleText");
    if (scheduleBox) {
        scheduleBox.textContent =
            `Automatic schedule for ${anchor}: ${schedule.join(" + ")}. ` +
            `Daily is always included; weekly/monthly/yearly are added when their schedule applies.`;
    }

    tbody.innerHTML = "";
    if (!records.length) {
        tbody.innerHTML = `<tr><td colspan="8" class="empty-cell">No records for this report period.</td></tr>`;
        return;
    }

    records.sort((a,b) => new Date(b.date) - new Date(a.date));
    records.forEach(r => {
        const row = document.createElement("tr");
        row.className = "report-row";
        row.innerHTML = `
            <td data-label="Date"><span class="mobile-label">Date</span>${escapeHtml(r.date)}</td>
            <td data-label="Sheet"><span class="mobile-label">Sheet</span>${escapeHtml(r.batchNo || 1)}</td>
            <td data-label="Machine"><span class="mobile-label">Machine</span><strong>${escapeHtml(r.machine)}</strong></td>
            <td data-label="Activity"><span class="mobile-label">Activity</span>${escapeHtml(r.activity)}</td>
            <td data-label="Frequency"><span class="mobile-label">Frequency</span>${escapeHtml(r.frequency)}</td>
            <td data-label="Status"><span class="mobile-label">Status</span>${getStatusBadge(r.status)}</td>
            <td data-label="Approval"><span class="mobile-label">Approval</span>${escapeHtml(r.approval)}</td>
            <td data-label="Supervisor"><span class="mobile-label">Supervisor</span>${escapeHtml(r.supervisor)}</td>
        `;
        tbody.appendChild(row);
    });
}

function exportReport() {
    if (!canDownloadData()) {
        showToast(
            currentUser?.role === "Supervisor"
                ? "Supervisor download access requires Admin/Super Admin approval."
                : "You do not have permission to download reports.",
            "error"
        );
        return;
    }

    const type = document.getElementById("reportType")?.value || "Daily";
    const anchor = document.getElementById("reportAnchorDate")?.value || getToday();
    const records = filterRecordsByReportType(getRecords(), type, anchor);

    const headers = [
        "Report Type","Date","Sheet","Task No","Machine","Component",
        "Activity","Frequency","Responsible","Status","Remarks",
        "Supervisor","Approval","Approved By"
    ];

    const rows = records.map(r => [
        type, r.date, r.batchNo || 1, r.taskId, r.machine, r.component,
        r.activity, r.frequency, r.responsible, r.status, r.remarks,
        r.supervisor, r.approval, r.approvedBy || ""
    ]);

    const csv = [headers, ...rows].map(row =>
        row.map(v => `"${String(v ?? "").replace(/"/g, '""')}"`).join(",")
    ).join("\n");

    const blob = new Blob(["\ufeff" + csv], {type:"text/csv;charset=utf-8;"});
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `PMMS_${type}_Report_${anchor}.csv`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);

    showToast(`${type} report downloaded.`, "success");
}

/* =========================================================
   HELPERS
========================================================= */

function generateId() {

    return (
        "REC-" +
        Date.now() +
        "-" +
        Math.random()
            .toString(36)
            .substring(2, 8)
            .toUpperCase()
    );

}


function isAdmin() {

    return (
        currentUser &&
        (
            currentUser.role === "Admin" ||
            currentUser.role === "Super Admin"
        )
    );

}


function percentage(value, total) {

    if (!total) return "0%";

    return (
        Math.round(
            (value / total) * 100
        ) +
        "%"
    );

}


function setText(id, value) {

    const element =
        document.getElementById(id);

    if (element) {

        element.textContent = value;

    }

}


function getStatusBadge(status) {

    if (status === "No Issue") {

        return `
            <span class="approval-status approved">
                No Issue
            </span>
        `;

    }


    if (status === "Minor Issue") {

        return `
            <span class="approval-status pending">
                Minor Issue
            </span>
        `;

    }


    if (status === "Major Issue") {

        return `
            <span class="approval-status rejected">
                Major Issue
            </span>
        `;

    }


    return `
        <span class="approval-status pending">
            Pending
        </span>
    `;

}


function escapeHtml(value) {

    if (value === null ||
        value === undefined) {

        return "";

    }


    return String(value)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}


function showToast(message, type = "") {

    const toast =
        document.getElementById("toast");


    toast.textContent =
        message;


    toast.className =
        "toast show " +
        type;


    setTimeout(
        () => {

            toast.className =
                "toast";

        },
        3000
    );

}


/* =========================================================
   REPORT DATE CHANGE
========================================================= */

document.addEventListener(
    "change",
    function (event) {

        if (
            event.target &&
            event.target.id === "reportDate"
        ) {

            if (
                currentUser &&
                currentUser.role === "Supervisor"
            ) {

                const today =
                    getToday();


                if (
                    event.target.value !== today
                ) {

                    showToast(
                        "Supervisor can enter only today's PM report.",
                        "error"
                    );

                    event.target.value =
                        today;

                }

            }


            selectedStatuses = {};

            renderPMTable();

        }

    }
);

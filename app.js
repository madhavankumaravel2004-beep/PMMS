/* ============================================================
   PMMS - PREVENTIVE MAINTENANCE MANAGEMENT SYSTEM
   Simple Browser Version
   ============================================================ */


/* ============================================================
   USERS
   ============================================================ */

const DEFAULT_USERS = [

    {
        id: 1,
        name: "Super Admin",
        email: "madhavan.s@koushika.co.in",
        password: "Madhavan@0505",
        role: "superadmin"
    },

    {
        id: 2,
        name: "Admin",
        email: "ashik.p@koushika.co.in",
        password: "Ashik@987",
        role: "admin"
    },
    {
        id: 2,
        name: "Admin",
        email: "admin@company.com",
        password: "Admin@123",
        role: "admin"
     },

    {
        id: 3,
        name: "Supervisor",
        email: "supervisor@company.com",
        password: "123456",
        role: "supervisor"
    }

];


/* ============================================================
   PM TASK MASTER
   ============================================================ */

const PM_TASKS = [

    {
        machine: "Feeding Tray E1 / E2",
        component: "Tray & hopper body",
        task: "Visual check for cracks, dents, foreign material; clear blockages",
        frequency: "Daily"
    },

    {
        machine: "Feeding Tray E1 / E2",
        component: "Fasteners & supports",
        task: "Check tightness of bolts, clamps and support frame",
        frequency: "Weekly"
    },

    {
        machine: "Feeding Tray E1 / E2",
        component: "Body surface",
        task: "Inspect for corrosion / paint damage; clean surface",
        frequency: "Monthly"
    },

    {
        machine: "Feeding Tray E1 / E2",
        component: "Structure",
        task: "Full structural inspection including welds and load-bearing points",
        frequency: "Quarterly"
    },


    {
        machine: "Fumigation Bin 1-4",
        component: "Bin shell & lid",
        task: "Visual check for leaks, dents, pest activity before loading",
        frequency: "Daily"
    },

    {
        machine: "Fumigation Bin 1-4",
        component: "Door seals / gaskets",
        task: "Inspect gas-proof seals, locking mechanism and hinges",
        frequency: "Weekly"
    },

    {
        machine: "Fumigation Bin 1-4",
        component: "Bin interior",
        task: "Clean and dry bin; check for residue and pest activity",
        frequency: "Monthly"
    },

    {
        machine: "Fumigation Bin 1-4",
        component: "Gas-tightness",
        task: "Pressure/leak test of bin and inlet ports",
        frequency: "Quarterly"
    },

    {
        machine: "Fumigation Bin 1-4",
        component: "Bin shell",
        task: "Corrosion check, touch-up coating/repainting as needed",
        frequency: "Annual"
    },


    {
        machine: "Belt Conveyor B1 / B2",
        component: "Belt & tracking",
        task: "Visual check of belt tracking, tears and debris",
        frequency: "Daily"
    },

    {
        machine: "Belt Conveyor B1 / B2",
        component: "Belt tension, rollers",
        task: "Check belt tension, idlers/rollers for wear, clean pulleys",
        frequency: "Weekly"
    },

    {
        machine: "Belt Conveyor B1 / B2",
        component: "Bearings & motor",
        task: "Lubricate bearings, check motor mounting and noise",
        frequency: "Monthly"
    },

    {
        machine: "Belt Conveyor B1 / B2",
        component: "Gearbox & alignment",
        task: "Check gearbox oil level, belt alignment and guard condition",
        frequency: "Quarterly"
    },

    {
        machine: "Belt Conveyor B1 / B2",
        component: "Belt & gearbox",
        task: "Assess belt for replacement; full gearbox oil change",
        frequency: "Annual"
    },


    {
        machine: "Bucket Conveyor E3 / E4",
        component: "General running",
        task: "Visual check, listen for abnormal noise/vibration",
        frequency: "Daily"
    },

    {
        machine: "Bucket Conveyor E3 / E4",
        component: "Buckets & belt",
        task: "Check bucket bolts/cups, belt tension and chain lubrication",
        frequency: "Weekly"
    },

    {
        machine: "Bucket Conveyor E3 / E4",
        component: "Boot & head pulley",
        task: "Inspect boot section for choke, lubricate head/tail bearings",
        frequency: "Monthly"
    },

    {
        machine: "Bucket Conveyor E3 / E4",
        component: "Buckets & alignment",
        task: "Inspect buckets for wear/deformation, check belt alignment",
        frequency: "Quarterly"
    },

    {
        machine: "Bucket Conveyor E3 / E4",
        component: "Gearbox & full unit",
        task: "Gearbox oil change, full elevator inspection & overhaul",
        frequency: "Annual"
    },


    {
        machine: "Aspirator",
        component: "Screens / filters",
        task: "Clean screens and dust collection bags/cyclone",
        frequency: "Daily"
    },

    {
        machine: "Aspirator",
        component: "Fan & drive belt",
        task: "Check fan blades for dust build-up and belt tension",
        frequency: "Weekly"
    },

    {
        machine: "Aspirator",
        component: "Ducting & motor bearing",
        task: "Inspect ducting for leaks/choke, lubricate motor bearings",
        frequency: "Monthly"
    },

    {
        machine: "Aspirator",
        component: "Airflow calibration",
        task: "Verify airflow/suction settings against product profile",
        frequency: "Quarterly"
    },

    {
        machine: "Aspirator",
        component: "Fan & motor",
        task: "Fan balancing check; motor bearing replacement as needed",
        frequency: "Annual"
    },


    {
        machine: "De-stoner",
        component: "Deck / screen",
        task: "Clean deck surface and stone outlet chute",
        frequency: "Daily"
    },

    {
        machine: "De-stoner",
        component: "Drive & eccentric mechanism",
        task: "Check oscillation/eccentric drive and drive belt",
        frequency: "Weekly"
    },

    {
        machine: "De-stoner",
        component: "Bearings & screen mesh",
        task: "Lubricate bearings; inspect screen/mesh condition",
        frequency: "Monthly"
    },

    {
        machine: "De-stoner",
        component: "Deck inclination",
        task: "Calibrate deck inclination/vibration setting; check belt wear",
        frequency: "Quarterly"
    },

    {
        machine: "De-stoner",
        component: "Full unit",
        task: "Full overhaul of drive assembly and deck",
        frequency: "Annual"
    },


    {
        machine: "Holding Storage Bin",
        component: "Bin body",
        task: "Visual check for leaks, moisture ingress and pest activity",
        frequency: "Daily"
    },

    {
        machine: "Holding Storage Bin",
        component: "Discharge gate",
        task: "Check discharge gate/valve operation and level indicator",
        frequency: "Weekly"
    },

    {
        machine: "Holding Storage Bin",
        component: "Bin interior",
        task: "Clean bin interior; check for residue build-up",
        frequency: "Monthly"
    },

    {
        machine: "Holding Storage Bin",
        component: "Structure",
        task: "Structural inspection of bin shell and supports",
        frequency: "Quarterly"
    },


    {
        machine: "Auto Weighing & Packing Machine",
        component: "Weighing hopper / pan",
        task: "Zero-check, clean hopper and weighing pan",
        frequency: "Daily"
    },

    {
        machine: "Auto Weighing & Packing Machine",
        component: "Load cells / pneumatics",
        task: "Check load cell readings, air pressure and pneumatic leaks",
        frequency: "Weekly"
    },

    {
        machine: "Auto Weighing & Packing Machine",
        component: "Calibration",
        task: "Full calibration with certified test weights",
        frequency: "Monthly"
    },

    {
        machine: "Auto Weighing & Packing Machine",
        component: "Seals & electricals",
        task: "Replace worn seals/gaskets; check electrical connections",
        frequency: "Quarterly"
    },

    {
        machine: "Auto Weighing & Packing Machine",
        component: "External calibration",
        task: "Third-party calibration and full servicing",
        frequency: "Annual"
    },


    {
        machine: "Metal Detector (CCP-1)",
        component: "Start-up / challenge test",
        task: "Start-up test cards and challenge test every 2 hours",
        frequency: "Daily"
    },

    {
        machine: "Metal Detector (CCP-1)",
        component: "Reject mechanism",
        task: "Check reject/diverter mechanism and belt condition",
        frequency: "Weekly"
    },

    {
        machine: "Metal Detector (CCP-1)",
        component: "Sensitivity calibration",
        task: "Verify sensitivity settings and product profiles",
        frequency: "Monthly"
    },

    {
        machine: "Metal Detector (CCP-1)",
        component: "Electrical & software",
        task: "Check electrical connections and firmware/settings",
        frequency: "Quarterly"
    },

    {
        machine: "Metal Detector (CCP-1)",
        component: "Vendor calibration",
        task: "External calibration and OEM servicing",
        frequency: "Annual"
    },


    {
        machine: "Stitching Machine (OPRP-1)",
        component: "Needle & thread path",
        task: "Clean needle area, check thread tension and stitch quality",
        frequency: "Daily"
    },

    {
        machine: "Stitching Machine (OPRP-1)",
        component: "Lubrication & needle",
        task: "Lubricate moving parts; inspect/replace worn needles",
        frequency: "Weekly"
    },

    {
        machine: "Stitching Machine (OPRP-1)",
        component: "Timing belt / motor",
        task: "Check timing belt condition and motor drive",
        frequency: "Monthly"
    },

    {
        machine: "Stitching Machine (OPRP-1)",
        component: "Loopers & tension unit",
        task: "Replace worn needles/loopers; full lubrication service",
        frequency: "Quarterly"
    },

    {
        machine: "Stitching Machine (OPRP-1)",
        component: "Motor & gearbox",
        task: "Motor and gearbox overhaul / inspection",
        frequency: "Annual"
    },


    {
        machine: "Finished Goods Storage",
        component: "Storage area",
        task: "Visual pest check; monitor temperature/humidity",
        frequency: "Daily"
    },

    {
        machine: "Finished Goods Storage",
        component: "Pallets & racking",
        task: "Check pallet condition and racking for damage",
        frequency: "Weekly"
    },

    {
        machine: "Finished Goods Storage",
        component: "Pest control",
        task: "Pest control inspection/treatment",
        frequency: "Monthly"
    },

    {
        machine: "Finished Goods Storage",
        component: "Structure",
        task: "Structural inspection of racking, flooring and roof",
        frequency: "Quarterly"
    },


    {
        machine: "Digital Weighing Balance (QC Lab)",
        component: "Pan & zero check",
        task: "Clean weighing pan and zero-check before use",
        frequency: "Daily"
    },

    {
        machine: "Digital Weighing Balance (QC Lab)",
        component: "Calibration check",
        task: "Verify calibration using standard reference weights",
        frequency: "Weekly"
    },

    {
        machine: "Digital Weighing Balance (QC Lab)",
        component: "Log book review",
        task: "Review instrument usage log book",
        frequency: "Monthly"
    },

    {
        machine: "Digital Weighing Balance (QC Lab)",
        component: "External calibration",
        task: "External/NABL calibration certification",
        frequency: "Annual"
    },


    {
        machine: "Digital Moisture Meter (QC Lab)",
        component: "Sample chamber",
        task: "Clean sample chamber and zero-check",
        frequency: "Daily"
    },

    {
        machine: "Digital Moisture Meter (QC Lab)",
        component: "Calibration check",
        task: "Verify reading against known moisture reference",
        frequency: "Weekly"
    },

    {
        machine: "Digital Moisture Meter (QC Lab)",
        component: "Log book review",
        task: "Review calibration/usage log",
        frequency: "Monthly"
    },

    {
        machine: "Digital Moisture Meter (QC Lab)",
        component: "External calibration",
        task: "External calibration certification",
        frequency: "Annual"
    }

];


/* ============================================================
   APPLICATION DATA
   ============================================================ */

let users = JSON.parse(
    localStorage.getItem("pmms_users")
) || DEFAULT_USERS;

let reports = JSON.parse(
    localStorage.getItem("pmms_reports")
) || [];

let currentUser = null;


/* ============================================================
   SAVE DATA
   ============================================================ */

function saveUsers() {

    localStorage.setItem(
        "pmms_users",
        JSON.stringify(users)
    );

}

function saveReports() {

    localStorage.setItem(
        "pmms_reports",
        JSON.stringify(reports)
    );

}


/* ============================================================
   DATE
   ============================================================ */

function today() {

    const d = new Date();

    const month =
        String(d.getMonth() + 1).padStart(2, "0");

    const day =
        String(d.getDate()).padStart(2, "0");

    return `${d.getFullYear()}-${month}-${day}`;

}


/* ============================================================
   LOGIN
   ============================================================ */

function login() {

    const username =
        document.getElementById("loginUser").value.trim();

    const password =
        document.getElementById("loginPassword").value;

    const user = users.find(u =>
        (
            u.email.toLowerCase() === username.toLowerCase()
            ||
            u.name.toLowerCase() === username.toLowerCase()
        )
        &&
        u.password === password
    );

    if (!user) {

        document.getElementById("loginMessage").innerText =
            "Invalid email/username or password.";

        return;
    }

    currentUser = user;

    localStorage.setItem(
        "pmms_current_user",
        JSON.stringify(user)
    );

    openApplication();

}


/* ============================================================
   OPEN APPLICATION
   ============================================================ */

function openApplication() {

    document
        .getElementById("loginPage")
        .classList.add("hidden");

    document
        .getElementById("resetPage")
        .classList.add("hidden");

    document
        .getElementById("appPage")
        .classList.remove("hidden");


    document.getElementById("currentUserName").innerText =
        currentUser.name;

    document.getElementById("currentUserRole").innerText =
        currentUser.role.toUpperCase();


    applyPermissions();

    document.getElementById("reportDate").value = today();

    document.getElementById("dashboardDate").value = today();

    document.getElementById("approvalDate").value = today();

    renderPMTable();

    loadDashboard();

    loadApprovalData();

    loadRecords();

    loadUsers();

}


/* ============================================================
   PERMISSIONS
   ============================================================ */

function applyPermissions() {

    document.querySelectorAll(".admin-only")
        .forEach(el => {

            if (
                currentUser.role === "admin"
                ||
                currentUser.role === "superadmin"
            ) {

                el.classList.remove("hidden");

            } else {

                el.classList.add("hidden");

            }

        });


    document.querySelectorAll(".superadmin-only")
        .forEach(el => {

            if (currentUser.role === "superadmin") {

                el.classList.remove("hidden");

            } else {

                el.classList.add("hidden");

            }

        });

}


/* ============================================================
   LOGOUT
   ============================================================ */

function logout() {

    currentUser = null;

    localStorage.removeItem(
        "pmms_current_user"
    );

    document
        .getElementById("appPage")
        .classList.add("hidden");

    document
        .getElementById("loginPage")
        .classList.remove("hidden");

}


/* ============================================================
   PASSWORD VISIBILITY
   ============================================================ */

function togglePassword(id) {

    const input =
        document.getElementById(id);

    if (input.type === "password") {

        input.type = "text";

    } else {

        input.type = "password";

    }

}


/* ============================================================
   PASSWORD RESET
   ============================================================ */

function showPasswordReset() {

    document
        .getElementById("loginPage")
        .classList.add("hidden");

    document
        .getElementById("resetPage")
        .classList.remove("hidden");

}

function showLogin() {

    document
        .getElementById("resetPage")
        .classList.add("hidden");

    document
        .getElementById("loginPage")
        .classList.remove("hidden");

}

function resetPassword() {

    const email =
        document.getElementById("resetEmail").value.trim();

    const user = users.find(
        u => u.email.toLowerCase() === email.toLowerCase()
    );

    if (!user) {

        document.getElementById("resetMessage").innerText =
            "Email address not found.";

        return;

    }

    document.getElementById("resetMessage").innerText =
        "Reset request recorded. Contact Super Admin to set a new password.";

}


/* ============================================================
   NAVIGATION
   ============================================================ */

function showSection(sectionId, button) {

    document
        .querySelectorAll(".content-section")
        .forEach(section => {

            section.classList.add("hidden");

        });

    document
        .getElementById(sectionId)
        .classList.remove("hidden");


    document
        .querySelectorAll(".nav-btn")
        .forEach(btn => {

            btn.classList.remove("active");

        });

    button.classList.add("active");

}


/* ============================================================
   RENDER DAILY PM TABLE
   ============================================================ */

function renderPMTable() {

    const tbody =
        document.getElementById("pmTableBody");

    tbody.innerHTML = "";


    PM_TASKS.forEach((task, index) => {

        const tr =
            document.createElement("tr");

        tr.innerHTML = `

            <td>${index + 1}</td>

            <td>
                <strong>${task.machine}</strong>
            </td>

            <td>${task.component}</td>

            <td>${task.task}</td>

            <td>
                <span class="status-badge badge-pending">
                    ${task.frequency}
                </span>
            </td>

            <td>

                <div class="status-buttons">

                    <button
                        class="status-btn"
                        id="normal-${index}"
                        onclick="selectStatus(${index}, 'normal')">
                        ✓ No Issue
                    </button>

                    <button
                        class="status-btn"
                        id="minor-${index}"
                        onclick="selectStatus(${index}, 'minor')">
                        ! Minor
                    </button>

                    <button
                        class="status-btn"
                        id="major-${index}"
                        onclick="selectStatus(${index}, 'major')">
                        ⚠ Major
                    </button>

                </div>

            </td>

            <td>

                <input
                    type="text"
                    class="remark-input"
                    id="remark-${index}"
                    placeholder="Remark if issue">

                <div
                    id="hint-${index}"
                    class="remark-hint hidden">
                    Remark is mandatory for an issue.
                </div>

            </td>

        `;

        tbody.appendChild(tr);

    });

}


/* ============================================================
   SELECT STATUS
   ============================================================ */

function selectStatus(index, status) {

    const normal =
        document.getElementById(`normal-${index}`);

    const minor =
        document.getElementById(`minor-${index}`);

    const major =
        document.getElementById(`major-${index}`);

    const remark =
        document.getElementById(`remark-${index}`);

    const hint =
        document.getElementById(`hint-${index}`);


    /* Remove previous selection */

    normal.classList.remove("selected-normal");

    minor.classList.remove("selected-minor");

    major.classList.remove("selected-major");


    /* Add selected style */

    if (status === "normal") {

        normal.classList.add("selected-normal");

        remark.classList.remove("remark-required");

        hint.classList.add("hidden");

        remark.placeholder =
            "Remark not required for No Issue";

    }


    if (status === "minor") {

        minor.classList.add("selected-minor");

        remark.classList.add("remark-required");

        hint.classList.remove("hidden");

        remark.placeholder =
            "Enter Minor Issue remark *";

    }


    if (status === "major") {

        major.classList.add("selected-major");

        remark.classList.add("remark-required");

        hint.classList.remove("hidden");

        remark.placeholder =
            "Enter Major Issue remark *";

    }


    /* Store selection in browser */

    document
        .getElementById(`normal-${index}`)
        .dataset.selected =
        status;

}


/* ============================================================
   GET SELECTED STATUS
   ============================================================ */

function getSelectedStatus(index) {

    const normal =
        document.getElementById(`normal-${index}`);

    return normal.dataset.selected || null;

}


/* ============================================================
   SUBMIT DAILY REPORT
   ============================================================ */

function submitDailyReport() {

    const date =
        document.getElementById("reportDate").value;

    if (!date) {

        alert("Please select report date.");

        return;

    }


    /* Check maximum 2 reports per day */

    const sameDayReports =
        reports.filter(r => r.date === date);


    if (sameDayReports.length >= 2) {

        alert(
            "Maximum 2 daily reports are already submitted for this date."
        );

        return;

    }


    const entries = [];


    /* Validate every task */

    for (
        let i = 0;
        i < PM_TASKS.length;
        i++
    ) {

        const status =
            getSelectedStatus(i);

        const remark =
            document
                .getElementById(`remark-${i}`)
                .value
                .trim();


        if (!status) {

            alert(
                `Please select status for task ${i + 1}.`
            );

            return;

        }


        /* Issue requires remark */

        if (
            (status === "minor" || status === "major")
            &&
            !remark
        ) {

            alert(
                `Remark is mandatory for Task ${i + 1}.`
            );

            document
                .getElementById(`remark-${i}`)
                .focus();

            return;

        }


        entries.push({

            taskIndex: i,

            machine: PM_TASKS[i].machine,

            component: PM_TASKS[i].component,

            task: PM_TASKS[i].task,

            frequency: PM_TASKS[i].frequency,

            status: status,

            remark: remark,

            approval: "pending"

        });

    }


    const report = {

        id:
            Date.now(),

        date:
            date,

        submittedBy:
            currentUser.name,

        submittedEmail:
            currentUser.email,

        submittedAt:
            new Date().toLocaleString(),

        entries:
            entries

    };


    reports.push(report);

    saveReports();


    document
        .getElementById("dailyReportMessage")
        .innerText =
        "✓ Daily report submitted successfully.";


    loadDashboard();

    loadApprovalData();

    loadRecords();

}


/* ============================================================
   APPROVAL DATA
   ============================================================ */

function loadApprovalData() {

    const date =
        document.getElementById("approvalDate").value;

    const tbody =
        document.getElementById("approvalTableBody");

    tbody.innerHTML = "";


    if (
        currentUser &&
        (
            currentUser.role !== "admin"
            &&
            currentUser.role !== "superadmin"
        )
    ) {

        return;

    }


    const dayReports =
        reports.filter(
            report => report.date === date
        );


    if (dayReports.length === 0) {

        document.getElementById("approvalSummary").innerText =
            "No report submitted for this date.";

        return;

    }


    let count = 0;


    dayReports.forEach(report => {

        report.entries.forEach(entry => {

            count++;


            const tr =
                document.createElement("tr");


            let statusClass =
                "badge-normal";

            let statusText =
                "No Issue";


            if (entry.status === "minor") {

                statusClass = "badge-minor";

                statusText = "Minor Issue";

            }


            if (entry.status === "major") {

                statusClass = "badge-major";

                statusText = "Major Issue";

            }


            let approvalHtml = "";


            if (entry.approval === "approved") {

                approvalHtml = `
                    <span class="approval-badge badge-approved">
                        ✓ Approved
                    </span>
                `;

            } else if (entry.approval === "rejected") {

                approvalHtml = `
                    <span class="approval-badge badge-rejected">
                        ✕ Rejected
                    </span>
                `;

            } else {

                approvalHtml = `

                    <button
                        class="approve-btn"
                        onclick="approveEntry(${report.id}, ${entry.taskIndex})">
                        Approve
                    </button>

                    <button
                        class="reject-btn"
                        onclick="rejectEntry(${report.id}, ${entry.taskIndex})">
                        Reject
                    </button>

                `;

            }


            tr.innerHTML = `

                <td>${count}</td>

                <td>${entry.machine}</td>

                <td>${entry.component}</td>

                <td>
                    <span class="status-badge ${statusClass}">
                        ${statusText}
                    </span>
                </td>

                <td>${entry.remark || "-"}</td>

                <td>${report.submittedBy}</td>

                <td>${approvalHtml}</td>

            `;


            tbody.appendChild(tr);

        });

    });


    document.getElementById("approvalSummary").innerText =
        `${dayReports.length} report(s) found for ${date}.`;

}


/* ============================================================
   APPROVE INDIVIDUAL
   ============================================================ */

function approveEntry(reportId, taskIndex) {

    const report =
        reports.find(
            r => r.id === reportId
        );

    if (!report) return;


    const entry =
        report.entries.find(
            e => e.taskIndex === taskIndex
        );

    if (!entry) return;


    entry.approval = "approved";

    entry.approvedBy =
        currentUser.name;

    entry.approvedAt =
        new Date().toLocaleString();


    saveReports();

    loadApprovalData();

    loadDashboard();

    loadRecords();

}


/* ============================================================
   REJECT INDIVIDUAL
   ============================================================ */

function rejectEntry(reportId, taskIndex) {

    const report =
        reports.find(
            r => r.id === reportId
        );

    if (!report) return;


    const entry =
        report.entries.find(
            e => e.taskIndex === taskIndex
        );

    if (!entry) return;


    const reason =
        prompt(
            "Enter rejection reason:"
        );


    if (!reason || !reason.trim()) {

        alert(
            "Rejection reason is required."
        );

        return;

    }


    entry.approval =
        "rejected";

    entry.rejectionReason =
        reason.trim();

    entry.rejectedBy =
        currentUser.name;

    entry.rejectedAt =
        new Date().toLocaleString();


    saveReports();

    loadApprovalData();

    loadDashboard();

    loadRecords();

}


/* ============================================================
   APPROVE ALL NORMAL
   ============================================================ */

function approveAllNormal() {

    const date =
        document.getElementById("approvalDate").value;


    if (!date) {

        alert("Please select a date.");

        return;

    }


    const dayReports =
        reports.filter(
            r => r.date === date
        );


    if (dayReports.length === 0) {

        alert(
            "No reports found for this date."
        );

        return;

    }


    const confirmApprove =
        confirm(
            "Approve all 'No Issue' tasks for this date?"
        );


    if (!confirmApprove) return;


    let approvedCount = 0;


    dayReports.forEach(report => {

        report.entries.forEach(entry => {

            if (
                entry.status === "normal"
                &&
                entry.approval === "pending"
            ) {

                entry.approval =
                    "approved";

                entry.approvedBy =
                    currentUser.name;

                entry.approvedAt =
                    new Date().toLocaleString();

                approvedCount++;

            }

        });

    });


    saveReports();

    loadApprovalData();

    loadDashboard();

    loadRecords();


    alert(
        `${approvedCount} No Issue task(s) approved successfully.`
    );

}


/* ============================================================
   RECORDS
   ============================================================ */

function loadRecords() {

    const date =
        document.getElementById("recordsDate").value;

    const tbody =
        document.getElementById("recordsTableBody");

    tbody.innerHTML = "";


    const filtered =
        reports.filter(
            report =>
                !date ||
                report.date === date
        );


    filtered.forEach(report => {

        report.entries.forEach(entry => {

            let statusClass =
                "badge-normal";

            let statusText =
                "No Issue";


            if (entry.status === "minor") {

                statusClass =
                    "badge-minor";

                statusText =
                    "Minor Issue";

            }


            if (entry.status === "major") {

                statusClass =
                    "badge-major";

                statusText =
                    "Major Issue";

            }


            let approvalClass =
                "badge-pending";

            let approvalText =
                "Pending";


            if (
                entry.approval === "approved"
            ) {

                approvalClass =
                    "badge-approved";

                approvalText =
                    "Approved";

            }


            if (
                entry.approval === "rejected"
            ) {

                approvalClass =
                    "badge-rejected";

                approvalText =
                    "Rejected";

            }


            const tr =
                document.createElement("tr");


            tr.innerHTML = `

                <td>${report.date}</td>

                <td>${entry.machine}</td>

                <td>
                    <span class="status-badge ${statusClass}">
                        ${statusText}
                    </span>
                </td>

                <td>${entry.remark || "-"}</td>

                <td>${report.submittedBy}</td>

                <td>
                    <span class="approval-badge ${approvalClass}">
                        ${approvalText}
                    </span>
                </td>

            `;


            tbody.appendChild(tr);

        });

    });

}


/* ============================================================
   DASHBOARD
   ============================================================ */

function loadDashboard() {

    const date =
        document.getElementById("dashboardDate").value;


    let total = 0;

    let normal = 0;

    let minor = 0;

    let major = 0;

    let pending = 0;

    let approved = 0;


    reports
        .filter(r => r.date === date)
        .forEach(report => {

            report.entries.forEach(entry => {

                total++;


                if (entry.status === "normal")
                    normal++;


                if (entry.status === "minor")
                    minor++;


                if (entry.status === "major")
                    major++;


                if (entry.approval === "pending")
                    pending++;


                if (entry.approval === "approved")
                    approved++;

            });

        });


    document.getElementById("totalTasks").innerText =
        total;

    document.getElementById("normalTasks").innerText =
        normal;

    document.getElementById("minorTasks").innerText =
        minor;

    document.getElementById("majorTasks").innerText =
        major;

    document.getElementById("pendingTasks").innerText =
        pending;

    document.getElementById("approvedTasks").innerText =
        approved;


    if (total === 0) {

        document.getElementById("dashboardSummary").innerText =
            "No report submitted for this date.";

    } else {

        document.getElementById("dashboardSummary").innerText =
            `${total} tasks recorded: ${normal} No Issue, ${minor} Minor Issue, ${major} Major Issue.`;

    }

}


/* ============================================================
   USERS
   ============================================================ */

function addUser() {

    if (
        !currentUser
        ||
        currentUser.role !== "superadmin"
    ) {

        alert(
            "Only Super Admin can add users."
        );

        return;

    }


    const name =
        document.getElementById("newUserName").value.trim();

    const email =
        document.getElementById("newUserEmail").value.trim();

    const password =
        document.getElementById("newUserPassword").value;

    const role =
        document.getElementById("newUserRole").value;


    if (!name || !email || !password) {

        alert(
            "Please complete all user fields."
        );

        return;

    }


    if (
        users.some(
            u =>
                u.email.toLowerCase()
                ===
                email.toLowerCase()
        )
    ) {

        alert(
            "This email already exists."
        );

        return;

    }


    users.push({

        id:
            Date.now(),

        name:
            name,

        email:
            email,

        password:
            password,

        role:
            role

    });


    saveUsers();

    loadUsers();


    document.getElementById("newUserName").value = "";

    document.getElementById("newUserEmail").value = "";

    document.getElementById("newUserPassword").value = "";


    alert(
        "User added successfully."
    );

}


/* ============================================================
   LOAD USERS
   ============================================================ */

function loadUsers() {

    const tbody =
        document.getElementById("usersTableBody");

    if (!tbody) return;


    tbody.innerHTML = "";


    users.forEach(user => {

        const tr =
            document.createElement("tr");


        tr.innerHTML = `

            <td>${user.name}</td>

            <td>${user.email}</td>

            <td>
                <span class="status-badge badge-approved">
                    ${user.role}
                </span>
            </td>

            <td>

                ${
                    currentUser &&
                    currentUser.role === "superadmin"
                    ?
                    `
                    <button
                        class="reject-btn"
                        onclick="deleteUser(${user.id})">
                        Delete
                    </button>
                    `
                    :
                    "-"
                }

            </td>

        `;


        tbody.appendChild(tr);

    });

}


/* ============================================================
   DELETE USER
   ============================================================ */

function deleteUser(id) {

    if (
        !currentUser
        ||
        currentUser.role !== "superadmin"
    ) {

        return;

    }


    const user =
        users.find(
            u => u.id === id
        );


    if (!user) return;


    if (
        user.email ===
        currentUser.email
    ) {

        alert(
            "You cannot delete your own account."
        );

        return;

    }


    if (
        !confirm(
            `Delete user ${user.name}?`
        )
    ) {

        return;

    }


    users =
        users.filter(
            u => u.id !== id
        );


    saveUsers();

    loadUsers();

}


/* ============================================================
   INITIAL STARTUP
   ============================================================ */

window.onload = function () {

    document.getElementById("reportDate").value =
        today();

    document.getElementById("dashboardDate").value =
        today();

    document.getElementById("approvalDate").value =
        today();

    document.getElementById("recordsDate").value =
        today();


    const savedUser =
        localStorage.getItem(
            "pmms_current_user"
        );


    if (savedUser) {

        currentUser =
            JSON.parse(savedUser);

        openApplication();

    }

};

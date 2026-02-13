import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;;

// -----------------------------------------------
//  Create Axios Instance
// -----------------------------------------------
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// -----------------------------------------------
//  Attach Token Automatically
// -----------------------------------------------
axiosInstance.interceptors.request.use(
  (config) => {
    const token =
      sessionStorage.getItem("crm_token") || localStorage.getItem("crm_token");

    if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => Promise.reject(error)
);

// -----------------------------------------------
//  Global Response Error Handling
// -----------------------------------------------
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       console.warn("Session expired. Logging out...");
//       localStorage.clear();
//       sessionStorage.clear();
//     }
//     return Promise.reject(error);
//   }
// );

// -------------------------------------------------------------
// 🚀 EXPORTABLE API WRAPPER
// -------------------------------------------------------------
export const useApi = () => {
  // Subscribe user to push notifications
  const saveUserSubscription = async (subscription) =>
    axiosInstance.post("/subscribe", subscription).then((r) => r.data);
  // ============================================================
  // 🔐 AUTH APIs
  // ============================================================
  const login = async (email, password) => {
    const res = await axiosInstance.post("/login", { email, password });

    const { token, role } = res.data;
    sessionStorage.setItem("crm_token", token);
    sessionStorage.setItem("crm_role", role);

    return res.data;
  };

  const register = async (full_name, email, password, phone) => {
    const res = await axiosInstance.post("/register", {
      full_name,
      email,
      password,
      phone,
    });

    // const { token, role: newRole } = res.data;
    // sessionStorage.setItem("crm_token", token);
    // sessionStorage.setItem("crm_role", newRole);

    return res.data;
  };

  const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
  };

  // ============================================================
  // 🧩 LEAD MANAGEMENT APIs
  // ============================================================

  /** Get all leads (Admin view) */
  const getLeads = async () => axiosInstance.get("/leads").then((r) => r.data);

  /** Get only unassigned leads (Admin only) */
  const getUnassignedLeads = async () =>
    axiosInstance.get("/leads/unassigned").then((r) => r.data);

  /** Create new lead */
  const createLead = async (data) =>
    axiosInstance.post("/leads", data).then((r) => r.data);

  /** Update lead */
  const updateLead = async (leadId, data) =>
    axiosInstance.put(`/leads/${leadId}`, data).then((r) => r.data);

  /** Assign lead to caller */
  const assignLead = async (leadId, callerId) =>
    axiosInstance
      .post("/leads/assign", {
        lead_id: leadId,
        caller_id: callerId,
      })
      .then((r) => r.data);

  /** Delete a single lead */
  const deleteLead = async (leadId) =>
    axiosInstance.delete(`/leads/${leadId}`).then((r) => r.data);

  /** Bulk delete leads */
  const bulkDeleteLeads = async (ids) =>
    axiosInstance.post("/leads/bulk-delete", { ids }).then((r) => r.data);

  /**  NEW → My assigned leads */
  const getMyLeads = async () =>
    axiosInstance.get("/myleads").then((r) => r.data);

  /**  Bulk import CSV/Excel leads */
  const bulkImportLeads = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    return axiosInstance
      .post("/leads/import", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((r) => r.data);
  };

  // ============================================================
  // 📞 CALL LOGGING APIs
  // ============================================================

  /** Record a call */
  const recordCall = async (data) =>
    axiosInstance.post("/calls", data).then((r) => r.data);

  /** Call history per lead */
  const getLeadCallHistory = async (leadId) =>
    axiosInstance.get(`/calls/${leadId}`).then((r) => r.data);

  // ============================================================
  // 📊 ANALYTICS / DASHBOARD APIs
  // ============================================================

  const getDashboardOverview = async () =>
    axiosInstance.get("/analytics/overview").then((r) => r.data);

  const getTeamPerformance = async () =>
    axiosInstance.get("/analytics/team").then((r) => r.data);

  const getCallAnalytics = async () =>
    axiosInstance.get("/analytics/calls").then((r) => r.data);

  /** Today's follow-ups for logged-in user */
  const getTodayFollowups = async () =>
    axiosInstance.get("/analytics/followups/today").then((r) => r.data);

  // ============================================================
  // 👥 CALLER (USER) MANAGEMENT
  // ============================================================

  /** List all callers */
  const getCallers = async () =>
    axiosInstance.get("/callers").then((r) => r.data);

  /**  NEW → Edit caller */
  const updateCaller = async (userId, data) =>
    axiosInstance.put(`/callers/${userId}`, data).then((r) => r.data);

  /**  NEW → Delete caller */
  const deleteCaller = async (userId) =>
    axiosInstance.delete(`/callers/${userId}`).then((r) => r.data);

  // ============================================================
  // 🎓 BATCH MANAGEMENT APIs
  // ============================================================

  /**  NEW → List all batches */
  const getBatches = async () =>
    axiosInstance.get("/batches").then((r) => r.data);

  /**  NEW → Get single batch */
  const getBatch = async (batchId) =>
    axiosInstance.get(`/batch/${batchId}`).then((r) => r.data);

  /**  NEW → Create batch */
  const createBatch = async (data) =>
    axiosInstance.post("/batch/create", data).then((r) => r.data);

  /**  NEW → Update batch */
  const updateBatch = async (batchId, data) =>
    axiosInstance.put(`/batch/${batchId}`, data).then((r) => r.data);

  // ============================================================
  // 📅 LEAD SESSION APIs
  // ============================================================

  // Create auto lead session
  const createLeadSession = async (data) =>
    axiosInstance.post("/createLeadSession", data).then((r) => r.data);

  // Get all sessions for a lead
  const getLeadSessions = async () =>
    axiosInstance.get(`/myLeadSession`).then((r) => r.data);

  // Get ALL lead sessions (Admin)
  const getAllLeadSessions = async () =>
    axiosInstance.get("/leadSessions").then((r) => r.data);

  // Update a lead session
  const updateLeadSession = async (sessionId, data) =>
    axiosInstance.put(`/leadSession/${sessionId}`, data).then((r) => r.data);

  const deleteLeadSession = async (sessionId, sessionType) =>
  axiosInstance
    .delete("/leadSession", {
      data: {
        session_id: sessionId,
        session_type: sessionType,
      },
    })
    .then((r) => r.data);

  // ============================================================
  // 📘 COURSE APIs
  // ============================================================

  // Get all courses
  const getCourses = async () =>
    axiosInstance.get("/courses").then((r) => r.data);

  // Get single course
  const getCourse = async (courseId) =>
    axiosInstance.get(`/courses/${courseId}`).then((r) => r.data);

  // Create course
  const createCourse = async (data) =>
    axiosInstance.post("/course", data).then((r) => r.data);

  // Update course
  const updateCourse = async (courseId, data) =>
    axiosInstance.put(`/course/${courseId}`, data).then((r) => r.data);

  // Delete course
  const deleteCourse = async (courseId) =>
    axiosInstance.delete(`/course/${courseId}`).then((r) => r.data);

  // ============================================================
  // 🎓 CONFIRMED STUDENTS
  // ============================================================

  // Confirm a student → creates student + password + marks lead converted
  const confirmStudent = async (data) =>
    axiosInstance.post("/students/confirm", data).then((r) => r.data);

  const getConfirmStudent = async (data) =>
    axiosInstance.get("/students/confirm", data).then((r) => r.data);

  // ============================================================
  // 💵 STUDENT PAYMENTS
  // ============================================================

  // Add a payment for a student (Admin only)
  const addStudentPayment = async (data) =>
    axiosInstance.post("/payments/add", data).then((r) => r.data);

  // Get payments for a specific student (Admin)
  const getStudentPayments = async () =>
    axiosInstance.get(`/payments`).then((r) => r.data);

  // Get payments for logged-in caller's students
  const getMyStudentPayments = async () =>
    axiosInstance.get("/payments/myStudents").then((r) => r.data);
  
  const getCallReport = async () => axiosInstance.post("/callReport").then((r) => r.data);

  const getLeadActivity = async (lead_id) =>
  axiosInstance.get(`/leads/${lead_id}/activity`).then((r) => r.data);

  const attemptCount = async (data) =>
    axiosInstance.post("/attempt", data).then((r) => r.data);

  const getAttemptCount = async () =>
    axiosInstance.get("/attempts").then((r) => r.data);


  // ===================================================================
  // 📦 FINAL EXPORT — ALL API FUNCTIONS
  // ===================================================================
  return {

    // Push Notifications
    saveUserSubscription,
    // Auth
    login,
    register,
    logout,

    // Leads
    getLeads,
    getUnassignedLeads,
    getMyLeads,
    createLead,
    updateLead,
    assignLead,
    deleteLead,
    bulkDeleteLeads,
    bulkImportLeads,

    // Calls
    recordCall,
    getLeadCallHistory,

    // Analytics
    getDashboardOverview,
    getTeamPerformance,
    getCallAnalytics,
    getTodayFollowups,

    // Callers
    getCallers,
    updateCaller,
    deleteCaller,

    // Batches
    getBatches,
    getBatch,
    createBatch,
    updateBatch,

    // Courses
    getCourses,
    getCourse,
    createCourse,
    updateCourse,
    deleteCourse,

    // Lead Sessions
    createLeadSession,
    getLeadSessions,
    getAllLeadSessions,
    updateLeadSession,
    deleteLeadSession,

    // Confirmed Students
    confirmStudent,
    getConfirmStudent,

    // Student Payments
    addStudentPayment,
    getStudentPayments,
    getMyStudentPayments,

    getCallReport,
    getLeadActivity,
    attemptCount,
    getAttemptCount
  };
};

export default useApi;

const allStages = {
  // related to the mcq test
  enrolmentKeyGenerated: 'Enrolment Key Generated',
  basicDetailsEntered: 'Basic Details Entered',
  completedTest: 'Test completed',
  completedTestWithDetails: 'Completed Test',
  testPassed: 'Test Passed',
  testFailed: 'Test not Cleared',

  // algebra interviews
  pendingAlgebraInterview: 'Algebra Interview Pending',
  pendingAlgebraReInterview: 'Algebra Interview Re-Interview', // algebra re-interview
  forReviewAlgebraInterviewDone: 'Algebra Interview For Review',
  algebraInterviewFail: 'Algebra Interview not Cleared',
  algebraInterviewWaitlisted: 'Algebra Interview Waitlisted',

  // english interviews
  pendingEnglishInterview: 'English Interview Pending',
  forReviewEnglishInterview: 'English Interview For Review',
  englishInterviewFail: 'English Interview not Cleared',
  englishInterviewWaitlisted: 'English Interview Waitlisted',

  // culture fit interviews
  pendingCultureFitInterview: 'Culture Fit Interview Pending',
  forReviewCultureFitInterviewDone: 'Culture Fit Interview Review',
  cultureFitInterviewWaitlisted: 'Culture Fit Interview Waitlisted',
  pendingCultureFitReinterview: 'Pending Culture Fit Re-Interview',
  cultureFitInterviewFail: 'Culture Interview not Cleared',

  // parent conversations
  pendingParentConversation: 'Pending Parent Conversations',
  parentConversationFail: 'Parent Conversation Fail',

  // travel planning
  pendingTravelPlanning: 'Pending Travel Plans',
  finalisedTravelPlans: 'Selected & Joining Awaited',

  // probation etc. once when the student has joined navgurukul
  probation: 'Probation',
  deferredJoining: 'Deferred Joining',
  finallyJoined: 'Joined',
  droppedOut: 'Dropped Out',
  sentBackAfterProbation: 'Probation Not Cleared',

  // is not reachable
  becameDisIntersested: 'Became Disinterested',
  disqualifiedUnreachable: 'Can`t reach Student',
  notReachable: 'Number Unreachable',

  // diversity based decision
  disqualifiedAfterDiversityFilter: 'Diversity Not Cleared',
  diversityBasedDecisionPending: 'Decision Pending based on Diversity',

  // random stages for internal use
  possibleDuplicate: 'Duplicate',
  needAction: 'Need Action',
  demo: 'Not Clear???',
  caughtCheating: 'Caught Cheating',
  tuitionGroup: 'Tution Group',

  requestCallback: 'Requested Callback',
  pendingCallbackForQuery: 'Pending Callback',
  forReviewCallbackQueryResolved: 'For Review CallbackQuery Resolved',
  queryResolvedAfterCallback: 'Query Resolved After CallBack',
};

const feedbackableStages = [
  'pendingCultureFitInterview',
  'pendingAlgebraInterview',
  'pendingAlgebraReInterview',
  'parentConversation',
  'pendingEnglishInterview',
  'requestCallback',
  'becameDisIntersested',
  'disqualifiedUnreachable',
  'pendingTravelPlanning',
  'pendingParentConversation',
  'tuitionGroup',
  'deferredJoining',
  'notReachable'
];

const permissions = {
  updateStage: ['s', 'saakshi19', 'gnaneshwari19', 'pralhad18', 'a'],
};

module.exports = {
  allStages: allStages,
  studentStages: Object.keys(allStages),
  feedbackableStages: feedbackableStages,
  permissions: permissions,
  feedbackableStagesWithTitles: feedbackableStages.map((x) => ({ x: allStages[x] })),
  status: {
    pass: 'Passed', failed: 'Failed', pending: 'Pending', forReview: 'For Review', done: 'Done',
  },
  caste: { obc: 1, scSt: 2, general: 3, others: 4, },
  religon: { hindu: 1, islam: 2, sikh: 3, jain: 4, christian: 5, others: 6, },
  qualification: { lessThan10th: 1, class10th: 2, class12th: 3, graduate: 4, },
  currentStatus: { nothing: 1, job: 2, study: 3, other: 4, },
};

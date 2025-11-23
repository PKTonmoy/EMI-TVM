# Smart EMI & TVM Calculator - UX Flow Diagram

This document maps out the complete user experience flow, including navigation paths, user journeys, and interaction patterns.

---

## Overall App Navigation Structure

```mermaid
graph TD
    Start([App Launch]) --> Home[Home: EMI Calculator]
    
    Home --> Breakdown[View Breakdown]
    Home --> SaveCalc[Save Calculation]
    Home --> TVMHub[TVM Hub]
    Home --> Formulas[Formula Guide]
    Home --> Concepts[Concepts]
    
    Breakdown --> PDFExport[Download PDF]
    Breakdown --> BackHome[Back to Calculator]
    
    TVMHub --> PVCalc[PV Calculator]
    TVMHub --> FVCalc[FV Calculator]
    TVMHub --> AnnuityPV[Annuity PV]
    TVMHub --> AnnuityFV[Annuity FV]
    TVMHub --> Perpetuity[Perpetuity]
    TVMHub --> NPV[NPV Calculator]
    TVMHub --> IRR[IRR Calculator]
    
    PVCalc --> SaveTVM[Save TVM Calc]
    FVCalc --> SaveTVM
    
    Formulas --> SearchFormula[Search Formulas]
    Formulas --> FormulaDetail[Formula Detail]
    
    Concepts --> ConceptDetail[Concept Page]
    ConceptDetail --> NextConcept[Next Concept]
    
    Home --> MyCalcs[My Calculations]
    MyCalcs --> ViewSaved[View Saved Calc]
    MyCalcs --> DeleteCalc[Delete Calc]
    
    Home --> Settings[Settings]
    Settings --> ThemeToggle[Theme Switch]
    Settings --> Currency[Currency Settings]
    
    Home --> Admin[Admin Panel]
    Admin --> ContentMgmt[Content Management]
    Admin --> FormulaMgmt[Formula Management]
    Admin --> UserMgmt[User Management]
    
    style Home fill:#2B7FF6,stroke:#1E3A8A,stroke-width:3px,color:#fff
    style TVMHub fill:#4A9FFF,stroke:#2B7FF6,stroke-width:2px,color:#fff
    style Breakdown fill:#26E5D8,stroke:#1EA59D,stroke-width:2px,color:#000
```

---

## User Journey 1: First-Time EMI Calculation

```mermaid
journey
    title First-Time User Calculating EMI
    section Discovery
      User opens app: 5: User
      Sees splash/intro: 4: User
      Lands on EMI Calculator: 5: User
    section Input
      Reads "Your EMI is" placeholder: 3: User
      Adjusts Loan Amount slider: 5: User
      EMI updates instantly: 5: User, System
      Adjusts Interest Rate: 5: User
      Adjusts Loan Tenure: 5: User
    section Understanding
      Sees Principal vs Interest breakdown: 4: User
      Clicks "View Full Breakdown": 5: User
      Views amortization table: 5: User, System
      Sees ring chart: 5: User
    section Action
      Clicks "Download PDF": 5: User
      Shares or saves locally: 4: User
      Returns to calculator: 5: User
      Clicks "Apply Now": 3: User
```

---

## User Journey 2: Exploring TVM Calculators

```mermaid
journey
    title User Exploring Time Value of Money Tools
    section Navigation
      User on Home page: 5: User
      Taps TVM menu item: 5: User
      Sees TVM Calculator Hub: 5: User
    section Selection
      Browses calculator cards: 4: User
      Reads descriptions: 4: User
      Selects "Present Value": 5: User
    section Calculation
      Enters Future Value: 5: User
      Adjusts rate slider: 5: User
      Adjusts periods slider: 5: User
      Taps "Calculate PV": 5: User
      Sees result instantly: 5: User, System
    section Learning
      Reads explanation card: 5: User
      Clicks "View Detailed Breakdown": 5: User
      Understands concept: 5: User
      Saves calculation: 4: User
    section Exploration
      Returns to TVM Hub: 5: User
      Tries Future Value calculator: 5: User
      Compares results: 5: User
```

---

## User Journey 3: Learning Financial Concepts

```mermaid
journey
    title User Learning Financial Concepts
    section Entry
      User taps "Concepts" menu: 5: User
      Sees concept list: 4: User
      Selects "Time Value of Money": 5: User
    section Engagement
      Reads introduction: 4: User
      Views illustration: 5: User
      Tries interactive example: 5: User, System
      Clicks "Show Calculation": 5: User
      Understands concept: 5: User
    section Progression
      Scrolls to visual comparison: 5: User
      Sees inflation impact chart: 5: User
      Clicks "Next: Compounding": 5: User
      Continues learning journey: 5: User
```

---

## Detailed Flow: EMI Calculation Process

```mermaid
flowchart TD
    Start([User Lands on Home]) --> ViewDefault[View Default EMI Display]
    ViewDefault --> AdjustInputs{User Adjusts Inputs?}
    
    AdjustInputs -->|Yes| SliderChange[Slider Value Changes]
    SliderChange --> Debounce[Debounce 300ms]
    Debounce --> CallWASM[Call WASM Calculate Function]
    CallWASM --> UpdateResult[Update EMI Display]
    UpdateResult --> UpdateChart[Redraw Ring Chart]
    UpdateChart --> UpdateBreakdown[Update Principal/Interest]
    UpdateBreakdown --> AdjustInputs
    
    AdjustInputs -->|No| UserAction{User Action?}
    
    UserAction -->|View Breakdown| Navigate[Navigate to Breakdown Page]
    Navigate --> LoadAmortization[Generate Amortization Schedule]
    LoadAmortization --> DisplayTable[Display Table]
    DisplayTable --> DisplayTimeline[Display Timeline Chart]
    
    UserAction -->|Apply Now| ExternalLink[Redirect to Lender Site]
    
    UserAction -->|Save Calculation| CheckAuth{User Logged In?}
    CheckAuth -->|No| ShowLogin[Show Login Modal]
    ShowLogin --> Login[User Logs In]
    Login --> SaveToDB[Save to Database]
    CheckAuth -->|Yes| SaveToDB
    SaveToDB --> ShowConfirmation[Show Success Message]
    
    UserAction -->|Download PDF| GeneratePDF[Call PDF Generation]
    GeneratePDF --> CreatePDF[Create PDF with Table]
    CreatePDF --> DownloadFile[Trigger Download]
    
    style CallWASM fill:#2B7FF6,stroke:#1E3A8A,stroke-width:2px,color:#fff
    style UpdateResult fill:#26E5D8,stroke:#1EA59D,stroke-width:2px
    style SaveToDB fill:#10B981,stroke:#059669,stroke-width:2px,color:#fff
```

---

## Detailed Flow: TVM Calculator Process

```mermaid
flowchart TD
    Start([User on TVM Hub]) --> SelectCalc[Select Calculator Type]
    
    SelectCalc --> LoadCalcPage[Load Calculator Page]
    LoadCalcPage --> ShowFormula[Display Formula]
    ShowFormula --> ShowInputs[Show Input Fields]
    
    ShowInputs --> UserInput{User Enters Values}
    
    UserInput --> Validate{Valid Input?}
    Validate -->|No| ShowError[Show Validation Error]
    ShowError --> UserInput
    
    Validate -->|Yes| Calculate[Call WASM TVM Function]
    Calculate --> ProcessResult[Process Result]
    ProcessResult --> DisplayResult[Display Calculated Value]
    DisplayResult --> ShowExplanation[Show Explanation Card]
    ShowExplanation --> ShowCalculation[Show Step-by-Step]
    
    ShowCalculation --> UserAction{User Action?}
    
    UserAction -->|Adjust Inputs| UserInput
    
    UserAction -->|Save| CheckAuth{Logged In?}
    CheckAuth -->|No| Login[Show Login]
    Login --> SaveCalc[Save to Database]
    CheckAuth -->|Yes| SaveCalc
    SaveCalc --> Confirmation[Show Confirmation]
    
    UserAction -->|View Breakdown| ExpandDetail[Expand Detailed View]
    ExpandDetail --> ShowChart[Show Visual Chart]
    ShowChart --> ShowTable[Show Value Table]
    
    UserAction -->|Back to Hub| ReturnHub[Return to TVM Hub]
    
    style Calculate fill:#2B7FF6,stroke:#1E3A8A,stroke-width:2px,color:#fff
    style DisplayResult fill:#26E5D8,stroke:#1EA59D,stroke-width:2px
```

---

## Detailed Flow: Authentication & User Management

```mermaid
flowchart TD
    Start([User Tries Protected Action]) --> CheckSession{Session Valid?}
    
    CheckSession -->|Yes| AllowAction[Proceed with Action]
    
    CheckSession -->|No| ShowModal[Show Login Modal]
    ShowModal --> UserChoice{User Choice}
    
    UserChoice -->|Login| LoginForm[Display Login Form]
    LoginForm --> EnterCreds[Enter Email & Password]
    EnterCreds --> SubmitLogin[Submit Login]
    SubmitLogin --> ValidateCreds{Valid Credentials?}
    
    ValidateCreds -->|No| ShowLoginError[Show Error Message]
    ShowLoginError --> LoginForm
    
    ValidateCreds -->|Yes| CreateSession[Create Session]
    CreateSession --> GenerateJWT[Generate JWT Token]
    GenerateJWT --> StoreToken[Store in LocalStorage]
    StoreToken --> AllowAction
    
    UserChoice -->|Register| RegForm[Display Registration Form]
    RegForm --> EnterDetails[Enter Name, Email, Password]
    EnterDetails --> ValidateReg{Valid Input?}
    
    ValidateReg -->|No| ShowRegError[Show Validation Error]
    ShowRegError --> RegForm
    
    ValidateReg -->|Yes| CreateUser[Create User Account]
    CreateUser --> HashPassword[Hash Password]
    HashPassword --> SaveUser[Save to Database]
    SaveUser --> AutoLogin[Auto Login User]
    AutoLogin --> CreateSession
    
    UserChoice -->|Cancel| CloseModal[Close Modal]
    CloseModal --> ReturnToPage[Return to Current Page]
    
    style CreateSession fill:#10B981,stroke:#059669,stroke-width:2px,color:#fff
    style GenerateJWT fill:#2B7FF6,stroke:#1E3A8A,stroke-width:2px,color:#fff
```

---

## Detailed Flow: Admin Content Management

```mermaid
flowchart TD
    Start([Admin Logs In]) --> VerifyAdmin{Is Admin User?}
    
    VerifyAdmin -->|No| AccessDenied[Show Access Denied]
    AccessDenied --> Redirect[Redirect to Home]
    
    VerifyAdmin -->|Yes| LoadAdmin[Load Admin Panel]
    LoadAdmin --> ShowSections[Show Management Sections]
    
    ShowSections --> AdminChoice{Admin Selects}
    
    AdminChoice -->|Content Management| LoadContent[Fetch Current Content]
    LoadContent --> DisplayFields[Display Editable Fields]
    DisplayFields --> EditContent[Admin Edits Text]
    EditContent --> SaveContent[Click Save Changes]
    SaveContent --> ValidateContent{Valid Content?}
    
    ValidateContent -->|No| ShowContentError[Show Error]
    ShowContentError --> EditContent
    
    ValidateContent -->|Yes| UpdateDB[Update Database]
    UpdateDB --> ClearCache[Clear Content Cache]
    ClearCache --> ShowSuccess[Show Success Message]
    ShowSuccess --> ReloadPreview[Reload Preview]
    
    AdminChoice -->|Formula Management| LoadFormulas[Fetch Formulas]
    LoadFormulas --> DisplayFormulas[Display Formula List]
    DisplayFormulas --> FormulaAction{Admin Action}
    
    FormulaAction -->|Add New| ShowFormulaForm[Show Add Form]
    ShowFormulaForm --> EnterFormula[Enter Formula Details]
    EnterFormula --> SaveFormula[Save Formula]
    SaveFormula --> UpdateDB
    
    FormulaAction -->|Edit Existing| LoadFormulaEdit[Load Formula Editor]
    LoadFormulaEdit --> ModifyFormula[Modify Details]
    ModifyFormula --> SaveFormula
    
    FormulaAction -->|Delete| ConfirmDelete{Confirm Delete?}
    ConfirmDelete -->|Yes| DeleteFormula[Delete from DB]
    DeleteFormula --> ShowSuccess
    ConfirmDelete -->|No| DisplayFormulas
    
    AdminChoice -->|User Management| LoadUsers[Fetch User List]
    LoadUsers --> DisplayUsers[Display Users Table]
    DisplayUsers --> UserAction{Admin Action}
    
    UserAction -->|View Details| ShowUserDetail[Show User Details]
    UserAction -->|Edit Role| UpdateRole[Update User Role]
    UpdateRole --> UpdateDB
    UserAction -->|Deactivate| DeactivateUser[Deactivate Account]
    DeactivateUser --> UpdateDB
    
    style UpdateDB fill:#2B7FF6,stroke:#1E3A8A,stroke-width:2px,color:#fff
    style ShowSuccess fill:#10B981,stroke:#059669,stroke-width:2px,color:#fff
```

---

## Detailed Flow: PDF Export Process

```mermaid
flowchart TD
    Start([User Clicks Download PDF]) --> CheckCalc{Calculation Exists?}
    
    CheckCalc -->|No| ShowError[Show Error: Calculate First]
    ShowError --> Return[Return to Page]
    
    CheckCalc -->|Yes| ShowLoading[Show Loading Spinner]
    ShowLoading --> GetCalcData[Retrieve Calculation Data]
    GetCalcData --> GenerateSchedule[Generate Amortization Schedule]
    GenerateSchedule --> InitPDF[Initialize jsPDF Instance]
    
    InitPDF --> AddHeader[Add PDF Header]
    AddHeader --> AddLogo[Add Logo/Branding]
    AddLogo --> AddSummary[Add Calculation Summary]
    AddSummary --> AddChart{Include Chart?}
    
    AddChart -->|Yes| GenerateChartSVG[Generate Ring Chart SVG]
    GenerateChartSVG --> ConvertToImage[Convert to Image]
    ConvertToImage --> EmbedChart[Embed in PDF]
    EmbedChart --> AddTable[Add Amortization Table]
    
    AddChart -->|No| AddTable
    
    AddTable --> FormatTable[Format with AutoTable]
    FormatTable --> AddFooter[Add Footer & Disclaimer]
    AddFooter --> CompilePDF[Compile PDF Document]
    
    CompilePDF --> SaveOption{Authenticated User?}
    
    SaveOption -->|Yes| UploadToServer[Upload to Server]
    UploadToServer --> SaveRecord[Save Export Record in DB]
    SaveRecord --> GetURL[Get Download URL]
    GetURL --> TriggerDownload[Trigger Browser Download]
    
    SaveOption -->|No| TriggerDownload
    
    TriggerDownload --> HideLoading[Hide Loading Spinner]
    HideLoading --> ShowSuccess[Show Success Message]
    ShowSuccess --> End([PDF Downloaded])
    
    style InitPDF fill:#2B7FF6,stroke:#1E3A8A,stroke-width:2px,color:#fff
    style TriggerDownload fill:#10B981,stroke:#059669,stroke-width:2px,color:#fff
```

---

## Interaction Patterns

### Pattern 1: Real-Time Calculation

```
User Action          System Response          Timing
───────────────────────────────────────────────────────
Drag slider       →  Update value display     0ms
                  →  Debounce starts          0ms
                     (Wait 300ms)
                  →  Call WASM calculator     300ms
                  →  Receive result           302ms
                  →  Animate number change    302-502ms
                  →  Redraw chart             302-1102ms
                  →  Update breakdown text    302ms
```

### Pattern 2: Navigation Flow

```
User Interaction        State Change           UI Update
───────────────────────────────────────────────────────────
Tap menu item        →  Set active route    →  Highlight menu
                     →  Fetch page data     →  Show loading
                     →  Update content      →  Fade in page
                     →  Scroll to top       →  Smooth scroll
```

### Pattern 3: Form Validation

```
User Input            Validation              Feedback
───────────────────────────────────────────────────────
Enter text         →  Check on blur        →  Show inline error
                   →  Real-time check      →  Update error message
Fix error          →  Revalidate           →  Remove error
                   →  Enable submit        →  Highlight button
```

### Pattern 4: Data Persistence

```
User Action           Backend Process         User Feedback
────────────────────────────────────────────────────────────
Click "Save"       →  Validate session     →  Show loading
                   →  Prepare payload      →  Disable button
                   →  POST to API          →  Loading spinner
                   →  Receive response     →  Hide loading
                   →  Update local state   →  Show success toast
                   →  Update UI            →  Enable button
```

---

## State Management Flow

### Global State (Zustand)

```mermaid
stateDiagram-v2
    [*] --> AppInitialized
    AppInitialized --> ThemeState
    AppInitialized --> AuthState
    AppInitialized --> SettingsState
    
    ThemeState --> LightMode
    ThemeState --> DarkMode
    LightMode --> DarkMode: Toggle
    DarkMode --> LightMode: Toggle
    
    AuthState --> Unauthenticated
    AuthState --> Authenticated
    Unauthenticated --> Authenticated: Login Success
    Authenticated --> Unauthenticated: Logout
    
    SettingsState --> CurrencySettings
    SettingsState --> LanguageSettings
    SettingsState --> NotificationSettings
```

### Local Component State

```mermaid
stateDiagram-v2
    [*] --> Idle
    Idle --> InputChange: User adjusts slider
    InputChange --> Debouncing
    Debouncing --> Calculating: Debounce complete
    Calculating --> Displaying: Calculation success
    Calculating --> Error: Calculation failure
    Displaying --> Idle
    Error --> Idle: User dismisses error
    
    Idle --> Saving: User clicks save
    Saving --> SaveSuccess: API success
    Saving --> SaveError: API failure
    SaveSuccess --> Idle
    SaveError --> Idle
```

---

## Error Handling Flows

### Flow 1: Calculation Error

```mermaid
flowchart TD
    Start([User Inputs Data]) --> Validate{Input Valid?}
    
    Validate -->|No| ShowInlineError[Show Inline Validation]
    ShowInlineError --> DisableCalc[Disable Calculate Button]
    DisableCalc --> WaitCorrection[Wait for Correction]
    WaitCorrection --> Validate
    
    Validate -->|Yes| CallWASM[Call WASM Function]
    CallWASM --> WASMSuccess{Success?}
    
    WASMSuccess -->|No| LogError[Log Error to Console]
    LogError --> ShowErrorToast[Show Error Toast]
    ShowErrorToast --> FallbackJS[Try JavaScript Fallback]
    FallbackJS --> FallbackSuccess{Success?}
    
    FallbackSuccess -->|Yes| DisplayResult[Display Result]
    FallbackSuccess -->|No| ShowCriticalError[Show Critical Error]
    ShowCriticalError --> ContactSupport[Offer Contact Support]
    
    WASMSuccess -->|Yes| DisplayResult
    
    style ShowErrorToast fill:#EF4444,stroke:#DC2626,stroke-width:2px,color:#fff
    style DisplayResult fill:#10B981,stroke:#059669,stroke-width:2px,color:#fff
```

### Flow 2: API Error

```mermaid
flowchart TD
    Start([API Request]) --> SendRequest[Send HTTP Request]
    SendRequest --> WaitResponse[Wait for Response]
    WaitResponse --> CheckStatus{Status Code?}
    
    CheckStatus -->|200-299| Success[Parse Response]
    Success --> UpdateUI[Update UI with Data]
    
    CheckStatus -->|400| BadRequest[Show Input Error]
    BadRequest --> HighlightFields[Highlight Invalid Fields]
    
    CheckStatus -->|401| Unauthorized[Session Expired]
    Unauthorized --> ClearSession[Clear Local Session]
    ClearSession --> ShowLogin[Show Login Modal]
    
    CheckStatus -->|403| Forbidden[Show Permission Error]
    Forbidden --> RedirectHome[Redirect to Home]
    
    CheckStatus -->|404| NotFound[Show Not Found Error]
    
    CheckStatus -->|500| ServerError[Show Server Error]
    ServerError --> RetryOption[Offer Retry]
    RetryOption --> RetryAction{User Retries?}
    RetryAction -->|Yes| SendRequest
    RetryAction -->|No| LogError[Log Error]
    
    CheckStatus -->|Network Error| NetworkError[Show Network Error]
    NetworkError --> CheckConnection[Check Connection]
    CheckConnection --> RetryOption
    
    style Success fill:#10B981,stroke:#059669,stroke-width:2px,color:#fff
    style ServerError fill:#EF4444,stroke:#DC2626,stroke-width:2px,color:#fff
```

---

## Loading & Performance Optimization

### Progressive Loading Strategy

```
Page Load Sequence:
──────────────────────────────────────────────────────
0ms     → Load HTML skeleton
50ms    → Load critical CSS
100ms   → Initialize theme
150ms   → Render header & navigation
200ms   → Load WASM module (async)
250ms   → Render main content
300ms   → Load Web Fonts (swap)
350ms   → Initialize charts
400ms   → Load non-critical assets
500ms   → Page fully interactive
```

### Code Splitting Strategy

```
Bundle Distribution:
──────────────────────────────────────────────────────
main.js (40KB)      → Core app + EMI calculator
tvm.js (25KB)       → TVM calculators (lazy load)
charts.js (30KB)    → Chart components (lazy load)
admin.js (20KB)     → Admin panel (lazy load)
vendor.js (80KB)    → React + dependencies
wasm.wasm (15KB)    → C/C++ calculations
```

---

## Offline Support Flow

```mermaid
flowchart TD
    Start([User Opens App]) --> CheckOnline{Online?}
    
    CheckOnline -->|Yes| LoadFresh[Load Fresh Data]
    LoadFresh --> UpdateCache[Update Service Worker Cache]
    UpdateCache --> RenderApp[Render App]
    
    CheckOnline -->|No| LoadCache[Load from Cache]
    LoadCache --> ShowOfflineBanner[Show Offline Banner]
    ShowOfflineBanner --> RenderApp
    
    RenderApp --> UserCalculates[User Calculates EMI]
    UserCalculates --> LocalCalc[Calculate Locally with WASM]
    LocalCalc --> Display[Display Result]
    
    Display --> UserSaves[User Tries to Save]
    UserSaves --> CheckOnline2{Online?}
    
    CheckOnline2 -->|Yes| SaveToServer[Save to Server]
    SaveToServer --> Confirmation[Show Confirmation]
    
    CheckOnline2 -->|No| QueueAction[Queue Action]
    QueueAction --> SaveLocal[Save to IndexedDB]
    SaveLocal --> ShowQueued[Show "Will Sync Later"]
    
    ShowQueued --> WaitOnline[Wait for Connection]
    WaitOnline --> BackOnline{Back Online?}
    
    BackOnline -->|Yes| SyncQueued[Sync Queued Actions]
    SyncQueued --> SaveToServer
    
    style LocalCalc fill:#2B7FF6,stroke:#1E3A8A,stroke-width:2px,color:#fff
    style ShowOfflineBanner fill:#F59E0B,stroke:#D97706,stroke-width:2px
```

---

## Accessibility Navigation Flow

### Keyboard Navigation

```
Tab Order:
────────────────────────────────────────────
1. Theme Toggle (Header)
2. Navigation Menu
3. Loan Amount Slider
4. Loan Amount Input (alternative)
5. Interest Rate Slider
6. Interest Rate Input (alternative)
7. Loan Tenure Slider
8. Loan Tenure Input (alternative)
9. Apply Now Button
10. Save Calculation Link
11. View Breakdown Link
12. Footer Links

Keyboard Shortcuts:
────────────────────────────────────────────
Space/Enter  → Activate focused element
Arrow Keys   → Adjust slider values (±1)
Shift+Arrow  → Adjust slider values (±10)
Tab          → Next focusable element
Shift+Tab    → Previous focusable element
Esc          → Close modal/dropdown
/            → Focus search (on formula page)
```

### Screen Reader Announcements

```
Interaction              Announcement
─────────────────────────────────────────────────────
Slider adjustment     →  "Loan amount: $25,000"
Calculation complete  →  "EMI calculated: $250 per month"
Page navigation       →  "Navigated to Breakdown page"
Error occurs          →  "Error: Please enter valid amount"
Save success          →  "Calculation saved successfully"
```

---

## Mobile Gestures

```
Gesture                Action                  Page
──────────────────────────────────────────────────────
Swipe Left          →  Next TVM Calculator  →  TVM Hub
Swipe Right         →  Previous Calculator  →  TVM Hub
Pull Down           →  Refresh data         →  Any page
Pinch Zoom          →  Zoom chart           →  Breakdown
Long Press          →  Show context menu    →  Saved calcs
Double Tap          →  Quick save           →  Calculator
```

---

## Summary of Key UX Principles

1. **Immediate Feedback**: All interactions provide instant visual feedback
2. **Progressive Disclosure**: Complex features revealed as needed
3. **Error Prevention**: Input validation before calculation
4. **Recovery**: Clear error messages with actionable solutions
5. **Consistency**: Same patterns across all calculators
6. **Efficiency**: Real-time calculations, no submit buttons
7. **Accessibility**: Full keyboard navigation and screen reader support
8. **Offline First**: Core calculations work without internet
9. **Mobile First**: Optimized for touch and small screens
10. **Performance**: Sub-second calculations, smooth 60fps animations


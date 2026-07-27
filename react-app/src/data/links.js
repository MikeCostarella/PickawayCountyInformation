// Pickaway County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-07-27

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Business & Economy",
  "Community & Social",
  "Recreation & Tourism",
  "News & Media",
];

// The county Auditor's online parcel/property records portal.
export const AUDITOR_VENDOR = "Pickaway County Auditor Property Search";

export const LINKS = [
  // ---------- Government ----------
  { name: "Pickaway County Government", category: "Government", subcategory: "County", url: "https://pickawaycountyohio.gov/", description: "Official portal for the county seated in Circleville, linking commissioners, courts and county offices." },
  { name: "Pickaway County Auditor", category: "Government", subcategory: "Auditor", url: "https://auditor.pickawaycountyohio.gov/", description: "Property search, tax estimator and GIS parcel viewer from the auditor's Island Road office." },
  { name: "Pickaway County Board of Elections", category: "Government", subcategory: "Elections", url: "https://www.boe.ohio.gov/pickaway/", description: "Voter registration, polling place lookup and absentee ballot tracking for Pickaway County voters." },
  { name: "Pickaway County Sheriff's Office", category: "Government", subcategory: "Public Safety", url: "https://pickawaycountyohio.gov/offices/sheriff/index.html", description: "Sheriff Matthew Hafey's office on Island Road, covering patrol, the county jail and court security." },
  { name: "City of Circleville", category: "Government", subcategory: "City", url: "https://circlevilleoh.gov/", description: "City hall at 104 E. Franklin Street, with police, fire, utilities and zoning for the county seat." },
  { name: "Village of Ashville", category: "Government", subcategory: "Village", url: "https://www.ashvilleohio.gov/", description: "Village services on East Station Street, including police, utilities, parks and mayor's court." },
  { name: "Village of Commercial Point", category: "Government", subcategory: "Village", url: "https://www.commercialpointohio.gov/", description: "Fast-growing village on West Scioto Street with police, zoning, utilities and mayor's court." },
  { name: "Village of South Bloomfield", category: "Government", subcategory: "Village", url: "https://www.southbloomfieldoh.com/", description: "Village offices at 5000 Park Place, covering police, water, zoning and trash collection." },
  // ---------- Education ----------
  { name: "Pickaway County District Public Library", category: "Education", subcategory: "Library", url: "https://www.pickawaylib.org/", description: "Main library at 1160 N. Court Street plus the Floyd E. Younkin Branch in Ashville." },
  { name: "Circleville City Schools", category: "Education", subcategory: "K-12", url: "https://www.circlevillecityschools.org/", description: "Home of the Tigers, serving Circleville from the district office on Clark Drive." },
  { name: "Teays Valley Local Schools", category: "Education", subcategory: "K-12", url: "https://www.tvsd.us/", description: "Ashville-based Viking district with seven schools across northern Pickaway County." },
  { name: "Logan Elm Local Schools", category: "Education", subcategory: "K-12", url: "https://www.loganelm.org/", description: "Braves district on Tarlton Road with elementary, middle and high schools near Circleville." },
  { name: "Westfall Local Schools", category: "Education", subcategory: "K-12", url: "https://www.westfallschools.com/", description: "Home of the Mustangs on Pherson Pike in Williamsport, serving western Pickaway County." },
  { name: "Pickaway-Ross Career & Technology Center", category: "Education", subcategory: "Career-Tech", url: "https://www.pickawayross.com/", description: "Career-tech center serving Circleville and Logan Elm with 50+ programs and adult education." },
  { name: "Ohio Christian University", category: "Education", subcategory: "Higher Ed", url: "https://www.ohiochristian.edu/", description: "Private university on Lancaster Pike in Circleville, affiliated with Churches of Christ in Christian Union." },
  // ---------- Health ----------
  { name: "Pickaway County Public Health", category: "Health", subcategory: "Public Health", url: "https://pickawaycountypublichealth.org/", description: "County health district at 110 Island Road offering immunizations, vital records and food inspections." },
  { name: "OhioHealth Berger Hospital", category: "Health", subcategory: "Hospital", url: "https://www.ohiohealth.com/locations/hospitals/berger-hospital", description: "Circleville's community hospital, part of OhioHealth, serving Pickaway County with maternity care." },
  { name: "Integrated Services for Behavioral Health – Pickaway", category: "Health", subcategory: "Behavioral Health", url: "https://isbh.org/locations/pickaway-county-office/", description: "Behavioral health and substance use services at 1154 North Court Street in Circleville." },
  // ---------- Business & Economy ----------
  { name: "Pickaway County Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.pickawaychamber.com/", description: "Circleville chamber running Business After Hours, Leadership Pickaway and a BWC safety council." },
  { name: "Pickaway Progress Partnership (P3)", category: "Business & Economy", subcategory: "Economic Development", url: "https://www.pickawayprogress.com/", description: "Nonprofit economic development agency marketing Pickaway County as Central Ohio's next frontier." },
  // ---------- Community & Social ----------
  { name: "Pickaway County Job & Family Services", category: "Community & Social", subcategory: "Social Services", url: "https://pickawayjfs.org/", description: "Circleville agency at 1005 S. Pickaway Street handling SNAP, Medicaid, child support and job services." },
  { name: "OSU Extension – Pickaway County", category: "Community & Social", subcategory: "Extension", url: "https://pickaway.osu.edu/", description: "County Extension office delivering 4-H, agriculture and family programs across Pickaway County." },
  { name: "Pickaway County Historical Society", category: "Community & Social", subcategory: "History", url: "https://www.pickawayhistoricalsociety.org/", description: "Preserves county heritage and runs the Clarke-May Museum on Emerson Road in Circleville." },
  // ---------- Recreation & Tourism ----------
  { name: "Pickaway Agriculture & Event Center (County Fair)", category: "Recreation & Tourism", subcategory: "Fair", url: "https://www.pickawaycountyfair.org/", description: "Fairgrounds at 415 Lancaster Pike in Circleville, home of the annual Pickaway County Fair." },
  { name: "Circleville Pumpkin Show", category: "Recreation & Tourism", subcategory: "Festival", url: "https://www.pumpkinshow.com/", description: "Ohio's oldest festival, drawing over 400,000 people to downtown Circleville each October." },
  { name: "A.W. Marion State Park", category: "Recreation & Tourism", subcategory: "Parks", url: "https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/a-w-marion-state-park", description: "310-acre state park with 145-acre Hargus Lake, camping and hiking just east of Circleville." },
  { name: "Deer Creek State Park", category: "Recreation & Tourism", subcategory: "Parks", url: "https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/deer-creek-state-park", description: "State park and lodge straddling Pickaway and Fayette counties, with golf, marina and campground." },
  { name: "Slate Run Metro Park", category: "Recreation & Tourism", subcategory: "Parks", url: "https://www.metroparks.net/parks-and-trails/slate-run/", description: "Metro park in Madison Township featuring the 1880s Slate Run Living Historical Farm." },
  // ---------- News & Media ----------
  { name: "The Circleville Herald", category: "News & Media", subcategory: "Newspaper", url: "https://www.circlevilleherald.com/", description: "Pickaway County's newspaper, covering local government, schools, sports and obituaries." },
  { name: "Scioto Post", category: "News & Media", subcategory: "Online News", url: "https://www.sciotopost.com/", description: "Regional online outlet covering Pickaway, Ross and Fairfield county news from Circleville." },
];

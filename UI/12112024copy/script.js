let actorCount = 0;
let dialogCount = 0; // Start with one static dialog container

const actorNames=["Sr Ntr", "Nageswara Rao Akkineni", "S V Ranagarao", "Rajendra Prasad", "Chiranjeevi", "Nagarjuna Akkineni","K. V. Reddy", "N. T. Rama Rao", "C. S. Rao, C. Pullayya", "Kamalakara Kameswara Rao", "K. Shankar", "K. Raghavendra Rao", "P. Chandrasekhara Reddy", "Tapi Chanakya", "Dasari Narayana Rao", "Vedantam Raghavaiah", "L. V. Prasad", "Adurthi Subba Rao", "K. S. Prakash Rao", "Ghantasala Balaramayya", "B. A. Subba Rao", "P. Pullaiah", "B. N. Reddy", "V.Madhusudhan rao", "Jandhyala", "relangi Narasimha Rao", "E. V. V. satyanarayana", "Bapu", "P S krishna Mohan Reddy", "Chandra siddhartha", "V. Eshwar Reddy", "Trivikram Srinivas", "A. Kodandarami Reddy", "Surender Reddy", "B. Gopal", "Jayanth C. Paranjee", "Guna Sekhar", "K. Viswanath", "V. V. Vinayak", "Singeetham Srinivasarao", "Boyapati Srinu", "Anil Ravipudi", "K. S. Ravi Kumar", "Krish Jagarlamudi", "V. Madhusudhana Rao", "Mani Ratnam", "Ram Gopal Varma", "Krishna Vamsi", "Puri Jagannadh", "Sreenu Vaitla", "Vamshi Paidipally", "Sriram Adittya", "Suresh krishna", "Ravi Raja Pinisetty", "Thirupathisamy", "Udayasankar", "K. Vijaya Bhaskar", "Kishore Kumar Pardasani", "Sobhan", "Gunasekhar", "Sukumar", "Koratala Siva", "srikanth Addala", "A. Karunakaran", "P. A. Arun Prasad", "S. J. Suryah", "Veera Shankar", "Vishnuvardhan", "Harish Shankar", "Bhimaneni Srinivasa Rao", "Venu Sriram", "Samuthirakani", "S. S. Rajamouli", "Prabhu Deva", "Meher Ramesh", "Dasaradh", "Radha krishna Kumar", "Prashanth Neel", "Nag Ashwin", "Krish Jagarlamuddi", "Surendar Reddy", "Bhaskar", "Sampath Nandi", "Apoorva Lakhia", "Vamsy Paidipally", "K. Ashok Kumar", "Teja", "V. Samudra", "Naren Kondapati", "Mallikarjun", "sunil Reddy", "Upendra Madhav", "Jayendra Panchapakesan", "K. V. Guhan", "Mallidi Vassishta", "Krish", "Sekhar Kammula", "Venky Atluri", "Sankalp Reddy", "Kiran Korrapati", "Shakti Pratap Singh Hada", "Karuna Kumar", "Vijay Kumar Konda", "Hanu Raghavapudi", "Satish Vegesna", "Venky Kudumula", "Vikram K. Kumar", "Prem Sai", "krishna Chaitanya", "Chandra Sekhar Yeleti", "M. S. Rajashekar Reddy", "A.S. Ravi Kumar Chowdary", "gopichand Malineni", "B.V.S.R. Ravi", "Kishore Tirumala", "Maruthi Dasari", "Subbu V. V.", "Deva Katta", "Karanam P. Babji", "Ravi Babu", "Tharun Bhascker Dhaassyam", "Srinivasa Ravindra", "Sandeep Reddy Vanga", "Parasuram", "Rahul Sankrityan", "Bharat Kamma", "K. Kranthi Madhav", "Shiva Nirvana", "Anand Shankar", "Shaji Kaila", "G. Ram Prasad", "Srinu Vaitla", "Y.V.S. Chowdary", "G. Nageswara Reddy", "Raaja Kiran", "G. Karthik Reddy", "Jeffrey Gee Chin", "Ramprasad G", "Veeru Potla", "Kodi Ramakrishna", "K. Madhu", "Praveen Sattaru", "Prasanth Varma", "V. R. Pratap", "Jeevitha", "Nukaarapu Suryaprakashrao", "Muthyala Subbaiah", "Dinesh Babu", "Sriwass", "Sreenivas Mamilla", "Ramesh Varma", "Santosh Srinivas", "P. Narayana", "Sujeeth", "Kranthi Madhav", "Merlapaka Gandhi", "Chandra Mohan", "Hanusu Raghavapudi", "Sudheer Varma", "C. Prem Kumar", "Kishor B", "Tirumala Kishore", "Shree Karthick", "Pavan Sadineni", "Kumar Vatti", "Vivek Athreya", "Venu Udugula", "R. Inndrasena", "krishna Vijay", "Anish R. krishna", "Hasith Goli", "Teja Marni", "Pradeep Varma", "Ram Abbaraju", "Sree Harsha Konuganti", "Mallik Ram", "M. Rajesh", "J. Prabhakara Reddy", "R. Chandru", "Mohana krishna Indraganti", "R. S. Naidu", "Harsha Vardhan", "Gnanasagar Dwaraka", "Abhilash Reddy Kankara", "krishna Reddy Gangadhasuu", "Nellore Bose", "Mahesh Surapaneni", "A. S. Ravi Kumar Chowdary", "Paruchuri Murali", "Amma Rajasekhar", "Srivass", "Siva", "P. Shashank", "U. V. V. Vamsi", "Jyothi krishna", "Venky", "S. V. krishna Reddy", "T. Venu Gopal", "P. Srinivasarao", "Madan", "Tarani", "J. D. Chakravarthy", "Sandeep Raj", "Shanmukha Prasanth", "Arjun Y. K", "Bobby Varma", "Sandeep Reddy Bandla", "Radha Mohan", "Maruthi", "Vi Anand", "Sanjeev Reddy", "Rakesh Sashii", "Prakash Toleti", "Gopiganesh Pattabhi", "Pradeep Maddali", "venkatesh_daggubaati Maha", "Mohan Bammidi", "Sharan Koppisetty", "Nagashekar", "V. V. Gopala krishna", "Yakub ali", "Tharun Bhascker", "Vishwak Sen", "Sailesh Kolanu", "Naresh Kuppili", "Vidya Sagar Chinta", "Ashwath Marimuthu", "Vidyadhar Kagita", "ravi_teja Mullapudi", "Chaitanya Dantuluri", "Prashanth Mandava", "Pradeep", "Mallela Pavan", "Buchi Babu Sana", "Gireeshaaya", "srikanth N. Reddy", "Ravi Kiran Kola", "Sridhar Gade", "Balaji Sayyapureddy", "Gopinath Reddy", "M. Murali krishna", "Ramesh Kaduri", "Rathinam krishna", "Sujith & Sandeep", "Vikram Kumar", "Chinni krishna", "Chandoo Mondeti", "T. Santhosh", "Palnati Surya Pratap", "Hari K. Chanduri", "Karthik Gattamneni", "Chandra Mahesh", "B. Jaya", "G. Ashok", "Ravikumar Chavali", "Naveen Gandhi", "Veerabhadram Chowdary", "Prabhakar Podakandla", "Sai Kiran Adivi", "Polimera Nageshawar", "Kalyanji Gogana", "Vishwanath Arigella", "Srinivas Naidu Nadikatla", "Phani krishna Siriki", "Ram Mohan P.", "V. Jayashankarr", "Karthik Rapolu", "Anil Kumar Aalla", "Prasanth Kumar Dimmala", "B. V. Nandini Reddy", "Abhishek Maharshi", "Kuchipudi Venkat", "P.A. Arun Prasad", "A. R. Rajaraja", "V. N. Aditya", "Surya Raju", "Raj Pippalla", "Avaneendra", "Muppalaneni Shiva", "Jyothindranath Vemuri", "RaviKanth Perepu", "Adithya Mandala", "Vimal krishna", "Sandeep Gunnam", "Priya Sharan", "Shravan", "Koneti Srinu", "Trinadha Rao Nakkina", "M. Srinivas Raju", "Rajesh Jagannadham", "G. Neelakanta Reddy", "Ravi Yadav", "Ramana Salva", "B. Jeevan Reddy", "T satya", "Jagadish Talasila", "E. Satti Babu", "Ajay Vodhirala", "srikanth Nagothi", "Karthik Thupurani", "Srinivas Raju", "G. Ravicharan Reddy", "G. S. Karthik Reddy", "Rahul Ravindran", "S. Darshan", "S. Gopal Reddy", "Vasu Varma", "Gautham Menon", "Ajay Bhuvan", "Kalyan krishna", "K. S. Ravindra", "Venkat Prabhu", "Siva Ananth", "Baskhar", "Kishore Kumar Pardasany", "Anand Ranga", "K. Prakash", "Sri Ram Venu", "Rambabu", "Ajay Bhupathi", "Sundar C.", "Karthik Subbaraj", "S.U.Arun Kumar", "Shankar", "Balaji Mohan", "Adivi Sesh", "Mohan krishna Indraganti", "Sashi Kiran Thikka", "Venkat Ramji", "Virinchi Varma", "Surya Prathap Palnati", "G. Nageswara Rao", "Vamsi krishna", "Veligonda Srinivas", "Sriranjini", "Sanjana Reddy", "Anish krishna", "G. R. krishna", "Sreenu Gavireddy", "Vijay Binni", "Ram Bhimana", "J. Siva Sai Vardhan", "S. V. krishna Reddy", "R. V. Udayakumar", "Sarath", "M. Mallikharjuna Rao", "V. Ramachandra Rao", "A. C. Tirulokchandar", "V. Madhusudan Rao", "K. S. R. Das", "vijaya_nirmala", "krishna", "B. Narsing Rao", "N. Shankar", "Devi Prasad", "Samuthrakani", "Sai Kumar Matcha", "Vijay Kanakamedala", "Avasarala Srinivas", "Trikoti", "Nandhyala Ravi", "Nandhini Reddy", "A.L.Vijay", "Sundar Surya", "Srinivas Chakravarthi", "Ramana Teja", "Lakshmi Soujanya", "Lawerence Dasari", "Pawan Basamsetti", "Surya Kiran", "Gowtam Tinnanuri", "Santhossh Jagarlapudi", "Anil Srikantam", "Raj Aditya", "B. V. Ramana", "Tammareddy Bharadwaja", "Pradeep krishnamoorthy", "Subramaniam Siva", "Pavan Wadeyar", "K. Dasaradh", "S. K. satya", "Ani Kanneganti", "Kumar Nagendra", "Sathya prabhas Pinisetty", "Hari Nath", "Prithivi Adithya", "Madhura Sreedhar Reddy", "Siraj Kalla", "mahesh_babu Pachigolla", "Kanmani", "Suseenthiran", "Manjula Ghattamaneni", "Dennis Jeevan Kanukolanu", "Ranjit Jeyakodi", "Rajasimha Tadinada", "Rishi", "Sekhar Reddy Yerra", "Pegallapati Koushik", "Clax", "Prashanth Reddy", "Sri Saripalli", "Indraganti Mohan krishna", "Rahul Sankrithyan", "Shouryav", "Venkatesh Daggubaati", "Nandamuri Balakrishna", "Mahesh Babu", "Pawan Kalyan", "Prabhas", "Allu Arjun", "Jr Ntr", "Ram Charan", "Ravi Teja", "Suriya", "Kalyan Ram", "Naga Chaitanya", "Varun Tej", "Siddharth", "Nithin", "Sai Dharam Tej", "Vijay Devarakonda", "Adivi Sesh", "Manchu Vishnu", "Raja Shekhar", "Bellamkonda Srinivas", "Karthi", "Tarun", "Sharwanand", "Sree Vishnu", "Teja Sajja", "Raj Tarun", "Sudheer Babu", "Gopichandh", "Jagapathi Babu", "Srikanth", "Krishna", "Krishnam Raju", "Suhas", "Kiran Abbavaram", "Akhil Akkineni", "Allu Sirish", "Mohan Babu", "Sai Kumar", "Rana Daggubati", "Allari Naresh", "Ram Pothineni", "Nikhil Siddharth", "Naga Shaurya", "Sumanth Yarlagadda", "Manchu Manoj", "Aadi Pinisetti", "Satya Dev", "Sundeep Kishan", "Karthikeya Gummikonda", "Viswak Sen", "Nara Rohith", "Sushanth Anumolu", "Naveen Chandra", "Vaishnav Tej", "Varun Sandesh", "Siddhu Jonnalagadda", "Navadeep", "Shiva Balaji", "Santhosh Shobhan", "Venu Thottampudi", "Aadi Pudipeddi", "Rashmika Mandanna", "Mrunal Takur", "Samantha Ruth Prabhu", "Tamannaah Bhatia", "Sai Pallavi", "Anushka Shetty", "Keerthy Suresh", "Krithi Shetty", "Sreeleela", "Kiara Advani", "Shruthi Hasaan", "Trisha Krishnan", "Nidhhi Agerwal", "Rakul Preeth Singh", "Anupama Parameswaran", "Kajal Aggarwal", "Samyuktha Menon", "Priyanka Arul Mohan", "Nabha Natesh", "Shriya Saran", "Pooja Hegde", "Nitya Menen", "Raashi Khanna", "Meenakshi Chaudhary", "Nayanatara", "Regina Cassandra", "Nivetha Thomas", "Lavanya Tripathi", "Anu Emmanual", "Mehreen Pirzada", "Savithri", "Sri Devi", "Soundarya", "Ramya Krishnan", "Jaya Prada", "Jaya Sudha", "Vijayashanthi", "Bhanu Priya", "Ali", "Vennela Kishore", "Brahmanadham", "Sunil", "Venu Madhav", "Sapthagiri", "Priyadarshi Pulikonda", "Ms Narayana", "Satya", "Prudhvi Raj", "Allu Ramalingaiah", "Relangi", "Posani Krishna Murali", "Vasu Inturi", "Krishna Bhagavan", "Gundu Hanumantha Rao", "Raghu Babu", "Srinivasa Reddy", "Satyam Rajesh", "Dharmavarapu Subramanyam", "Kondavalasa Lakshmana Rao", "Rahul Ramakrishna", "Shakalaka Shankar", "Babu Mohan", "Kota Srinivasa Rao"]
const movieTitles = ["Patala Bhairavi", "Mayabazar", "Daana Veera Soora Karna", "Lava Kusa", "Gundamma Katha", "Sri krishna Pandaveeyam", "Nartanasala", "Bhookailas", "Adavi Ramudu", "Badi Panthulu", "Ramudu Bheemudu", "Driver Ramudu", "Vetagadu", "Bobbili Puli", "Kondaveeti Simham", "Devadasu", "Missamma", "Mooga Manasulu", "Prem Nagar", "Mayabazar", "Gundamma Katha", "Sudigundalu", "Balaraju", "Dasara Bullodu", "Meghasandesam", "Dr. Chakravarthy", "Samsaram", "Tenali Ramakrishna", "Aradhana", "Aha Naa Pellanta", "Ladies Tailor", "April 1 Vidudala", "Edurinti Mogudu Pakkinti Pellam", "Appula Apparao", "Rajendrudu Gajendrudu", "Pelli Pustakam", "Madana Gopaludu", "Aa Naluguru", "Onamalu", "Mee Sreyobhilashi", "Julayi", "Aa Okkati Adakku", "Chettu Kinda Pledaer", "Khaidi", "Sye Raa Narasimha Reddy", "Indra", "Shankar Dada MBBS", "Choodalani Undi", "Abhilasha", "Chantabbai", "Rudra Veena", "Gharana Mogudu", "Challange", "Tagore", "Jagadeka Veerudu Athiloka Sundari", "Vijetha", "Swayam Krushi", "Muta Mestri", "Aditya 369", "Akhanda", "Simha", "Legend", "Bhagavanth Kesari", "Nari Nari Naduma Murari", "Samaraimha Reddy", "Narasimha Naidu", "Palnati Brahma Naidu", "Lakshmi Narasimha", "Allari Pidugu", "Jai Simha", "Sri Rama Rajyam", "N. T. R. Katha nayakudu", "N. T. R. Mahanayakudu", "Vikram", "Majnu", "Geetanjali", "Siva", "Allari Alludu", "Hello Brother", "Ninne Pelladata", "Sivamani", "King", "Manam", "Oopiri", "Devadas", "Kaliyuga Pandavulu", "Brahma Puthrudu", "Prema", "Swarna Kamalam", "Coolie No. 1", "Chanti", "Kshana Kshanam", "Sundarakanda", "Dharma Chakram", "Intlo Illalu Vantintlo Priyuralu", "Ganesh", "Kalisundam Raa", "Nuvvu Naaku Nachav", "Malliswari", "Gopala Gopala", "Rajakumarudu", "Murari", "Bobby", "Okkadu", "Athadu", "Pokiri", "Khaleja", "Businessman", "1: Nenokkadine", "Srimanthudu", "Bharat Ane Nenu", "Seethamma Vakitlo Sirimalle Chettu", "Maharshi", "Sarileru Neekevvaru", "Guntur Kaaram", "Akkada Ammayi Ikkada Abbayi", "Tholi Prema", "Thammudu", "Badri", "Kushi", "Gudumba Shankar", "Balu", "Jalsa", "Panjaa", "Gabbar Singh", "Attarintiki Daredi", "Gopala Gopala", "Suswagatham", "Vakeel Saab", "Bro", "Eeswar", "Varsham", "Chatrapathi", "Pournami", "Munna", "Bujjigadu", "Billa", "Darling", "Mr. Perfect", "Mirchi", "Baahubali: The Beginning", "Baahubali 2: The Conclusion", "Radhe Shyam", "Salaar: Part 1 - Ceasefire", "Kalki 2898 AD", "Gangotri", "Arya", "Happy", "Desamuduru", "Arya 2", "Vedam", "Julayi", "Iddarammayilatho", "Race Gurram", "S/O satyamurthy", "Sarrainodu", "Bunny", "Ala Vaikuntapurramulo", "Pushpa: The Rise", "Pushpa 2: The Rule", "Chirutha", "Magadheera", "Orange", "Rachcha", "Naayak", "Thoofan", "Yevadu", "Govindudu Andarivadele", "Bruce Lee - The Fighter", "Dhruva", "Rangasthalam", "Vinaya Vidheya Rama", "RRR", "Toli Choopulone", "Abhimanyu", "Athadu", "Lakshmi Kalyanam", "Vijayadasami", "Jayeebhava", "Kalyanram Kathi", "Om 3D", "Pataas", "Ism", "MLA (Manchi Lakshanalunna Abbayi)", "Naa Nuvve", "118", "Bimbisara", "Mukunda", "Kanche", "Loafer", "Mister", "Fidaa", "Tholi Prema", "Antariksham 9000 KMPH", "Gaddalakonda Ganesh", "F3: Fun and Frustration", "Ghani", "Operation Valentine", "Matka", "F2: Fun and Frustration", "Jayam", "Gunde Jaari Gallanthayyinde", "Heart Attack", "A Aa", "LIE (Love Intelligence Enmity)", "Srinivasa Kalyanam", "Bheeshma", "Chinnadana Nee Kosam", "Ishq", "Courier Boy Kalyan", "Rang De", "Chal Mohan Ranga", "Check", "Macherla Niyojakavargam", "Pilla Nuvvu Leni Jeevitham", "Supreme", "Winner", "Jawaan", "Inttelligent", "Tej I Love You", "Chitralahari", "Prati Roju Pandage", "Solo Brathuke So Better", "Republic", "Subramanyam for Sale", "Thikka", "Virupaksha", "Nakshatram", "Bro", "Nuvvila", "Yevade Subramanyam", "Pelli Choopulu", "Dwaraka", "Arjun Reddy", "Geetha Govindam", "Taxiwala", "Dear Comrade", "World Famous Lover", "Liger", "Kushi", "The Family Star", "NOTA", "Vishnu", "Suryam", "Dhee", "Asthram", "Saleem", "Anukshanam", "Dynamite", "Eedo Rakam Aado Rakam", "Luck Unnodu", "Voter", "Mosagallu", "Game", "Denikaina Ready", "Doosukeltha", "Achari America Yatra", "Ankusam", "Magaadu", "Garuda Vega", "Kalki", "Maa Annayya", "Gorintaku", "Mahankali", "Evadithe Nakenti", "satyameva Jeyathe", "Bharatasimha Reddy", "Aavesam", "Simha Raasi", "Neeku Naaku Pellanta", "Manasunna Maraju", "Papa kosam", "Alludu Seenu", "Speedunnodu", "Jaya Janaki Nayaka", "Saakshyam", "Kavacham", "Sita", "Rakshasudu", "Alludu Adhurs", "Amma Cheppindi", "Gamyam", "Nuvva Nena", "Run Raja Run", "Malli Malli Idi Rani Roju", "Express Raja", "Radha", "Mahanubhavudu", "Padi Padi Leche Manasu", "Sathamanam Bhavati", "Ranarangam", "Jaanu", "Sreekaram", "Aadavallu Meeku Johaarlu", "Oke Oka Jeevitham", "Prema Ishq Kaadhal", "Maa Abbayi", "Mental Madhilo", "Needi Naadi Oke Katha", "Veera Bhoga Vasantha Rayalu", "Brochevarevarura", "Thipparaa Meesam", "Gaali Sampath", "Raja Raja Chora", "Arjuna Phalguna", "Alluri", "Samajavaragamana", "Om Bheem Bush", "Swag", "Zombie Reddy", "Ishq", "Adbhutham", "Hanu-Man", "Shiva Manasulo Shruti", "Prema Katha Chitram", "krishnamma Kalipindi Iddarini", "Sammohanam", "Nannu Dochukunduvate", "Aa Ammayi Gurinchi Meeku Cheppali", "Mama Mascheendra", "Harom Hara", "Maa Nanna Superhero", "Aadu Magaadra Bujji", "Mosagallaku Mosagadu", "Bhale Manchi Roju", "V", "Sridevi Soda Centre", "Hunt", "Tholi Valapu", "Yagnam", "Andhrudu", "Ranam", "Lakshyam", "Ontari", "Souryam", "Golimaar", "Mogudu", "Saahasam", "Loukyam", "Jil", "Oxygen", "Goutham Nanda", "Seetimaarr", "Aayanakiddaru", "Subhakankshalu", "Pelli Pandiri", "Kabaddi Kabaddi", "Manoharam", "Budget Padmanabham", "Athade oka Sainyam", "Kshetram", "Swagatham", "Kathanayakudu", "Pravarakhyudu", "Simha Swapnam", "Parishkaram", "Sahasam", "Siddham", "Colour Photo", "Writer Padmabhushan", "Prasanna Vadanam", "Gorre Puranam", "Janaka Aithe Ganaka", "Gouravam", "Kotha Janta", "Srirastu Subhamastu", "Okka Kshanam", "ABCD: American Born Confused Desi", "Urvasivo Rakshasivo", "Leader", "Nenu Naa Rakshasi", "Naa Istam", "Krishnam Vande Jagadgurum", "Ghazi", "Nene Raju Nene Mantri", "Bluff Master", "47 Days", "Uma Maheswara Ugra Roopasya", "Guvva Gorinka", "Thimmarusu", "Godse", "Gurthunda Seethakala", "krishnamma", "Vellipomakey", "Ee Nagaraniki Emaindhi", "Falaknuma Das", "HIT: The First Case", "Paagal", "Ashoka Vanamlo Arjuna Kalyanam", "Ori Devuda", "Das Ka Dhamki", "Gaami", "Gangs of Godavari", "Mechanic Rocky", "Baanam", "Solo", "Prathinidhi", "Rowdy Fellow", "Asura", "Savitri", "Raja Cheyyi Vesthe", "Balakrishnudu", "Aatagallu", "Uppena", "Konda Polam", "Ranga Ranga Vaibhavanga", "Aadikeshava", "Raja Varu Rani Garu", "SR Kalyanamandapam", "Sebastian P.C. 524", "Sammathame", "Vinaro Bhagyamu Vishnu Katha", "Meter", "Nenu Meeku Baaga Kavalsinavaadini", "Rules Ranjann", "KA", "Akhil: The Power of Jua", "Hello!", "Mr. Majnu", "Agent", "Happy Days", "Yuvatha", "Kirrak Party", "Veedu Theda", "Swamy Ra Ra", "Karthikeya", "Arjun Suravaram", "Keshava", "18 Pages", "Appudo Ippudo Eppudo", "Karthikeya 2", "Ekkadiki Pothavu Chinnavada", "Disco", "Surya vs Surya", "Aalasyam Amrutam", "Prema Kavali", "Lovely", "Sukumarudu", "Pyar Mein Padipoyane", "Galipatam", "Chuttalabbai", "Next Nuvve", "Operation Gold Fish", "Atithi Devo Bhava", "Tees Maar Khan", "Jodi", "Sashi", "Crazy Fellow", "Thanu Nenu", "Paper Boy", "Ek Mini Katha", "Manchi Rojulochaie", "Like, Share & Subscribe", "Kalyanam Kamaneeyam", "Sridevi Shoban Babu", "Anni Manchi Sakunamule", "Prem Kumar", "Jai", "Modati Cinema", "Gowtam SSC", "Seethakoka Chiluka", "Chandamama", "Yagam", "Mugguru", "Mythri", "Bangaru Kodipetta", "Ice Cream", "Love Mouli", "Manasu Maata Vinadhu", "Idi Maa Ashokgadi Love Story", "Dost", "Chandamama", "Kumkuma", "krishna and His Leela", "Maa Vintha Gaadha Vinuma", "DJ Tillu", "Tillu Square", "Happy Days", "Kotha Bangaru Lokam", "Kurradu", "Happy Happy Ga", "Priyudu", "Abbai Class Ammai Mass", "Nuvvala Nenila", "Induvadana", "Nindha", "Chammak Challo", "Maro Charita", "Priyathama Neevachata Kusalama", "Kudirithe Kappu Coffee", "Andala Rakshasi", "Dalam", "Naa Rakumarudu", "Lacchimdeviki O Lekkundi", "Meelo Evaru Koteswarudu", "Juliet Lover of Idiot", "Bhanumathi & Ramakrishna", "#Bro", "Thaggedele", "Month of Madhu", "Kalidasu", "Current", "Adda", "Aatadukundam Raa", "Chi La Sow", "Ichata Vahanamulu Niluparadu", "Nee Kosam", "Itlu Sravani Subramanyam", "Avunu Valliddaru Ista Paddaru", "Idiot", "Khadgam", "Amma Nanna O Tamila Ammayi", "Dongodu", "Venky", "Naa Autograph", "Bhadra", "Shock", "Vikramarkudu", "Dubai Seenu", "Kick", "Krack", "Josh", "Ye maaya Chesaavey", "100 % Love", "Dhada", "Manam", "Oka Laila Kosam", "Dohchay", "Premam", "Rarandoi Veduka chuddham", "Majili", "Venky Mama", "Bangarraju", "Love Story", "Thank You", "Custody", "Nuvvostanante Nenoddantana", "Chukkalo Chandrudu", "Bommarillu", "Aata", "Koncham Istam Koncham Kastam", "Oye!", "Anaganaga oka Dheerudu!", "Oh My friend", "Baava", "Maha Samudhram", "Something Something", "Jigarthanda", "Chinna", "Bhaarateeydu - 2", "Love Failure", "Kiss", "Karma", "Kshanam", "Ami Thumi", "Goodachaari", "Evaru", "Major", "Uyyala Jampala", "Cinema Choopistha Mava", "Kumari 21f", "Eedo rakam Aado Rakam", "Kittu Unnadu Jagratha", "Andahagadu", "Rangula Raatnam", "Raju Gadu", "Lover", "Iddari Lokam Okate", "Orey Bujjiga..!", "Anubhavinchu Raja", "Naa Saami Ranga", "Purushothammudu", "Tiragabadara Saami", "Bhale Unnade", "Aame", "Taj Mahal", "Pelli Sandadi", "Vinodam", "Thaali", "Egire Paavurama", "Aahvanama", "Taraka Ramudu", "Maa Nannaku Pelli", "Ooyala", "Pandaga", "Kanyadanam", "Khadgam", "Radha Gopalam", "Mahatma", "Gudachari 116", "Marapurani Katha", "Ave Kallu", "Lakshmi Nivasam", "Mosagallaki Mosagaadu", "Illu Illalu", "Meena", "Devudu Chesina Manushulu", "Alluri Seetharama Raju", "Simhasanam", "Gudachari 117", "Santhi Nivasam", "Pandanti Samsaram", "Chandravamsam", "Alludu Diddina Kapuram", "Pedarayudu", "Major Chandrakanth", "Allari Mogudu", "Assembly Rowdy", "Tirugubatu", "Alludugaru", "Raayudu", "Yamajathakudu", "Sri Ramulayya", "Rayalaseema Ramanna Chowdary", "Collector Garu", "Adavilo Anna", "Veedevadandi Babu", "Soggadi Pellam", "Adirindi Alludu", "Allari", "Danger", "Party", "Kithakithalu", "Athili Sattibabu LKG", "Seema Sasthri", "Sundara Kanda", "Gamyam", "Blade Babji", "Bendu Apparao R.M.P", "Shambo Siva Shambo", "Kathi Kantha Rao", "Sudigaadu", "James Bond", "Naandhi", "Oohalu Gusagusalade", "Dikkulu Choodaku Ramayya", "Lakshmi raavey maa intiki", "Kalyana Vaibhogame", "Jyo Achuthanandha", "Oh! Baby", "Chalo", "Kanam", "Ammammagarillu", "Nartanasala", "Ashwathama", "Varudu Kaavalenu", "krishna Vrinda Vihari", "Nee Jathaleka", "Rangabali", "Prema Katha", "satyam", "Mahanandi", "Godavari", "Golconda High School", "Malli Raava", "Subrahmanyapuram", "Idam Jagath", "Pourudu", "Madhumasam", "Gowri", "Ramma Chilakamma", "Daggaraga Dooranga", "Emo Gurram Egaravachu", "Kapatadhaari", "Donga Dongadi", "Prayanam", "Bindaas", "Vedam", "Potugadu", "Current Theega", "Shourya", "Gunturodu", "Mr. Nookayya", "Sri", "Jhummandi Naadam", "Oka 'V' Chitram", "Gundello Godari", "Malupu", "Neevevaro", "Clap", "Sneha Geetham", "Venkatadri Express", "D for Dopidi", "Ra Ra... krishnayya", "Beeruva", "C/O Surya", "Manasuku Nachindi", "A1 Express", "Michael", "Ooru Peru Bhairavakona", "Gully Rowdy", "Tenali Ramakrishna BA. BL", "Okka Ammayi Thappa", "Prematho Mee Karthik", "RX 100", "Hippi", "90ML", "Chaavu Kaburu Challaga", "Bedurulanka 2012", "Bhaje Vaayu Vegam", "Raja Vikramarka", "Aravinda Sametha Veera Raghava", "RRR", "Temper", "Janatha Garage", "Baadshah", "Adhurs", "Brindavanam", "Oosaravelli", "Shakti", "Rabhasa", "Nannaku Prematho", "Aadi", "Simhadri", "Yamadonga", "Student No.1", "Ashta chamma", "Ala Modalindhi", "Eega", "Bhale Bhale Magadivoy", "krishna Gaadi Veera Prema Gaadha", "Gentleman", "Majnu", "Nenu Local", "MCA", "krishnarjuna Yuddham", "Jersey", "nani, Gang Leader", "V", "Shyam Singa Roy", "Ante Sundariniki", "Hi Nanna"];
const genres = ["Action", "Comedy", "Drama", "Sci-Fi", "Romance", "Horror","Adventure","Biopic","Crime","Documentary","Fantasy","History","Musical"];
const emotionLabels = ["Happy", "Sad", "Angry", "Surprised", "Fearful", "Neutral","Heroism","Disgust","Wonder","Peace"];

// Function to add a new actor container
function addActorContainer() {
    const container = document.createElement('div');
    container.className = 'actor-container';
    container.id = `actor-container-${actorCount}`;
    
    container.innerHTML = `
        <h4>Actor ${actorCount}</h4>
        <div class="input-group-horizontal">
            <div>
                <label for="name-${actorCount}">Name:</label>
                <input type="text" class="actorname" id="name-${actorCount}" name="actors[${actorCount}]name" oninput="showSuggestions(this.value, ${actorCount}, 'actor')" autocomplete="off">
                <div id="suggestions-${actorCount}" class="suggestions"></div> <!-- Suggestion container here -->
            </div>

            <div>
                <label for="dob-${actorCount}">Date of Birth (yyyy-mm-dd):</label>
                <input type="date" id="dob-${actorCount}" name="actors[${actorCount}]dob">
            </div>
        </div>

        <div>
            <label for="filmography-${actorCount}">Filmography:</label>
            <div class="filmography-grid">
                <div class="checkbox-group">
                    <input type="checkbox" id="movie1-${actorCount}" name="actors[${actorCount}]filmography" value="hero">
                    <label for="movie1-${actorCount}">Hero</label>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="movie2-${actorCount}" name="actors[${actorCount}]filmography" value="heroine">
                    <label for="movie2-${actorCount}">Heroine</label>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="movie3-${actorCount}" name="actors[${actorCount}]filmography" value="comedian">
                    <label for="movie3-${actorCount}">Comedian</label>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="movie4-${actorCount}" name="actors[${actorCount}]filmography" value="villain">
                    <label for="movie4-${actorCount}">Villain</label>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="movie5-${actorCount}" name="actors[${actorCount}]filmography" value="character_artist">
                    <label for="movie5-${actorCount}">Character Artist</label>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="movie6-${actorCount}" name="actors[${actorCount}]filmography" value="child_artist">
                    <label for="movie6-${actorCount}">Child Artist</label>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="movie7-${actorCount}" name="actors[${actorCount}]filmography" value="cameo_role">
                    <label for="movie7-${actorCount}">Cameo Role</label>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="movie8-${actorCount}" name="actors[${actorCount}]filmography" value="director">
                    <label for="movie8-${actorCount}">Director</label>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="movie9-${actorCount}" name="actors[${actorCount}]filmography" value="writer">
                    <label for="movie9-${actorCount}">Writer</label>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="movie10-${actorCount}" name="actors[${actorCount}]filmography" value="screenplay_writer">
                    <label for="movie10-${actorCount}">Screenplay Writer</label>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="movie11-${actorCount}" name="actors[${actorCount}]filmography" value="story_writer">
                    <label for="movie11-${actorCount}">Story Writer</label>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="movie12-${actorCount}" name="actors[${actorCount}]filmography" value="dialogue_writer">
                    <label for="movie12-${actorCount}">Dialogue Writer</label>
                </div>
            </div>
        </div>
         <div class="button-group1"
        <button type="button" onclick="removeActorContainer(${actorCount})">Remove Actor</button>
        </div>
    `;
    
    document.getElementById('actors-container').appendChild(container);
    actorCount++;
}

// function getSelectedFilmography(actorIndex) {
//     const checkboxes = document.querySelectorAll(`input[name="actors[${actorIndex}]filmography"]:checked`);
//     const selectedFilmography = [];
    
//     checkboxes.forEach((checkbox) => {
//         selectedFilmography.push(`"${checkbox.value}"`);
//     });

//     // Return the selected films as a string with comma separation
//     return selectedFilmography.join(", ");
// }
function getSelectedFilmography(actorIndex) {
    const checkboxes = document.querySelectorAll(`input[name="actors[${actorIndex}]filmography"]:checked`);
    const selectedFilmography ="";
    
    checkboxes.forEach((checkbox) => {
        // Push the value directly, no need for extra quotes
        selectedFilmography+=checkbox.value;
    });

    // Join the values with commas and wrap the entire result in double quotes
    return `${selectedFilmography.join(",")}`;
}

function addDialogContainer() {
    dialogCount++; // Increment dialog count

    // Create the new dialog container
    const newDialogContainer = document.createElement("div");
    newDialogContainer.classList.add("dialog-container");
    newDialogContainer.id = `dialog-container-${dialogCount}`;

    // Add header (Dialog 2, Dialog 3, etc.)
    const h4 = document.createElement("h4");
    h4.textContent = `Dialog ${dialogCount}`;
    newDialogContainer.appendChild(h4);

    // Add textarea for dialogue text
    const textareaLabel = document.createElement("label");
    textareaLabel.setAttribute("for", `dialog[${dialogCount}]text-${dialogCount}`);
    textareaLabel.textContent = "Dialogue Text:";
    newDialogContainer.appendChild(textareaLabel);
    newDialogContainer.appendChild(document.createElement("br"));
    
    const textarea = document.createElement("textarea");
    textarea.id = `dialog[${dialogCount}]text-${dialogCount}`;
    textarea.name = `dialog[${dialogCount}]text`;
    newDialogContainer.appendChild(textarea);
    newDialogContainer.appendChild(document.createElement("br"));
    newDialogContainer.appendChild(document.createElement("br"));

    // Add actor input field
    const actorLabel = document.createElement("label");
    actorLabel.setAttribute("for",`dialog[${dialogCount}]actor-${dialogCount}`);
    actorLabel.textContent = "Dialogue Actor:";
    newDialogContainer.appendChild(actorLabel);
    newDialogContainer.appendChild(document.createElement("br"));
    
    const actorInput = document.createElement("input");
    actorInput.type = "text";
    actorInput.id = `dialog[${dialogCount}]actor-${dialogCount}`;
    actorInput.name = `dialog[${dialogCount}]actor`;
    actorInput.setAttribute("oninput", `showSuggestions(this.value, ${dialogCount}, 'dialog-actor')`);
    
    actorInput.setAttribute("autocomplete", "off");
    newDialogContainer.appendChild(actorInput);

    const suggestionsDiv = document.createElement("div");
    suggestionsDiv.id = `suggestions-${dialogCount}-actor`;
    suggestionsDiv.classList.add("suggestions");
    newDialogContainer.appendChild(suggestionsDiv);
    newDialogContainer.appendChild(document.createElement("br"));
    newDialogContainer.appendChild(document.createElement("br"));

    // Add remove button
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = "Remove Dialog";
    removeButton.setAttribute("onclick", `removeDialogContainer(${dialogCount})`);
    newDialogContainer.appendChild(removeButton);

    // Append the new dialog container to the container
    document.getElementById("dialogs-container").appendChild(newDialogContainer);
}


// Function to generate year options (2024 to 1900)
function generateYearOptions() {
    let options = '';
    for (let year = 2024; year >= 1900; year--) {
        options += `<option value="${year}">${year}</option>`;
    }
    return options;
}

// Function to generate genre options (radio buttons) dynamically from array
// function generateGenreOptions(movieIndex) {
//     let options = '';
//     genres.forEach(genre => {
//         options += `<option value="${genre}">${genre}</option>`;
//     });
//     document.getElementById(`genre-${movieIndex}`).innerHTML = options;  // Adding options dynamically to the multi-select dropdown
// }

// Function to handle saving the selected genres
// function getSelectedGenres(movieIndex) {
//     // Access the select element by its ID
//     const selectElement = document.getElementById(`genre-${movieIndex}`);
    
//     // Check if the element exists
//     if (!selectElement) {
//         console.error(`Element with id 'genre-${movieIndex}' not found.`);
//         return '';
//     }

//     // Collect the selected options and join them into a comma-separated string
//     const selectedGenres = Array.from(selectElement.selectedOptions)
//         .map(option => option.value)
//         .join(', ') || '';  // Join them into a comma-separated string or empty if none selected

//     return selectedGenres;
// }
$(document).ready(function() { 
    $('.js-example-basic-multiple').select2({
        placeholder: "Select all options",
        allowClear: true,
        closeOnSelect: false
    });

    // Manually update the hidden input when the genres are selected
    $('.js-example-basic-multiple').on('change', function() {
        var selectedValues = $(this).val();
        var commaSeparatedValues = ''; 

        if (selectedValues && selectedValues.length > 0) {
            // Join the values into a comma-separated string if any values are selected
            commaSeparatedValues = selectedValues.join(',');

            // Set the comma-separated values in the hidden input
            $('#selectedTechnologies').val(commaSeparatedValues);
        } else {
            // Handle case when no options are selected
            $('#selectedTechnologies').val('');  // Clear the hidden input if no options are selected
        }
    });

    // If you still want to prevent default form submit
    $('#technologyForm').submit(function(event) {
        event.preventDefault();
        // Same logic as above
    });
});


// Function to show suggestions (for both actor and movie title)
function showSuggestions(value, index, type) {
    let suggestionBox;
    
    if (type === 'actor') {
        suggestionBox = document.getElementById(`suggestions-${index}`);
        const filteredNames = actorNames.filter(name => name.toLowerCase().includes(value.toLowerCase()));
        suggestionBox.innerHTML = '';
        filteredNames.forEach(name => {
            const suggestionItem = document.createElement('div');
            suggestionItem.classList.add('suggestion-item');
            suggestionItem.textContent = name;
            suggestionItem.onclick = () => {
                document.getElementById(`name-${index}`).value = name;
                suggestionBox.innerHTML = '';
            };
            suggestionBox.appendChild(suggestionItem);
        });
    } else if (type === 'movie') {
        suggestionBox = document.getElementById(`suggestions-${index}-movie`);
        const filteredTitles = movieTitles.filter(title => title.toLowerCase().includes(value.toLowerCase()));
        suggestionBox.innerHTML = '';  // Clear previous suggestions
        filteredTitles.forEach(title => {
            const suggestionItem = document.createElement('div');
            suggestionItem.classList.add('suggestion-item');
            suggestionItem.textContent = title;
            suggestionItem.onclick = () => {
                document.getElementById(`title-${index}`).value = title;
                suggestionBox.innerHTML = '';
            };
            suggestionBox.appendChild(suggestionItem);
        });
    } else if (type === 'director') {
        suggestionBox = document.getElementById(`suggestions-${index}-director`);
        const filteredDirectors = actorNames.filter(name => name.toLowerCase().includes(value.toLowerCase()));
        suggestionBox.innerHTML = '';  // Clear previous suggestions
        filteredDirectors.forEach(name => {
            const suggestionItem = document.createElement('div');
            suggestionItem.classList.add('suggestion-item');
            suggestionItem.textContent = name;
            suggestionItem.onclick = () => {
                document.getElementById(`director-${index}`).value = name;
                suggestionBox.innerHTML = '';
            };
            suggestionBox.appendChild(suggestionItem);
        });
    } else if (type === 'emotion') {
        suggestionBox = document.getElementById(`suggestions-${index}-emotion`);
        const filteredLabels = emotionLabels.filter(label => label.toLowerCase().includes(value.toLowerCase()));
        suggestionBox.innerHTML = '';  // Clear previous suggestions
        filteredLabels.forEach(label => {
            const suggestionItem = document.createElement('div');
            suggestionItem.classList.add('suggestion-item');
            suggestionItem.textContent = label;
            suggestionItem.onclick = () => {
                document.getElementById(`label-${index}`).value = label;
                suggestionBox.innerHTML = '';
            };
            suggestionBox.appendChild(suggestionItem);
        });
    }  else if(type === 'dialog-actor') {
        suggestionBox = document.getElementById(`suggestions-${index}-actor`);
        const filteredActors = actorNames.filter(name => name.toLowerCase().includes(value.toLowerCase()));
        suggestionBox.innerHTML = '';
        filteredActors.forEach(name => {
            const suggestionItem = document.createElement('div');
            suggestionItem.classList.add('suggestion-item');
            suggestionItem.textContent = name;
            suggestionItem.onclick = () => {
                document.getElementById(`dialog[${index}]actor-${index}`).value = name;
                suggestionBox.innerHTML = '';
            };
            suggestionBox.appendChild(suggestionItem);
        });
}
}
function removeActorContainer(actorId) {
    const container = document.getElementById(`actor-container-${actorId}`);
    container.parentNode.removeChild(container);
    actorCount--;
}
function removeDialogContainer(dialogId) {
    const dialogContainer = document.getElementById(`dialog-container-${dialogId}`);
    dialogContainer.remove();
    dialogCount--;
}



// Function to remove an actor container
function displayFormData(formData) {
    // Create an array to hold the displayed form data
    let displayContent = [];

    // Iterate over each key-value pair in the FormData object
    formData.forEach((value, key) => {
        // Append each key-value pair to the display content
        displayContent.push(`${key}: ${value}`);
    });

    // Join all the key-value pairs into a string and display it in the 'json-display' element
    document.getElementById('json-display').textContent = displayContent.join('\n');
}

window.onload = function() {
    addActorContainer();  // Automatically add one actor container by default
    
    // Add options to the year dropdown (2024 to 1900)
    document.getElementById('releaseYear-1').innerHTML = generateYearOptions();
};






function submitAllData() {
    // Create a new FormData object
    const formData = new FormData();

    // Collect data from Actor Containers
    let actors = [];
    console.log(document.querySelectorAll('.actor-container'));
    document.querySelectorAll('.actor-container').forEach((container, index) => {
        // Collecting actor's name and date of birth
        const actorName = container.querySelector(`input[name="actors[${index}]name"]`).value;
        const dob = container.querySelector(`input[name="actors[${index}]dob"]`).value;
    
        // Collecting filmography (selected checkboxes)
        const filmography = Array.from(container.querySelectorAll(`input[name="actors[${index}]filmography"]:checked`))
        .map(input => input.value);

    
        // Append the actor data to formData with unique keys
        formData.append(`actors[${index}]name`, actorName);
        formData.append(`actors[${index}]dob`, dob);
    
        // Join the filmography array into a comma-separated string
       // formData.append(`actors[${index}]filmography`, JSON.stringify(filmography));
       formData.append(`actors[${index}]filmography`,filmography);
    });

    // Collect data from Movie Container
const movieTitle = document.getElementById('title-1').value;
const movieReleaseYear = document.getElementById('releaseYear-1').value;
// const movieGenres = getSelectedGenres(1);  // Join genres as comma-separated string or empty string if none selected
const movieGenres = document.getElementById('selectedTechnologies').value;
const movieDirector = document.getElementById('director-1').value;

console.log({
    movieTitle,
    movieReleaseYear,
    movieGenres,
    movieDirector
});

// Append movie data to formData
formData.append('title', movieTitle);
formData.append('releaseYear', movieReleaseYear);
formData.append('genre', movieGenres); // Comma-separated genres
formData.append('director', movieDirector);

    // Collect data from Emotion Container
const emotionLabel = document.getElementById('label-1').value;
const emotionDescription = document.getElementById('description-1').value;
console.log(emotionDescription);

// Append emotion data to formData with the desired variable names
formData.append('emotionLabel', emotionLabel);
formData.append('emotionDescription', emotionDescription);

    /// Collect data from Dialog Containers
let dialogs = [];
document.querySelectorAll('.dialog-container').forEach((container, index) => {
    const dialogText = container.querySelector(`textarea[name="dialog[${index}]text"]`).value;
    const dialogActor = container.querySelector(`input[name="dialog[${index}]actor"]`).value;

    // Create an object for each dialog entry
    dialogs.push({
        text: dialogText,
        actor: dialogActor
    });

    // Append dialog data to formData with the desired variable names
    formData.append(`dialogs[${index}]text`, dialogText);
    formData.append(`dialogs[${index}]actor`, dialogActor);
});
    // Collect data from Meme Container
    const memeReleaseYear = document.getElementById('memeReleaseYear').value;
    const memeImage = document.getElementById('meme-image').files[0];
    const memeSize = document.getElementById('meme-height-width').value || "1024,1024";

    // Append meme data to formData
    formData.append('memeReleaseYear', memeReleaseYear);
    formData.append('imageSize', memeSize);

    if (memeImage) {
        formData.append('media', memeImage);
    } else {
        formData.append('media', 'No image uploaded');
    }

    // Optionally, display the formData
    displayFormData(formData);

    // Send data to the Supabase API endpoint using FormData (same as before)
    const supabaseUrl = 'https://ixnbfvyeniksbqcfdmdo.supabase.co/functions/v1/annotate';
    const supabaseApiKey = 'eyJhbGciOiJIUzI1NiIsImtpZCI6IldsZFhxUFZFZndGbGJrQU4iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2l4bmJmdnllbmlrc2JxY2ZkbWRvLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiJmZmMzMTZmOC1kOGYyLTQ3ZGItYmQyMi1mMDkwOTI5MGRkYzEiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzM1MDM4NDY4LCJpYXQiOjE3MzQ0MzM2NjgsImVtYWlsIjoiIiwicGhvbmUiOiI5MTkzOTg5NjAzNjIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJwaG9uZSIsInByb3ZpZGVycyI6WyJwaG9uZSJdfSwidXNlcl9tZXRhZGF0YSI6eyJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInBob25lX3ZlcmlmaWVkIjpmYWxzZSwic3ViIjoiZmZjMzE2ZjgtZDhmMi00N2RiLWJkMjItZjA5MDkyOTBkZGMxIn0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoib3RwIiwidGltZXN0YW1wIjoxNzM0NDMzNjY4fV0sInNlc3Npb25faWQiOiI1MjYxMjdiMi00M2Q2LTQzZmItOTY1Zi0zODMzMGZlODlkODUiLCJpc19hbm9ueW1vdXMiOmZhbHNlfQ.17jUE_TRLplHv3Yn0DNLfYKOzQykLGS3NYUA6S6mivM';
    fetch(supabaseUrl, {
        method: 'POST',
        headers: {
            'authorization': `Bearer ${supabaseApiKey}`, // Add Authorization header with the API key
        },
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from Supabase
        console.log('Success:', data);
        // You can display a success message or process the returned data
    })
    .catch(error => {
        // Handle any errors
        console.error('Error:', error);
    });
    function displayFormData(formData) {
        // Create an array to hold the displayed form data
        let displayContent = [];
    
        // Iterate over each key-value pair in the FormData object
        formData.forEach((value, key) => {
            // Append each key-value pair to the display content
            displayContent.push(`${key}: ${value}`);
        });
    
        // Join all the key-value pairs into a string and display it in the 'json-display' element
        document.getElementById('json-display').textContent = displayContent.join('\n');
    }

    // Add one actor container by default when the page loads

    

    // Optionally, display the formData in the pre tag with the id 'json-display' (for debugging purposes)
    // You can't display FormData directly in the same way as JSON, so this would need custom handling.
}


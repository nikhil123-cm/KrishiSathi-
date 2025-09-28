document.addEventListener('DOMContentLoaded', () => {
    // --- COMPREHENSIVE TRANSLATIONS FOR ALL PAGES ---
    const translations = {
        // English
        en: {
            // Common/Shared
            app_title: "Krishi Sathi",
            app_subtitle: "Your Digital Krishi Officer",
            back_to_dashboard: "Back to Dashboard",
            languageName: "English",
            
            // Index/Dashboard Page
            dashboard_title: "Welcome to Krishi Sathi",
            chatbot_title: "Farm AI Assistant",
            chatbot_desc: "Get expert advice on crops, livestock, and farming techniques",
            doctor_crop_title: "Doctor Crop",
            doctor_crop_desc: "Expert crop health diagnostics and advice",
            weather_title: "Weather Forecast",
            weather_desc: "Check local weather conditions for better farming decisions",
            agrinews_title: "AgriNews",
            agrinews_desc: "Latest agricultural news, trends, and updates",
            soil_card_desc: "Soil health analysis and medical recommendations",
            farm_calendar_title: "Farm Calendar",
            farm_calendar_desc: "Plan your farming activities and schedules",
            advance_techniques_title: "Advance Techniques",
            advance_techniques_desc: "Learn advanced farming techniques and innovations",
            settings_title: "Settings",
            settings_desc: "Customize your app preferences and account settings",
            help_title: "Help",
            help_desc: "Get assistance and support",
            
            // Language/Settings Page
            header: "Settings",
            select_language_label: "Language",
            notifications_alerts: "Notifications & Alerts",
            weather_alerts: "Weather Alerts",
            frost_warning: "Frost Warning",
            task_reminders: "Task Reminders",
            planting_schedule: "Planting Schedule",
            communication_channel: "Communication Channel",
            in_app_push: "In-App Push",
            sms_messages: "SMS Messages",
            email: "Email",
            back_button_aria: "Back to Dashboard",
            
            // Doctor/Crop Analysis Page
            crop_analyzer_title: "Crop Disease AI Analyzer",
            crop_analyzer_subtitle: "Use your camera to identify crop diseases and get instant solutions.",
            start_camera: "Start Camera",
            switch_camera: "Switch Camera",
            restart_camera: "Restart Camera",
            capture_photo: "Capture Photo",
            chat_with_agri_ai: "Chat with Agri-AI",

            // News Page
            kerala_agriculture_news: "Kerala Agriculture News",
            updates_farming: "Updates on farming, spices, and crops from Kerala.",
            
            // Soil Page
            soil_title: "Soil",
            soil_desc: "Your AI-powered guide to optimal crop nutrition.",
            select_crop: "Select Crop",
            select_soil_type: "Select Soil Type",
            amount_of_land: "Amount of Land (Acres)",
            select_crop_stage: "Select Crop Stage",
            generate_solution: "Generate Solution",
            your_fertilizer_recommendation: "Your Fertilizer Recommendation",
            start_over: "Start Over",
            
            // Help Page
            how_can_we_help: "How can we help you today?",
            get_assistance: "Get assistance with public services, report issues, and connect directly with the concerned government agencies.",
            national_helpline_number: "National Helpline Number",
            for_any_grievance: "For any grievance, you can call the national helpline.",
            submit_detailed_grievance: "Submit a Detailed Grievance",
            select_department: "Select Department to see Helpline or Submit Grievance",
            describe_problem: "Describe your Problem",
            attach_documents: "Attach Supporting Documents (Optional)",
            submit_grievance: "Submit Grievance",
            guidelines_reporting: "Guidelines for Reporting",
            
            // Calendar Page
            farmers_crop_calendar: "Farmer's Crop Calendar",
            monthly_guide: "Your monthly guide to crop sowing and activities.",
            recommended_for_sowing: "Recommended for Sowing",
            ongoing_activities: "Ongoing Activities",
            this_months_activities: "This Month's Activities",
            
            // Weather Page
            weather_forecast: "Weather Forecast",
            weather_conditions: "Check local weather conditions for better farming decisions",
            enter_city: "Enter city name...",
            search_weather: "Search weather",
            
            // Technique Page
            advanced_techniques: "Advanced Farming Techniques",
            latest_innovations: "Discover the latest innovations shaping the future of agriculture in India and beyond. Adopt powerful techniques for higher yields and sustainable practices.",
            last_reviewed: "Last reviewed: September 26, 2025",
            read_with_ai: "Read with AI",
            stop_reading: "Stop Reading",
            generating: "Generating...",
            learn_more: "Learn More",
            read_this: "Read this",
            key_benefits: "Key Benefits:",
            select_all: "Select / Deselect All for Reading",
            api_error: "Failed to generate audio. Please try again.",
            confirm_language_title: "Confirm Language Change",
            confirm_language_message: "Are you sure you want to switch? This will stop any current reading.",
            copyright: "&copy; 2025 AgriFuture Portal. All Rights Reserved.",
            
            // Chatbot Page
            farm_ai: "Farm AI",
            friendly_guide: "Your friendly guide to the fields!",
            ask_about_farming: "Ask about farming...",
            new_chat: "New Chat",
            welcome_message: "Hello there! I'm HarvestAI, your friendly guide. Ask me about organic farming, plant care, soil health, or sustainable practices.",
            listening: "Listening...",
            speech_not_supported: "Your browser doesn't support voice input. You can type your questions instead!",
            connection_error: "Sorry, I'm having trouble connecting. Please check your connection and try again.",
            
            // Modal/Chat
            modal_title: "Farm AI",
            modal_subtitle: "Your friendly guide to the fields!",
            ai_name: "Farmer AI",
            ai_welcome: "Howdy! I'm your Farm AI Assistant. Ask me anything about crops, livestock, or modern farming techniques. What's on your mind today?",
            chat_placeholder: "Ask about farming...",
            // Doctor page specific
            analyzing: "Analyzing...",
            input_set_to: "Input set to",
            api_key_error: "API key not configured",
            tts_generating: "Generating speech...",
            tts_error: "Speech generation failed",
            crop_analyzer_title: "Crop Disease AI Analyzer",
            crop_analyzer_subtitle: "Use your camera to identify crop diseases and get instant solutions.",
            start_camera: "Start Camera",
            capture_photo: "Capture Photo",
            chat_with_agri_ai: "Chat with Agri-AI",
            ask_about_image: "Ask about the image...",
            send: "Send",
            read_response: "Read Last Response",
            tts_fast: "Fast",
            tts_high_quality: "High Quality",
            placeholder_initial: "Capture a photo to begin chatting with the AI assistant.",
            placeholder_after_capture: "Ask questions about the captured image...",
            mic_error: "Microphone error"
        },
        
        // Hindi
        hi: {
            // Common/Shared
            app_title: "कृषि साथी",
            app_subtitle: "आपका डिजिटल कृषि अधिकारी",
            back_to_dashboard: "डैशबोर्ड पर वापस जाएं",
            languageName: "Hindi",
            
            // Index/Dashboard Page
            dashboard_title: "कृषि साथी में आपका स्वागत है",
            chatbot_title: "फार्म एआई असिस्टेंट",
            chatbot_desc: "फसलों, पशुधन और कृषि तकनीकों पर विशेषज्ञ सलाह प्राप्त करें",
            doctor_crop_title: "डॉक्टर क्रॉप",
            doctor_crop_desc: "विशेषज्ञ फसल स्वास्थ्य निदान और सलाह",
            weather_title: "मौसम पूर्वानुमान",
            weather_desc: "बेहतर कृषि निर्णय के लिए स्थानीय मौसम की स्थिति जांचें",
            agrinews_title: "कृषि समाचार",
            agrinews_desc: "नवीनतम कृषि समाचार, रुझान और अपडेट",
            soil_card_desc: "मिट्टी स्वास्थ्य विश्लेषण और चिकित्सा सिफारिशें",
            farm_calendar_title: "फार्म कैलेंडर",
            farm_calendar_desc: "अपनी कृषि गतिविधियों और कार्यक्रमों की योजना बनाएं",
            advance_techniques_title: "उन्नत तकनीकें",
            advance_techniques_desc: "उन्नत कृषि तकनीकों और नवाचारों को सीखें",
            settings_title: "सेटिंग्स",
            settings_desc: "अपनी ऐप प्राथमिकताएं और खाता सेटिंग्स अनुकूलित करें",
            help_title: "सहायता",
            help_desc: "सहायता और समर्थन प्राप्त करें",
            
            // Language/Settings Page
            header: "सेटिंग्स",
            select_language_label: "भाषा",
            notifications_alerts: "सूचनाएं और अलर्ट",
            weather_alerts: "मौसम अलर्ट",
            frost_warning: "पाला चेतावनी",
            task_reminders: "कार्य अनुस्मारक",
            planting_schedule: "रोपण अनुसूची",
            communication_channel: "संचार चैनल",
            in_app_push: "इन-ऐप पुश",
            sms_messages: "एसएमएस संदेश",
            email: "ईमेल",
            back_button_aria: "डैशबोर्ड पर वापस जाएं",
            
            // Doctor/Crop Analysis Page
            crop_analyzer_title: "फसल रोग एआई विश्लेषक",
            crop_analyzer_subtitle: "फसल रोगों की पहचान करने और तत्काल समाधान पाने के लिए अपने कैमरे का उपयोग करें।",
            start_camera: "कैमरा शुरू करें",
            switch_camera: "कैमरा बदलें",
            restart_camera: "कैमरा पुनः आरंभ करें",
            capture_photo: "फोटो खींचे",
            chat_with_agri_ai: "एग्री-एआई के साथ चैट करें",
            
            // News Page
            kerala_agriculture_news: "केरल कृषि समाचार",
            updates_farming: "केरल से कृषि, मसालों और फसलों पर अपडेट।",
            
            // Soil Page
            soil_title: "मिट्टी",
            soil_desc: "इष्टतम फसल पोषण के लिए आपका AI-संचालित मार्गदर्शक।",
            select_crop: "फसल चुनें",
            select_soil_type: "मिट्टी का प्रकार चुनें",
            amount_of_land: "भूमि की मात्रा (एकड़)",
            select_crop_stage: "फसल चरण चुनें",
            generate_solution: "समाधान उत्पन्न करें",
            your_fertilizer_recommendation: "आपकी उर्वरक सिफारिश",
            start_over: "फिर से शुरू करें",
            
            // Help Page
            how_can_we_help: "आज हम आपकी कैसे मदद कर सकते हैं?",
            get_assistance: "सार्वजनिक सेवाओं में सहायता प्राप्त करें, मुद्दों की रिपोर्ट करें, और संबंधित सरकारी एजेंसियों से सीधे जुड़ें।",
            national_helpline_number: "राष्ट्रीय हेल्पलाइन नंबर",
            for_any_grievance: "किसी भी शिकायत के लिए, आप राष्ट्रीय हेल्पलाइन पर कॉल कर सकते हैं।",
            submit_detailed_grievance: "विस्तृत शिकायत सबमिट करें",
            select_department: "हेल्पलाइन देखने या शिकायत सबमिट करने के लिए विभाग चुनें",
            describe_problem: "अपनी समस्या का वर्णन करें",
            attach_documents: "सहायक दस्तावेज़ संलग्न करें (वैकल्पिक)",
            submit_grievance: "शिकायत सबमिट करें",
            guidelines_reporting: "रिपोर्टिंग के लिए दिशानिर्देश",
            
            // Calendar Page
            farmers_crop_calendar: "किसान की फसल कैलेंडर",
            monthly_guide: "फसल बोने और गतिविधियों के लिए आपका मासिक मार्गदर्शक।",
            recommended_for_sowing: "बोने के लिए अनुशंसित",
            ongoing_activities: "चल रही गतिविधियाँ",
            this_months_activities: "इस महीने की गतिविधियाँ",
            
            // Weather Page
            weather_forecast: "मौसम पूर्वानुमान",
            weather_conditions: "बेहतर कृषि निर्णय के लिए स्थानीय मौसम की स्थिति जांचें",
            enter_city: "शहर का नाम दर्ज करें...",
            search_weather: "मौसम खोजें",
            
            // Technique Page
            advanced_techniques: "उन्नत कृषि तकनीकें",
            latest_innovations: "भारत और उसके बाहर कृषि के भविष्य को आकार देने वाले नवीनतम नवाचारों की खोज करें। उच्च पैदावार और स्थायी प्रथाओं के लिए शक्तिशाली तकनीकें अपनाएं।",
            last_reviewed: "अंतिम समीक्षा: २६ सितंबर २०२५",
            read_with_ai: "AI से पढ़ें",
            stop_reading: "पढ़ना बंद करें",
            generating: "बना रहा है...",
            learn_more: " और जानें",
            read_this: "इसे पढ़ें",
            key_benefits: "मुख्य लाभ:",
            select_all: "पढ़ने के लिए सभी को चुनें / अचयनित करें",
            api_error: "ऑडियो बनाने में विफल। कृपया पुन: प्रयास करें।",
            confirm_language_title: "भाषा परिवर्तन की पुष्टि करें",
            confirm_language_message: "क्या आप वाकई स्विच करना चाहते हैं? यह वर्तमान पठन को रोक देगा।",
            copyright: "&copy; २०२५ एग्रीफ्यूचर पोर्टल। सर्वाधिकार सुरक्षित।",
            
            // Chatbot Page
            farm_ai: "फार्म एआई",
            friendly_guide: "खेतों के लिए आपका अनुकूल मार्गदर्शक!",
            ask_about_farming: "कृषि के बारे में पूछें...",
            new_chat: "नई चैट",
            welcome_message: "नमस्ते! मैं हार्वेस्टएआई हूं, आपका मित्रवत गाइड। मुझसे जैविक खेती, पौधों की देखभाल, मिट्टी के स्वास्थ्य, या स्थायी प्रथाओं के बारे में पूछें।",
            listening: "सुन रहा हूँ...",
            speech_not_supported: "आपका ब्राउज़र वॉयस इनपुट का समर्थन नहीं करता है। आप इसके बजाय अपने प्रश्न टाइप कर सकते हैं!",
            connection_error: "क्षमा करें, मुझे कनेक्ट करने में समस्या आ रही है। कृपया अपना कनेक्शन जांचें और पुनः प्रयास करें।",
            
            // Modal/Chat
            modal_title: "फार्म एआई",
            modal_subtitle: "खेतों के लिए आपका अनुकूल मार्गदर्शक!",
            ai_name: "किसान एआई",
            ai_welcome: "हैलो! मैं आपका फार्म एआई असिस्टेंट हूं। फसलों, पशुधन या आधुनिक कृषि तकनीकों के बारे में कुछ भी पूछें। आज आपका क्या विचार है?",
            chat_placeholder: "कृषि के बारे में पूछें...",
            // Doctor page specific
            analyzing: "विश्लेषण कर रहा है...",
            input_set_to: "इनपुट सेट किया गया",
            api_key_error: "API कुंजी कॉन्फ़िगर नहीं है",
            tts_generating: "वाणी उत्पन्न कर रहा है...",
            tts_error: "वाणी जनरेशन विफल",
            crop_analyzer_title: "फसल रोग एआई विश्लेषक",
            crop_analyzer_subtitle: "फसल रोगों की पहचान करने और तत्काल समाधान पाने के लिए अपने कैमरे का उपयोग करें।",
            start_camera: "कैमरा शुरू करें",
            capture_photo: "फोटो खींचे",
            chat_with_agri_ai: "एग्री-एआई के साथ चैट करें",
            ask_about_image: "छवि के बारे में पूछें...",
            send: "भेजें",
            read_response: "अंतिम प्रतिक्रिया पढ़ें",
            tts_fast: "तेज़",
            tts_high_quality: "उच्च गुणवत्ता",
            placeholder_initial: "AI सहायक के साथ चैट शुरू करने के लिए एक फोटो कैप्चर करें।",
            placeholder_after_capture: "कैप्चर की गई छवि के बारे में प्रश्न पूछें...",
            mic_error: "माइक्रोफोन त्रुटि"
        },
        
        // Malayalam
        ml: {
            // Common/Shared
            app_title: "കൃഷി സാഥി",
            app_subtitle: "നിങ്ങളുടെ ഡിജിറ്റൽ കൃഷി ഉദ്യോഗസ്ഥൻ",
            back_to_dashboard: "ഡാഷ്‌ബോർഡിലേക്ക് മടങ്ങുക",
            languageName: "Malayalam",
            
            // Index/Dashboard Page
            dashboard_title: "കൃഷി സാഥിയിലേക്ക് സ്വാഗതം",
            chatbot_title: "ഫാർം എഐ അസിസ്റ്റന്റ്",
            chatbot_desc: "വിളകൾ, കന്നുകാലികൾ, കൃഷി സാങ്കേതികതകളെക്കുറിച്ച് വിദഗ്ധ ഉപദേശം നേടുക",
            doctor_crop_title: "ഡോക്ടർ ക്രോപ്പ്",
            doctor_crop_desc: "വിദഗ്ധ വിള ആരോഗ്യ നിർണ്ണയവും ഉപദേശവും",
            weather_title: "കാലാവസ്ഥാ പ്രവചനം",
            weather_desc: "മികച്ച കൃഷി തീരുമാനങ്ങൾക്കായി പ്രാദേശിക കാലാവസ്ഥ അവസ്ഥകൾ പരിശോധിക്കുക",
            agrinews_title: "കൃഷി വാർത്തകൾ",
            agrinews_desc: "ഏറ്റവും പുതിയ കൃഷി വാർത്തകൾ, ട്രെൻഡുകൾ, അപ്‌ഡേറ്റുകൾ",
            soil_card_desc: "മണ്ണിന്റെ ആരോഗ്യ വിശകലനവും വൈദ്യ ശുപാർശകളും",
            farm_calendar_title: "ഫാം കലണ്ടർ",
            farm_calendar_desc: "നിങ്ങളുടെ കൃഷി പ്രവർത്തനങ്ങളും ഷെഡ്യൂളുകളും ആസൂത്രണം ചെയ്യുക",
            advance_techniques_title: "വിപുലമായ സാങ്കേതികതകൾ",
            advance_techniques_desc: "വിപുലമായ കൃഷി സാങ്കേതികതകളും നവീകരണങ്ങളും പഠിക്കുക",
            settings_title: "ക്രമീകരണങ്ങൾ",
            settings_desc: "നിങ്ങളുടെ ആപ്പ് മുൻഗണനകളും അക്കൗണ്ട് ക്രമീകരണങ്ങളും ഇഷ്ടാനുസൃതമാക്കുക",
            help_title: "സഹായം",
            help_desc: "സഹായവും പിന്തുണയും നേടുക",
            
            // Language/Settings Page
            header: "ക്രമീകരണങ്ങൾ",
            select_language_label: "ഭാഷ",
            notifications_alerts: "അറിയിപ്പുകളും മുന്നറിയിപ്പുകളും",
            weather_alerts: "കാലാവസ്ഥാ മുന്നറിയിപ്പുകൾ",
            frost_warning: "മഞ്ഞ് മുന്നറിയിപ്പ്",
            task_reminders: "ടാസ്ക് ഓർമ്മപ്പെടുത്തലുകൾ",
            planting_schedule: "നടീൽ ഷെഡ്യൂൾ",
            communication_channel: "ആശയവിനിമയ ചാനൽ",
            in_app_push: "ഇൻ-ആപ്പ് പുഷ്",
            sms_messages: "SMS സന്ദേശങ്ങൾ",
            email: "ഇമെയിൽ",
            back_button_aria: "ഡാഷ്‌ബോർഡിലേക്ക് മടങ്ങുക",
            
            // Doctor/Crop Analysis Page
            crop_analyzer_title: "വിള രോഗം AI വിശകലനം",
            crop_analyzer_subtitle: "ക്യാമറ ഉപയോഗിച്ച് വിളകളിലെ രോഗങ്ങൾ കണ്ടെത്തുകയും ഉടൻ പരിഹാരം നേടുകയും ചെയ്യുക.",
            start_camera: "ക്യാമറ തുടങ്ങുക",
            switch_camera: "ക്യാമറ മാറ്റുക",
            restart_camera: "ക്യാമറ വീണ്ടും തുടങ്ങുക",
            capture_photo: "ഫോട്ടോ എടുക്കുക",
            chat_with_agri_ai: "അഗ്രി-എഐ യുമായി സംസാരിക്കുക",
            
            // News Page
            kerala_agriculture_news: "കേരള കൃഷി വാർത്തകൾ",
            updates_farming: "കേരളയിൽ നിന്നുള്ള കൃഷി, മസാലകൾ, വിളകളെക്കുറിച്ചുള്ള അപ്‌ഡേറ്റുകൾ.",
            
            // Soil Page
            soil_title: "മണ്ണ്",
            soil_desc: "ആശ്വാസകരമായ വിള പോഷണത്തിനുള്ള നിങ്ങളുടെ AI-സജ്ജമാക്കിയ മാർഗ്ഗദർശകൻ.",
            select_crop: "വിള തിരഞ്ഞെടുക്കുക",
            select_soil_type: "മണ്ണ് തരം തിരഞ്ഞെടുക്കുക",
            amount_of_land: "ഭൂമിയുടെ അളവ് (ഏക്കർ)",
            select_crop_stage: "വിള ഘട്ടം തിരഞ്ഞെടുക്കുക",
            generate_solution: "പരിഹാരം സൃഷ്ടിക്കുക",
            your_fertilizer_recommendation: "നിങ്ങളുടെ ഉർവരക സിഫാർശ്ശ്",
            start_over: "വീണ്ടും ആരംഭിക്കുക",
            
            // Help Page
            how_can_we_help: "ഇന്ന് നിങ്ങളെ എങ്ങനെ സഹായിക്കാം?",
            get_assistance: "പൊതു സേവനങ്ങളിൽ സഹായം നേടുക, പ്രശ്നങ്ങൾ റിപ്പോർട്ട് ചെയ്യുക, ബന്ധപ്പെട്ട സർക്കാർ ഏജൻസികളുമായി നേരിട്ട് ബന്ധപ്പെടുക.",
            national_helpline_number: "ദേശീയ ഹെൽപ്പ്ലൈൻ നമ്പർ",
            for_any_grievance: "എന്തെങ്കിലും പരാതി ഉണ്ടെങ്കിൽ, നിങ്ങൾക്ക് ദേശീയ ഹെൽപ്പ്ലൈൻ വിളിക്കാം.",
            submit_detailed_grievance: "വിശദമായ പരാതി സമർപ്പിക്കുക",
            select_department: "ഹെൽപ്പ്ലൈൻ കാണാനോ പരാതി സമർപ്പിക്കാനോ വകുപ്പ് തിരഞ്ഞെടുക്കുക",
            describe_problem: "നിങ്ങളുടെ പ്രശ്നം വിവരിക്കുക",
            attach_documents: "സഹായകരമായ രേഖകൾ അറ്റാച്ച് ചെയ്യുക (ഓപ്ഷണൽ)",
            submit_grievance: "പരാതി സമർപ്പിക്കുക",
            guidelines_reporting: "റിപ്പോർട്ടിംഗിനുള്ള മാർഗ്ഗനിർദ്ദേശങ്ങൾ",
            
            // Calendar Page
            farmers_crop_calendar: "കർഷകന്റെ വിള കലണ്ടർ",
            monthly_guide: "വിള വിതയ്ക്കലും പ്രവർത്തനങ്ങളും നിങ്ങളുടെ മാസിക മാർഗ്ഗദർശകൻ.",
            recommended_for_sowing: "വിതയ്ക്കലിനായി ശുപാർശ ചെയ്തത്",
            ongoing_activities: "നടന്നുകൊണ്ടിരിക്കുന്ന പ്രവർത്തനങ്ങൾ",
            this_months_activities: "ഈ മാസത്തെ പ്രവർത്തനങ്ങൾ",
            
            // Weather Page
            weather_forecast: "കാലാവസ്ഥാ പ്രവചനം",
            weather_conditions: "മികച്ച കൃഷി തീരുമാനങ്ങൾക്കായി പ്രാദേശിക കാലാവസ്ഥ അവസ്ഥകൾ പരിശോധിക്കുക",
            enter_city: "നഗരത്തിന്റെ പേര് നൽകുക...",
            search_weather: "കാലാവസ്ഥ തിരയുക",
            
            // Technique Page
            advanced_techniques: "വിപുലമായ കൃഷി സാങ്കേതികതകൾ",
            latest_innovations: "ഇന്ത്യയിലും പുറത്തും കൃഷിയുടെ ഭാവിയെ രൂപപ്പെടുത്തുന്ന ഏറ്റവും പുതിയ കണ്ടുപിടുത്തങ്ങൾ കണ്ടെത്തുക. ഉയർന്ന വിളവിനും സുസ്ഥിരമായ പ്രവർത്തനങ്ങൾക്കും ശക്തമായ സാങ്കേതിക വിദ്യകൾ സ്വീകരിക്കുക.",
            last_reviewed: "അവസാനമായി അവലോകനം ചെയ്തത്: സെപ്റ്റംബർ 26, 2025",
            read_with_ai: "AI ഉപയോഗിച്ച് വായിക്കുക",
            stop_reading: "വായന നിർത്തുക",
            generating: "നിർമ്മിക്കുന്നു...",
            learn_more: "കൂടുതലറിയുക",
            read_this: "ഇത് വായിക്കുക",
            key_benefits: "പ്രധാന നേട്ടങ്ങൾ:",
            select_all: "വായനയ്ക്കായി എല്ലാം തിരഞ്ഞെടുക്കുക / തിരഞ്ഞെടുപ്പ് മാറ്റുക",
            api_error: "ഓഡിയോ നിർമ്മിക്കുന്നതിൽ പരാജയപ്പെട്ടു. ദയവായി വീണ്ടും ശ്രമിക്കുക.",
            confirm_language_title: "ഭാഷ മാറ്റം സ്ഥിരീകരിക്കുക",
            confirm_language_message: "നിങ്ങൾക്ക് മാറണമെന്ന് ഉറപ്പാണോ? ഇത് നിലവിലെ വായന നിർത്തും.",
            copyright: "&copy; 2025 അഗ്രിഫ്യൂച്ചർ പോർട്ടൽ. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.",
            
            // Chatbot Page
            farm_ai: "ഫാർം എഐ",
            friendly_guide: "വയലുകളിലേക്കുള്ള നിങ്ങളുടെ സൗഹൃദ മാർഗദർശകൻ!",
            ask_about_farming: "കൃഷിയെക്കുറിച്ച് ചോദിക്കുക...",
            new_chat: "പുതിയ ചാറ്റ്",
            welcome_message: "നമസ്കാരം! ഞാൻ ഹാർവെസ്റ്റ് എഐ, നിങ്ങളുടെ സൗഹൃദപരമായ വഴികാട്ടി. ജൈവകൃഷി, സസ്യ സംരക്ഷണം, മണ്ണിന്റെ ആരോഗ്യം, അല്ലെങ്കിൽ സുസ്ഥിരമായ രീതികളെക്കുറിച്ച് എന്നോട് ചോദിക്കൂ.",
            listening: "കേൾക്കുന്നു...",
            speech_not_supported: "നിങ്ങളുടെ ബ്രൗസർ വോയ്‌സ് ഇൻപുട്ടിനെ പിന്തുണയ്ക്കുന്നില്ല. പകരം നിങ്ങളുടെ ചോദ്യങ്ങൾ ടൈപ്പ് ചെയ്യാം!",
            connection_error: "ക്ഷമിക്കണം, എനിക്ക് കണക്റ്റുചെയ്യാൻ കഴിയുന്നില്ല. ദയവായി നിങ്ങളുടെ കണക്ഷൻ പരിശോധിച്ച് വീണ്ടും ശ്രമിക്കുക.",
            
            // Modal/Chat
            modal_title: "ഫാർം എഐ",
            modal_subtitle: "വയലുകളിലേക്കുള്ള നിങ്ങളുടെ സൗഹൃദ മാർഗദർശകൻ!",
            ai_name: "കർഷക എഐ",
            ai_welcome: "ഹായ്! ഞാൻ നിങ്ങളുടെ ഫാർം എഐ അസിസ്റ്റന്റ് ആണ്. വിളകൾ, കന്നുകാലികൾ അല്ലെങ്കിൽ ആധുനിക കൃഷി സാങ്കേതികതകളെക്കുറിച്ച് എന്തും ചോദിക്കുക. ഇന്ന് നിങ്ങളുടെ മനസ്സിൽ എന്താണ്?",
            chat_placeholder: "കൃഷിയെക്കുറിച്ച് ചോദിക്കുക...",
            // Doctor page specific
            analyzing: "വിശകലനം ചെയ്യുന്നു...",
            input_set_to: "ഇൻപുട്ട് സജ്ജമാക്കി",
            api_key_error: "API കീ കോൺഫിഗർ ചെയ്തിട്ടില്ല",
            tts_generating: "സംസാരം സൃഷ്ടിക്കുന്നു...",
            tts_error: "സംസാരം സൃഷ്ടിക്കൽ പരാജയപ്പെട്ടു",
            crop_analyzer_title: "വിള രോഗം AI വിശകലനം",
            crop_analyzer_subtitle: "ക്യാമറ ഉപയോഗിച്ച് വിളകളിലെ രോഗങ്ങൾ കണ്ടെത്തുകയും ഉടൻ പരിഹാരം നേടുകയും ചെയ്യുക.",
            start_camera: "ക്യാമറ തുടങ്ങുക",
            capture_photo: "ഫോട്ടോ എടുക്കുക",
            chat_with_agri_ai: "അഗ്രി-എഐ യുമായി സംസാരിക്കുക",
            ask_about_image: "ചിത്രത്തെക്കുറിച്ച് ചോദിക്കുക...",
            send: "അയയ്ക്കുക",
            read_response: "അവസാന പ്രതികരണം വായിക്കുക",
            tts_fast: "വേഗം",
            tts_high_quality: "ഉയർന്ന ഗുണമേന്മ",
            placeholder_initial: "AI സഹായിയുമായി സംസാരം ആരംഭിക്കാൻ ഒരു ഫോട്ടോ എടുക്കുക.",
            placeholder_after_capture: "എടുത്ത ഫോട്ടോയെക്കുറിച്ച് ചോദ്യങ്ങൾ ചോദിക്കുക...",
            mic_error: "മൈക്രോഫോൺ പിശക്"
        }
    };

    // --- UNIVERSAL LANGUAGE SETTING FUNCTION ---
    function setLanguage(lang) {
        // Find all elements on the current page that have a 'data-translate-key'
        const elements = document.querySelectorAll('[data-translate-key]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate-key');
            // Fallback to English if a translation is missing in the selected language
            const translation = translations[lang]?.[key] || translations['en']?.[key] || key;
            
            // Handle different element types
            if (element.hasAttribute('aria-label')) {
                element.setAttribute('aria-label', translation);
            } else if (element.hasAttribute('placeholder')) {
                element.placeholder = translation;
            } else if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                element.placeholder = translation;
            } else if (element.tagName === 'BUTTON') {
                element.textContent = translation;
            } else {
                element.textContent = translation;
            }
        });
        
        // Set the 'lang' attribute on the HTML tag for accessibility
        document.documentElement.lang = lang;
        // Save the user's preference in localStorage to persist across pages
        localStorage.setItem('krishi-sathi-lang', lang);
        
        // Trigger custom event for other scripts to listen to language changes
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
    }

    // --- UNIVERSAL TOGGLE SWITCH HANDLER ---
    function setupToggles() {
        const toggles = document.querySelectorAll('.toggle-checkbox');
        toggles.forEach(toggle => {
            const key = `toggle_${toggle.id}`;
            // Set initial state from localStorage
            const savedState = localStorage.getItem(key);
            if (savedState === 'true') {
                toggle.checked = true;
            }
            // Save state on change
            toggle.addEventListener('change', (e) => {
                localStorage.setItem(key, e.target.checked);
            });
        });
    }

    // --- PAGE-SPECIFIC INITIALIZATION ---
    
    // Check if a language selector exists on the current page
    const languageSelector = document.getElementById('language-selector');
    if (languageSelector) {
        // This event listener is only for pages that have the language selector (i.e., language.html)
        languageSelector.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
    }

    // --- GLOBAL INITIALIZATION (RUNS ON EVERY PAGE) ---
    // Get the saved language from localStorage, defaulting to English
    const initialLang = localStorage.getItem('krishi-sathi-lang') || 'en';
    
    // If there's a language selector on the page, set its value
    if (languageSelector) {
        languageSelector.value = initialLang;
    }

    // Apply the saved language to the current page
    setLanguage(initialLang);
    // Set up any toggle switches on the current page
    setupToggles();
    
    // Listen for storage events (when language is changed in another tab/window)
    window.addEventListener('storage', (e) => {
        if (e.key === 'krishi-sathi-lang') {
            setLanguage(e.newValue);
            if (languageSelector) {
                languageSelector.value = e.newValue;
            }
        }
    });
    
    // Make setLanguage function globally available
    window.setLanguage = setLanguage;
});

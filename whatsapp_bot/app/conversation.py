import logging
from app import database as db
from app import whatsapp as wa
from app import ai_engine as ai

log = logging.getLogger("conversation")

# ── Multilingual strings ───────────────────────────────────
STRINGS = {
    "en": {
        "welcome": "👋 Welcome to *Soon Hoe Business Management*!\n\nI'm your AI assistant — here to help with immigration, company setup, education, professional services, and AI enterprise solutions (GAIAGenX).\n\nHow can I help you today?",
        "main_menu": "What would you like help with?",
        "menu_btn_imm": "🌏 Immigration & Residency",
        "menu_btn_biz": "🏢 Business Setup",
        "menu_btn_svc": "📋 Professional Services",
        "menu_btn_ai":  "🤖 AI Services (GAIAGenX)",
        "menu_btn_apt": "📅 Book Consultation",
        "menu_btn_edu": "🎓 Education & Lifestyle",
        "ask_name": "To better assist you, may I have your name? 😊",
        "ask_phone": "Thank you, {name}! Could you share your contact number (with country code)?",
        "lead_saved": "✅ Thank you, {name}! Our team will reach out to you at {phone} shortly.\n\nFor urgent enquiries: admin@soonhoe.com.sg\nWebsite: www.soonhoe.com.sg",
        "consult_prompt": "Would you like to book a consultation with our team?",
        "btn_yes": "Yes, please!",
        "btn_no": "Maybe later",
        "btn_more": "Learn more",
        "back_menu": "Back to Menu",
        "anything_else": "Is there anything else I can help you with?",
        "timeout_reset": "Welcome back! How can I help you today?",
        "fallback": "I'm not sure I understood that. Could you rephrase? Or type *menu* to see options.",
    },
    "zh": {
        "welcome": "👋 欢迎来到*顺和商务管理*！\n\n我是您的AI助手，专为您解答移民规划、公司注册、教育留学、专业服务及AI企业落地（GAIAGenX）等方面的问题。\n\n请问有什么可以帮您？",
        "main_menu": "请问您需要哪方面的帮助？",
        "menu_btn_imm": "🌏 投资移民与居留",
        "menu_btn_biz": "🏢 企业出海与注册",
        "menu_btn_svc": "📋 专业财税服务",
        "menu_btn_ai":  "🤖 AI服务（GAIAGenX）",
        "menu_btn_apt": "📅 预约咨询",
        "menu_btn_edu": "🎓 教育与生活服务",
        "ask_name": "为了更好地为您服务，请问您的姓名是？😊",
        "ask_phone": "谢谢，{name}！请问您的联系电话（含国家区号）是？",
        "lead_saved": "✅ 感谢您，{name}！我们的团队将尽快通过 {phone} 与您联系。\n\n紧急咨询请发送邮件至：admin@soonhoe.com.sg\n官网：www.soonhoe.com.sg",
        "consult_prompt": "您是否希望预约我们的专业顾问进行一对一咨询？",
        "btn_yes": "好的，预约！",
        "btn_no": "暂时不需要",
        "btn_more": "了解更多",
        "back_menu": "返回菜单",
        "anything_else": "还有什么可以帮到您的吗？",
        "timeout_reset": "欢迎回来！请问有什么可以帮您？",
        "fallback": "抱歉，我没有理解您的意思。请重新描述，或输入*菜单*查看选项。",
    },
    "ms": {
        "welcome": "👋 Selamat datang ke *Soon Hoe Business Management*!\n\nSaya ialah pembantu AI anda untuk pertanyaan tentang imigresen, penubuhan syarikat, pendidikan, perkhidmatan profesional dan penyelesaian AI (GAIAGenX).\n\nBagaimana saya boleh membantu anda?",
        "main_menu": "Apakah yang anda perlukan bantuan?",
        "menu_btn_imm": "🌏 Imigresen & Kediaman",
        "menu_btn_biz": "🏢 Penubuhan Perniagaan",
        "menu_btn_svc": "📋 Perkhidmatan Profesional",
        "menu_btn_ai":  "🤖 Perkhidmatan AI (GAIAGenX)",
        "menu_btn_apt": "📅 Tempah Perundingan",
        "menu_btn_edu": "🎓 Pendidikan & Gaya Hidup",
        "ask_name": "Untuk membantu anda dengan lebih baik, boleh saya tahu nama anda? 😊",
        "ask_phone": "Terima kasih, {name}! Boleh kongsikan nombor telefon anda (dengan kod negara)?",
        "lead_saved": "✅ Terima kasih, {name}! Pasukan kami akan menghubungi anda di {phone} tidak lama lagi.\n\nE-mel: admin@soonhoe.com.sg | Web: www.soonhoe.com.sg",
        "consult_prompt": "Adakah anda ingin menempah perundingan dengan pasukan kami?",
        "btn_yes": "Ya, tempah!", "btn_no": "Mungkin kemudian",
        "btn_more": "Ketahui lebih lanjut", "back_menu": "Kembali ke Menu",
        "anything_else": "Ada lagi yang boleh saya bantu?",
        "timeout_reset": "Selamat kembali! Bagaimana saya boleh membantu anda?",
        "fallback": "Maaf, saya tidak faham. Sila cuba lagi atau taip *menu*.",
    },
    "ja": {
        "welcome": "👋 *Soon Hoe Business Management* へようこそ！\n\n私はAIアシスタントです。移民、会社設立、教育、専門サービス、AIソリューション（GAIAGenX）についてご質問にお答えします。\n\nどのようなご用件でしょうか？",
        "main_menu": "どのようなお手伝いが必要ですか？",
        "menu_btn_imm": "🌏 投資移民・居留権",
        "menu_btn_biz": "🏢 海外法人設立",
        "menu_btn_svc": "📋 専門サービス",
        "menu_btn_ai":  "🤖 AIサービス（GAIAGenX）",
        "menu_btn_apt": "📅 相談予約",
        "menu_btn_edu": "🎓 教育・ライフスタイル",
        "ask_name": "より良いサポートのため、お名前を教えていただけますか？😊",
        "ask_phone": "ありがとう、{name}さん！連絡先電話番号（国番号付き）を教えてください。",
        "lead_saved": "✅ ありがとう、{name}さん！担当者より {phone} にご連絡いたします。\n\nメール: admin@soonhoe.com.sg | Web: www.soonhoe.com.sg",
        "consult_prompt": "担当者との個別相談をご予約されますか？",
        "btn_yes": "はい、予約します", "btn_no": "後でまた",
        "btn_more": "詳しく知る", "back_menu": "メニューへ戻る",
        "anything_else": "他にご質問はありますか？",
        "timeout_reset": "お帰りなさい！どのようなご用件でしょうか？",
        "fallback": "申し訳ありません、理解できませんでした。*メニュー*と入力してオプションをご確認ください。",
    },
    "th": {
        "welcome": "👋 ยินดีต้อนรับสู่ *Soon Hoe Business Management*!\n\nฉันคือผู้ช่วย AI ของคุณสำหรับคำถามเกี่ยวกับการย้ายถิ่น การตั้งบริษัท การศึกษา บริการวิชาชีพ และโซลูชัน AI (GAIAGenX)\n\nฉันจะช่วยคุณได้อย่างไร?",
        "main_menu": "คุณต้องการความช่วยเหลือเรื่องอะไร?",
        "menu_btn_imm": "🌏 วีซ่านักลงทุน & ถิ่นที่อยู่",
        "menu_btn_biz": "🏢 จัดตั้งบริษัทต่างประเทศ",
        "menu_btn_svc": "📋 บริการวิชาชีพ",
        "menu_btn_ai":  "🤖 บริการ AI (GAIAGenX)",
        "menu_btn_apt": "📅 นัดปรึกษา",
        "menu_btn_edu": "🎓 การศึกษา & ไลฟ์สไตล์",
        "ask_name": "เพื่อให้บริการคุณได้ดียิ่งขึ้น ขอทราบชื่อของคุณได้ไหมคะ? 😊",
        "ask_phone": "ขอบคุณ {name}! ขอเบอร์โทรศัพท์ของคุณ (พร้อมรหัสประเทศ) ได้ไหม?",
        "lead_saved": "✅ ขอบคุณ {name}! ทีมงานจะติดต่อคุณที่ {phone} เร็วๆ นี้\n\nอีเมล: admin@soonhoe.com.sg | เว็บ: www.soonhoe.com.sg",
        "consult_prompt": "คุณต้องการนัดปรึกษากับทีมผู้เชี่ยวชาญของเราไหม?",
        "btn_yes": "ใช่ นัดเลย!", "btn_no": "ไว้ทีหลัง",
        "btn_more": "เรียนรู้เพิ่มเติม", "back_menu": "กลับเมนู",
        "anything_else": "มีอะไรอื่นที่ฉันช่วยได้ไหม?",
        "timeout_reset": "ยินดีต้อนรับกลับมา! ฉันจะช่วยคุณได้อย่างไร?",
        "fallback": "ขอโทษ ฉันไม่เข้าใจ กรุณาลองอีกครั้ง หรือพิมพ์ *เมนู*",
    },
    "vi": {
        "welcome": "👋 Chào mừng đến với *Soon Hoe Business Management*!\n\nTôi là trợ lý AI của bạn cho các câu hỏi về di trú, thành lập công ty, giáo dục, dịch vụ chuyên nghiệp và giải pháp AI (GAIAGenX).\n\nTôi có thể giúp gì cho bạn?",
        "main_menu": "Bạn cần hỗ trợ về vấn đề gì?",
        "menu_btn_imm": "🌏 Visa đầu tư & Cư trú",
        "menu_btn_biz": "🏢 Thành lập doanh nghiệp",
        "menu_btn_svc": "📋 Dịch vụ chuyên nghiệp",
        "menu_btn_ai":  "🤖 Dịch vụ AI (GAIAGenX)",
        "menu_btn_apt": "📅 Đặt lịch tư vấn",
        "menu_btn_edu": "🎓 Giáo dục & Lối sống",
        "ask_name": "Để hỗ trợ bạn tốt hơn, cho tôi biết tên của bạn nhé? 😊",
        "ask_phone": "Cảm ơn, {name}! Bạn có thể cho tôi số điện thoại (kèm mã quốc gia) không?",
        "lead_saved": "✅ Cảm ơn, {name}! Đội ngũ sẽ liên hệ bạn tại {phone} sớm nhất.\n\nEmail: admin@soonhoe.com.sg | Web: www.soonhoe.com.sg",
        "consult_prompt": "Bạn có muốn đặt lịch tư vấn với đội ngũ chuyên gia không?",
        "btn_yes": "Có, đặt lịch!", "btn_no": "Để sau",
        "btn_more": "Tìm hiểu thêm", "back_menu": "Quay lại Menu",
        "anything_else": "Còn điều gì tôi có thể giúp bạn không?",
        "timeout_reset": "Chào mừng trở lại! Tôi có thể giúp gì cho bạn?",
        "fallback": "Xin lỗi, tôi chưa hiểu ý bạn. Hãy thử lại hoặc gõ *menu*.",
    },
    "fil": {
        "welcome": "👋 Maligayang pagdating sa *Soon Hoe Business Management*!\n\nAko ang inyong AI assistant para sa mga katanungan tungkol sa immigration, pagsasangkot ng negosyo, edukasyon, propesyonal na serbisyo, at AI (GAIAGenX).\n\nPaano kita matutulungan?",
        "main_menu": "Ano ang kailangan mong tulong?",
        "menu_btn_imm": "🌏 Immigration & Tirahan",
        "menu_btn_biz": "🏢 Pagsasangkot ng Negosyo",
        "menu_btn_svc": "📋 Propesyonal na Serbisyo",
        "menu_btn_ai":  "🤖 Serbisyo ng AI (GAIAGenX)",
        "menu_btn_apt": "📅 Mag-book ng Konsultasyon",
        "menu_btn_edu": "🎓 Edukasyon & Pamumuhay",
        "ask_name": "Para mas matulungan kita, pwede mo bang ibahagi ang iyong pangalan? 😊",
        "ask_phone": "Salamat, {name}! Pwede mo bang ibahagi ang iyong numero (kasama ang country code)?",
        "lead_saved": "✅ Salamat, {name}! Makikipag-ugnayan sa inyo ang aming koponan sa {phone}.\n\nEmail: admin@soonhoe.com.sg | Web: www.soonhoe.com.sg",
        "consult_prompt": "Gusto mo bang mag-book ng konsultasyon sa aming koponan?",
        "btn_yes": "Oo, i-book!", "btn_no": "Mamaya na",
        "btn_more": "Alamin pa", "back_menu": "Bumalik sa Menu",
        "anything_else": "May iba pa bang maitutulong ako?",
        "timeout_reset": "Maligayang pagbabalik! Paano kita matutulungan?",
        "fallback": "Pasensya na, hindi ko naintindihan. Subukan muli o i-type ang *menu*.",
    },
}

def S(lang, key, **kwargs):
    """Get localised string"""
    s = STRINGS.get(lang, STRINGS["en"]).get(key, STRINGS["en"].get(key, ""))
    if kwargs: s = s.format(**kwargs)
    return s

def handle_message(incoming):
    wa_id    = incoming["wa_id"]
    msg_id   = incoming["msg_id"]
    text     = incoming["text"].strip()
    name     = incoming.get("name", "")

    # Mark as read
    wa.mark_read(msg_id)

    # Log inbound
    db.add_message(wa_id, "in", text)

    # Get current state
    conv = db.get_conv(wa_id)
    lang  = conv["lang"] if conv else "en"
    stage = conv["stage"] if conv else "new"
    sess  = db.get_session(wa_id)

    # Auto-detect language from first message if still en
    if stage == "new" or (lang == "en" and len(text) > 3):
        detected = ai.detect_language(text)
        if detected != "en":
            lang = detected
            db.set_lang(wa_id, lang)

    # Save name from WhatsApp profile if not yet stored
    if name and not sess.get("name"):
        sess["name"] = name
        db.set_session(wa_id, sess)

    # ── Keyword shortcuts ──────────────────────────────────
    text_lower = text.lower()
    if text_lower in ("menu", "菜单", "メニュー", "เมนู", "menu.", "hi", "hello", "helo", "start", "/start"):
        return _send_main_menu(wa_id, lang)

    # ── Stage machine ──────────────────────────────────────
    if stage == "new":
        db.upsert_conv(wa_id, stage="chatting", lang=lang)
        _send(wa_id, S(lang, "welcome"))
        return _send_main_menu(wa_id, lang)

    elif stage == "await_name":
        if len(text) >= 2:
            sess["name"] = text
            db.set_session(wa_id, sess)
            db.set_stage(wa_id, "await_phone")
            _send(wa_id, S(lang, "ask_phone", name=text))
            db.upsert_lead(wa_id, name=text, lang=lang, interest=sess.get("interest", "general"))
        else:
            _send(wa_id, S(lang, "ask_name"))

    elif stage == "await_phone":
        if len(text) >= 7:
            sess["phone"] = text
            n = sess.get("name", "")
            db.set_session(wa_id, sess)
            db.set_stage(wa_id, "chatting")
            db.upsert_lead(wa_id, phone=text, status="captured")
            _send(wa_id, S(lang, "lead_saved", name=n, phone=text))
            # Notify staff
            _notify_staff(wa_id, n, text, lang, sess.get("interest", ""))
        else:
            _send(wa_id, S(lang, "ask_phone", name=sess.get("name", "")))

    elif text.startswith("btn_"):
        _handle_button(wa_id, text, lang, sess)

    else:
        # AI conversation
        history = db.get_history(wa_id, limit=8)
        response = ai.get_ai_response(wa_id, text, history)
        if response:
            _send(wa_id, response)
            db.add_message(wa_id, "out", response)
            # After a few exchanges, offer lead capture
            msg_count = len(history)
            if msg_count >= 3 and not sess.get("lead_offered"):
                sess["lead_offered"] = True
                db.set_session(wa_id, sess)
                wa.send_buttons(wa_id, S(lang, "consult_prompt"), [
                    {"id": "btn_book_consult", "title": S(lang, "btn_yes")[:20]},
                    {"id": "btn_no_thanks",    "title": S(lang, "btn_no")[:20]},
                ])

def _handle_button(wa_id, btn_id, lang, sess):
    topic_map = {
        "btn_immigration":  ("immigration", "🌏"),
        "btn_business":     ("business",    "🏢"),
        "btn_services":     ("services",    "📋"),
        "btn_ai":           ("gaiagenx",    "🤖"),
        "btn_education":    ("education",   "🎓"),
    }
    if btn_id == "btn_book_consult":
        if sess.get("name"):
            db.set_stage(wa_id, "await_phone")
            _send(wa_id, S(lang, "ask_phone", name=sess["name"]))
        else:
            db.set_stage(wa_id, "await_name")
            _send(wa_id, S(lang, "ask_name"))

    elif btn_id == "btn_no_thanks":
        _send(wa_id, S(lang, "anything_else"))

    elif btn_id == "btn_capture_lead":
        db.set_stage(wa_id, "await_name")
        _send(wa_id, S(lang, "ask_name"))

    elif btn_id in topic_map:
        topic, emoji = topic_map[btn_id]
        sess["interest"] = topic
        db.set_session(wa_id, sess)
        db.set_stage(wa_id, "chatting")
        # Let AI handle the topic introduction
        history = db.get_history(wa_id, limit=4)
        prompt = f"The customer has selected: {topic}. Give a helpful overview of Soon Hoe services in this area and ask what specific help they need. Be concise and WhatsApp-friendly."
        response = ai.get_ai_response(wa_id, prompt, history)
        if response:
            _send(wa_id, response)
            db.add_message(wa_id, "out", response)
    else:
        _send_main_menu(wa_id, lang)

def _send_main_menu(wa_id, lang):
    db.set_stage(wa_id, "chatting")
    # WhatsApp interactive list
    wa.send_list(
        wa_id,
        S(lang, "main_menu"),
        "📋 Menu" if lang == "en" else "📋 选项" if lang == "zh" else "📋 Options",
        [{"title": "🌟 Our Services", "rows": [
            {"id": "btn_immigration", "title": S(lang, "menu_btn_imm")[:24], "description": "Singapore PR, GIP, MM2H, Family Office"},
            {"id": "btn_business",   "title": S(lang, "menu_btn_biz")[:24], "description": "Company setup, EP/DP, HR, Legal"},
            {"id": "btn_services",   "title": S(lang, "menu_btn_svc")[:24], "description": "Accounting, Audit, Tax, Secretarial"},
            {"id": "btn_ai",         "title": S(lang, "menu_btn_ai")[:24],  "description": "AI Agents, Automation, Analytics"},
            {"id": "btn_education",  "title": S(lang, "menu_btn_edu")[:24], "description": "Study abroad, Real estate, Concierge"},
            {"id": "btn_book_consult","title": S(lang, "menu_btn_apt")[:24],"description": "Talk to our expert team"},
        ]}]
    )

def _send(wa_id, text):
    wa.send_text(wa_id, text)
    db.add_message(wa_id, "out", text)

def _notify_staff(wa_id, name, phone, lang, interest):
    """Send lead alert to staff WhatsApp"""
    from app.config import config
    if not config.NOTIFY_WHATSAPP:
        return
    msg = (f"🔔 *New Lead Captured*\n\n"
           f"👤 Name: {name}\n"
           f"📱 Phone: {phone}\n"
           f"💬 WA ID: {wa_id}\n"
           f"🌐 Language: {lang}\n"
           f"📌 Interest: {interest}\n"
           f"⏰ Time: {__import__('datetime').datetime.utcnow().strftime('%Y-%m-%d %H:%M UTC')}")
    wa.send_text(config.NOTIFY_WHATSAPP, msg)

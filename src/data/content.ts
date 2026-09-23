import historyImg from "@/assets/history-dynasties.jpg";
import mathImg from "@/assets/math-zero.jpg";
import astroImg from "@/assets/astronomy.jpg";
import ayurvedaImg from "@/assets/ayurveda.jpg";
import archImg from "@/assets/architecture.jpg";
import philoImg from "@/assets/philosophy.jpg";
import spicesImg from "@/assets/spices.jpg";
import musicImg from "@/assets/music-dance.jpg";
import chessImg from "@/assets/chess-games.jpg";
import textilesImg from "@/assets/textiles.jpg";
import irrigationImg from "@/assets/irrigation.jpg";
import nalandaImg from "@/assets/nalanda.jpg";
import geoSoilImg from "@/assets/geo-soil.jpg";
import geoPeopleImg from "@/assets/geo-people.jpg";
import geoLocationImg from "@/assets/geo-location.jpg";
import geoClimateImg from "@/assets/geo-climate.jpg";
import relOverviewImg from "@/assets/rel-overview.jpg";
import relBrahmanismImg from "@/assets/rel-brahmanism.jpg";
import relHinduImg from "@/assets/rel-hindu.jpg";
import relBuddhismImg from "@/assets/rel-buddhism.jpg";
import relAbrahamicImg from "@/assets/rel-abrahamic.jpg";

export type Category =
  | "Địa lý"
  | "Tôn giáo"
  | "Lịch sử"
  | "Khoa học & Y học"
  | "Văn hóa & Nghệ thuật"
  | "Ẩm thực & Đời sống";

export type Achievement = {
  id: string;
  title: string;
  category: Category;
  /** Nhãn ngắn hiển thị trên thẻ */
  label: string;
  era: string;
  summary: string;
  image: string;
  context: string[];
  facts: { label: string; value: string }[];
  takeaways: string[];
  keywords: string[];
};

export const categories = [
  "Tất cả",
  "Địa lý",
  "Tôn giáo",
  "Lịch sử",
  "Khoa học & Y học",
  "Văn hóa & Nghệ thuật",
  "Ẩm thực & Đời sống",
] as const;

export const achievements: Achievement[] = [
  {
    id: "trieu-dai",
    title: "Lịch Sử & Các Triều Đại",
    category: "Lịch sử",
    label: "Lịch sử",
    era: "2600 TCN – 550 SCN",
    summary:
      "Quy hoạch đô thị sông Ấn, triều đại Maurya của Đại đế Ashoka và thời hoàng kim Gupta.",
    image: historyImg,
    context: [
      "Văn minh lưu vực sông Ấn (Indus Valley, khoảng 2600–1900 TCN) với Harappa và Mohenjo-daro là một trong ba nền văn minh sông lớn đầu tiên của nhân loại. Các thành phố được quy hoạch theo lưới, có hệ thống cấp – thoát nước, nhà tắm công cộng và kho lúa, cùng hệ thống cân đo thống nhất phục vụ thương mại đường dài tới Lưỡng Hà.",
      "Đế chế Maurya (khoảng 322–185 TCN) do Chandragupta Maurya sáng lập, đạt cực thịnh dưới thời vua Ashoka. Sau cuộc chiến Kalinga, Ashoka chuyển sang chính sách 'Dhamma' – trị nước bằng đạo đức, khắc chiếu chỉ lên các trụ đá và vách núi khắp tiểu lục địa, đồng thời truyền bá Phật giáo ra ngoài biên giới.",
      "Đế chế Gupta (khoảng 320–550 SCN) được xem là 'Thời kỳ Hoàng Kim' của Ấn Độ: toán học, thiên văn, văn học Sanskrit, điêu khắc và đại học Nalanda cùng phát triển rực rỡ.",
    ],
    facts: [
      { label: "Đô thị tiêu biểu", value: "Harappa, Mohenjo-daro, Dholavira" },
      { label: "Vị vua biểu tượng", value: "Ashoka Đại đế (268–232 TCN)" },
      { label: "Di sản quốc gia", value: "Đầu trụ Sarnath – quốc huy Ấn Độ ngày nay" },
      { label: "Trung tâm học thuật", value: "Đại học Nalanda, Taxila" },
    ],
    takeaways: [
      "Quy hoạch đô thị và vệ sinh công cộng của Indus đi trước thời đại hàng nghìn năm.",
      "Ashoka là ví dụ sớm nhất về mô hình nhà nước lấy phúc lợi và bất bạo động làm gốc.",
      "Thời Gupta chứng minh ổn định chính trị là bệ phóng cho bùng nổ khoa học – nghệ thuật.",
    ],
    keywords: ["indus", "harappa", "maurya", "ashoka", "gupta", "triều đại", "đế chế"],
  },
  {
    id: "so-khong",
    title: "Phát Minh Toán Học & Số 0",
    category: "Khoa học & Y học",
    label: "Khoa học",
    era: "Thế kỷ 5 – 12",
    summary:
      "Khái niệm số 0, hệ thập phân theo vị trí và những đóng góp vĩ đại của Aryabhata, Brahmagupta.",
    image: mathImg,
    context: [
      "Ấn Độ cổ đại đã phát triển hệ đếm thập phân theo vị trí, trong đó số 0 (sunya) vừa là chữ số vừa là một khái niệm toán học độc lập. Aryabhata (476–550) dùng hệ này trong tác phẩm 'Aryabhatiya', tính giá trị π ≈ 3,1416 và lập bảng sin đầu tiên.",
      "Brahmagupta (598–668) là người đầu tiên đưa ra các quy tắc số học cho số 0 và số âm trong 'Brahmasphutasiddhanta', mở đường cho đại số hiện đại. Bhaskara II (thế kỷ 12) nghiên cứu phương trình bất định, đạo hàm sơ khai và chuyển động vi phân.",
      "Qua các học giả Ả Rập như Al-Khwarizmi, hệ số Ấn Độ truyền vào châu Âu dưới tên 'chữ số Hindu–Arabic', trở thành nền tảng của toàn bộ toán học và khoa học máy tính hiện đại.",
    ],
    facts: [
      { label: "Người hệ thống hóa", value: "Aryabhata, Brahmagupta, Bhaskara II" },
      { label: "Giá trị π cổ", value: "3,1416 (Aryabhata, thế kỷ 5)" },
      { label: "Bản khắc số 0 sớm", value: "Đền Chaturbhuj, Gwalior – năm 876" },
      { label: "Đóng góp khác", value: "Lượng giác, dãy số, chuỗi vô hạn (trường phái Kerala)" },
    ],
    takeaways: [
      "Không có số 0 và hệ thập phân, đại số cùng máy tính nhị phân sẽ không thể ra đời.",
      "Trường phái Kerala đã tiếp cận chuỗi vô hạn trước giải tích châu Âu vài trăm năm.",
    ],
    keywords: ["số 0", "toán học", "aryabhata", "brahmagupta", "thập phân", "khoa học"],
  },
  {
    id: "thien-van",
    title: "Thiên Văn Học Cổ Đại",
    category: "Khoa học & Y học",
    label: "Khoa học",
    era: "Thế kỷ 5 – 18",
    summary:
      "Mô hình Trái Đất tự quay, nguyên nhân nhật – nguyệt thực và quần thể đài quan sát Jantar Mantar.",
    image: astroImg,
    context: [
      "Từ thế kỷ 5, Aryabhata khẳng định Trái Đất tự quay quanh trục và chính chuyển động này tạo ra cảm giác các ngôi sao di chuyển. Ông cũng giải thích nhật thực – nguyệt thực bằng bóng của Trái Đất và Mặt Trăng, thay vì các cách giải thích thần thoại.",
      "Ông tính độ dài năm thiên văn là 365,258 ngày – sai lệch chỉ vài phút so với số đo hiện đại. Varahamihira, Brahmagupta và Bhaskara tiếp tục hoàn thiện các mô hình chuyển động hành tinh và bảng lịch.",
      "Đến thế kỷ 18, Maharaja Jai Singh II xây các đài quan sát Jantar Mantar (Jaipur, Delhi, Ujjain) với những dụng cụ đá khổng lồ như Samrat Yantra – đồng hồ mặt trời chính xác tới vài giây.",
    ],
    facts: [
      { label: "Độ dài năm", value: "365,258 ngày (Aryabhata)" },
      { label: "Luận điểm nền tảng", value: "Trái Đất tự quay quanh trục" },
      { label: "Đài quan sát", value: "Jantar Mantar – Di sản UNESCO" },
      { label: "Tác phẩm", value: "Aryabhatiya, Surya Siddhanta" },
    ],
    takeaways: [
      "Thiên văn Ấn Độ dựa trên quan sát và tính toán, tách khỏi giải thích siêu nhiên rất sớm.",
      "Kiến trúc cũng có thể là dụng cụ khoa học: Jantar Mantar là 'máy đo' bằng đá.",
    ],
    keywords: ["thiên văn", "nhật thực", "jantar mantar", "aryabhata", "khoa học", "lịch"],
  },
  {
    id: "ayurveda",
    title: "Y Học Ayurveda & Phẫu Thuật",
    category: "Khoa học & Y học",
    label: "Khoa học",
    era: "1500 TCN – nay",
    summary:
      "Y học cổ truyền Ayurveda, Sushruta Samhita và những ca phẫu thuật tạo hình đầu tiên trên thế giới.",
    image: ayurvedaImg,
    context: [
      "Ayurveda ('khoa học về sự sống') là hệ thống y học có tổ chức lâu đời nhất còn được thực hành, dựa trên cân bằng ba yếu tố vata – pitta – kapha, dinh dưỡng, thảo dược và lối sống.",
      "'Sushruta Samhita' mô tả hơn 300 thủ thuật phẫu thuật và 120 dụng cụ, gồm phẫu thuật tạo hình mũi (rhinoplasty), mổ lấy sỏi, khâu vết thương, mổ lấy thai và cả gây mê bằng dược liệu. Vì vậy Sushruta được gọi là 'cha đẻ của phẫu thuật'.",
      "'Charaka Samhita' đặt nền cho nội khoa, chẩn đoán, đạo đức nghề y và cả nguyên tắc thử nghiệm thuốc – gần với y đức hiện đại một cách đáng kinh ngạc.",
    ],
    facts: [
      { label: "Số thủ thuật ghi chép", value: "Hơn 300" },
      { label: "Dụng cụ mô tả", value: "Khoảng 120 loại" },
      { label: "Kỹ thuật nổi tiếng", value: "Tạo hình mũi bằng vạt da trán" },
      { label: "Kinh điển", value: "Sushruta Samhita, Charaka Samhita" },
    ],
    takeaways: [
      "Phẫu thuật tạo hình hiện đại vẫn dùng nguyên lý vạt da do Sushruta mô tả.",
      "Ayurveda tiếp cận sức khỏe toàn diện: phòng bệnh quan trọng ngang chữa bệnh.",
    ],
    keywords: ["ayurveda", "y học", "sushruta", "phẫu thuật", "charaka", "khoa học"],
  },
  {
    id: "kien-truc",
    title: "Kiến Trúc & Kim Loại Học",
    category: "Văn hóa & Nghệ thuật",
    label: "Văn hóa",
    era: "Thế kỷ 4 – 17",
    summary:
      "Cột sắt Delhi không gỉ qua hàng ngàn năm, đền đá monolith Kailasa và kiệt tác Taj Mahal.",
    image: archImg,
    context: [
      "Trụ sắt Delhi (thế kỷ 4–5, thời Gupta) cao hơn 7 m, nặng khoảng 6 tấn, gần như không bị gỉ sau 1.600 năm nhờ hàm lượng phốt pho cao tạo lớp màng bảo vệ – một kỳ tích luyện kim cổ đại.",
      "Đền Kailasa ở Ellora (thế kỷ 8, triều Rashtrakuta) được tạc từ trên xuống trong một khối đá bazan nguyên khối, bóc đi khoảng 200.000 tấn đá mà không thể sửa sai.",
      "Taj Mahal (1632–1653) do hoàng đế Shah Jahan xây cho Mumtaz Mahal, kết hợp kiến trúc Ba Tư – Islam – Ấn Độ với đá cẩm thạch trắng, kỹ thuật khảm pietra dura và bố cục đối xứng hoàn hảo.",
    ],
    facts: [
      { label: "Trụ sắt Delhi", value: "~1.600 năm không gỉ" },
      { label: "Đền Kailasa", value: "Tạc từ một khối đá duy nhất" },
      { label: "Taj Mahal", value: "21 năm, khoảng 20.000 nghệ nhân" },
      { label: "Khác", value: "Đền Brihadeeswarar (Chola), Konark, Hampi" },
    ],
    takeaways: [
      "Nghệ nhân Ấn Độ nắm vững hóa học vật liệu từ rất sớm.",
      "Kiến trúc di sản Ấn Độ là sự hòa trộn nhiều nền văn hóa qua nhiều thế kỷ.",
    ],
    keywords: ["kiến trúc", "trụ sắt", "kailasa", "taj mahal", "đền", "di sản", "văn hóa"],
  },
  {
    id: "triet-hoc",
    title: "Văn Hóa, Ngôn Ngữ, Triết Học & Sử Thi",
    category: "Văn hóa & Nghệ thuật",
    label: "Văn hóa",
    era: "1500 TCN – nay",
    summary:
      "Tiếng Phạn (Sanskrit) cổ đại, các hệ ngôn ngữ Ấn Độ, kinh Vệ Đà, triết lý Yoga Sutra cùng hai đại sử thi Mahabharata và Ramayana.",
    image: philoImg,
    context: [
      "Tiếng Phạn (Sanskrit) là một trong những ngôn ngữ văn học cổ nhất còn được ghi chép, thuộc nhánh Ấn – Iran của ngữ hệ Ấn – Âu (Indo-European). Chính việc so sánh Sanskrit với tiếng Hy Lạp và Latin vào thế kỷ 18 đã khai sinh ngành ngôn ngữ học so sánh: phần lớn ngôn ngữ châu Âu và Bắc Ấn được chứng minh có cùng gốc tổ tiên.",
      "Nhà ngữ pháp Panini (khoảng thế kỷ 5 – 4 TCN) viết 'Ashtadhyayi' gồm gần 4.000 quy tắc – bộ ngữ pháp hình thức đầu tiên của nhân loại, được xem là tiền thân của tư duy mô tả hình thức trong khoa học máy tính. Từ Sanskrit và Prakrit phát triển các ngôn ngữ Bắc Ấn ngày nay: Hindi, Bengali, Marathi, Gujarati, Punjabi.",
      "Miền Nam Ấn Độ thuộc ngữ hệ Dravidian hoàn toàn riêng biệt với Tamil, Telugu, Kannada, Malayalam – trong đó Tamil có truyền thống văn học liên tục hơn hai nghìn năm. Hệ chữ viết cổ Brahmi là gốc của Devanagari, Tamil, Bengali, Thái, Lào, Khmer và Tây Tạng; Ấn Độ hiện có 22 ngôn ngữ chính thức.",
      "Kinh Vedas (Rig, Yajur, Sama, Atharva) là những văn bản tôn giáo – triết học lâu đời nhất được truyền khẩu chính xác qua hàng nghìn năm. Upanishads đặt ra các câu hỏi nền tảng về Brahman (thực tại tối hậu) và Atman (bản ngã).",
      "Sáu trường phái triết học chính thống (Nyaya, Vaisheshika, Samkhya, Yoga, Mimamsa, Vedanta) cùng Phật giáo và Jain giáo tạo nên một truyền thống tranh luận logic phong phú. 'Yoga Sutra' của Patanjali hệ thống hóa tám nhánh yoga.",
      "Mahabharata (khoảng 100.000 câu thơ đôi, dài nhất thế giới) chứa Bhagavad Gita; Ramayana kể chuyện Rama và Sita, lan tỏa khắp châu Á – trong đó có Việt Nam qua ảnh hưởng Champa.",
    ],
    facts: [
      { label: "Ngôn ngữ cổ", value: "Sanskrit – nhánh Ấn – Âu, ngôn ngữ kinh điển" },
      { label: "Ngữ pháp đầu tiên", value: "Ashtadhyayi của Panini – gần 4.000 quy tắc" },
      { label: "Hai ngữ hệ lớn", value: "Ấn – Arya (Bắc) và Dravidian (Nam)" },
      { label: "Chữ viết", value: "Brahmi → Devanagari, Tamil, Bengali..." },
      { label: "Mahabharata", value: "~100.000 shloka – sử thi dài nhất thế giới" },
      { label: "Yoga Sutra", value: "8 nhánh yoga của Patanjali" },
      { label: "Ngày Yoga Quốc tế", value: "21/6, do Liên Hợp Quốc công nhận" },
      { label: "Bất bạo động", value: "Ahimsa – cảm hứng cho Gandhi, Martin Luther King" },
    ],
    takeaways: [
      "Sanskrit là chìa khóa giúp khoa học nhận ra mối họ hàng của các ngôn ngữ Ấn – Âu.",
      "Ngữ pháp Panini là ví dụ sớm nhất về hệ quy tắc hình thức chặt chẽ.",
      "Yoga và thiền định đã trở thành di sản sức khỏe toàn cầu.",
      "Truyền thống tranh luận Ấn Độ là nền tảng sớm của logic hình thức.",
    ],
    keywords: [
      "triết học",
      "yoga",
      "vedas",
      "mahabharata",
      "ramayana",
      "văn hóa",
      "ngôn ngữ",
      "tiếng phạn",
      "sanskrit",
      "panini",
      "dravidian",
      "chữ viết",
      "brahmi",
      "devanagari",
      "tamil",
      "hindi",
    ],
  },
  {
    id: "gia-vi",
    title: "Cà Ri & Nghệ Thuật Gia Vị",
    category: "Ẩm thực & Đời sống",
    label: "Ẩm thực",
    era: "2500 TCN – nay",
    summary:
      "Cà ri - biểu tượng ẩm thực toàn cầu với nghệ thuật phối trộn gia vị Garam Masala, triết lý 6 vị Ayurveda, trà Masala Chai và lò nướng Tandoori.",
    image: spicesImg,
    context: [
      "Dấu tích của hỗn hợp gia vị cà ri – gồm gừng, nghệ và tỏi – đã được tìm thấy trên nồi gốm và cối đá tại các đô thị của văn minh lưu vực sông Ấn từ khoảng năm 2500 TCN, được xem là công thức cà ri cổ nhất thế giới.",
      "Chính nhu cầu về hồ tiêu, quế và bạch đậu khấu của Ấn Độ đã thúc đẩy các tuyến hải thương La Mã – Ả Rập, rồi các cuộc hải hành châu Âu thời Đại Phát kiến. Từ đó, cà ri lan ra khắp thế giới với vô số biến thể.",
      "Ẩm thực Ấn Độ gắn với triết lý 'shadrasa' – sáu vị (ngọt, chua, mặn, đắng, cay, chát) của Ayurveda: một bữa ăn cân bằng phải có đủ sáu vị. Lò đất nung tandoor đã xuất hiện từ Harappa, sau được ẩm thực Mughlai nâng thành nghệ thuật cùng bánh naan và trà masala chai.",
    ],
    facts: [
      { label: "Dấu tích cổ nhất", value: "Gừng, nghệ, tỏi – sông Ấn, 2500 TCN" },
      { label: "Nghệ thuật phối trộn", value: "Garam Masala – rang và giã nhiều lớp gia vị" },
      { label: "Cà ri Nam Ấn", value: "Nước cốt dừa, lá cà ri, me chua" },
      { label: "Cà ri Bắc Ấn (Mughlai)", value: "Bơ ghee, sữa chua, kem và hạt điều" },
      { label: "Triết lý bữa ăn", value: "Shadrasa – sáu vị Ayurveda" },
      { label: "Kỹ thuật & thức uống", value: "Lò tandoor, trà masala chai" },
    ],
    takeaways: [
      "Cà ri không phải một món duy nhất mà là cả một nghệ thuật phối trộn gia vị theo vùng miền.",
      "Con đường gia vị Ấn Độ đã định hình thương mại và lịch sử hàng hải thế giới.",
      "Ẩm thực Ấn Độ là y học thực hành: gia vị vừa là hương vị vừa là dược liệu.",
    ],
    keywords: [
      "cà ri",
      "cari",
      "curry",
      "gia vị",
      "masala",
      "garam masala",
      "masala chai",
      "tandoori",
      "ẩm thực",
      "đời sống",
      "shadrasa",
      "mughlai",
    ],
  },

  {
    id: "am-nhac",
    title: "Âm Nhạc & Vũ Đạo Cổ Điển",
    category: "Văn hóa & Nghệ thuật",
    label: "Nghệ thuật",
    era: "Thế kỷ 2 TCN – nay",
    summary:
      "Vũ đạo Bharatanatyam, giai điệu Raga, nhạc cụ Sitar và nghệ thuật bích họa hang động Ajanta.",
    image: musicImg,
    context: [
      "'Natya Shastra' (khoảng thế kỷ 2 TCN – 2 SCN) của Bharata là bộ lý luận sân khấu – múa – nhạc cổ nhất thế giới, quy định các thế tay mudra, biểu cảm rasa và nhịp điệu tala vẫn được dùng đến hôm nay.",
      "Hệ thống raga (khung giai điệu gắn với thời điểm, cảm xúc) và tala (chu kỳ nhịp) tạo nên nền nhạc cổ điển Hindustani và Carnatic, biểu diễn bằng sitar, sarod, veena, tabla, mridangam.",
      "Sáu trường phái vũ đạo cổ điển – Bharatanatyam, Kathak, Odissi, Kathakali, Kuchipudi, Manipuri – kể lại thần thoại bằng động tác. Bích họa Ajanta (thế kỷ 2 TCN – 6 SCN) lưu giữ hình ảnh sống động về nhạc công, vũ nữ và đời sống cung đình.",
    ],
    facts: [
      { label: "Kinh điển", value: "Natya Shastra của Bharata" },
      { label: "Nhạc cụ tiêu biểu", value: "Sitar, veena, tabla, mridangam" },
      { label: "Vũ đạo cổ điển", value: "Bharatanatyam, Kathak, Odissi..." },
      { label: "Di sản hội họa", value: "Hang Ajanta – Di sản UNESCO" },
    ],
    takeaways: [
      "Raga và tala là hệ thống ứng tác tinh vi bậc nhất trong âm nhạc thế giới.",
      "Múa cổ điển Ấn Độ là hình thức kể chuyện lịch sử bằng cơ thể.",
    ],
    keywords: ["âm nhạc", "raga", "sitar", "bharatanatyam", "ajanta", "nghệ thuật", "múa"],
  },
  {
    id: "co-vua",
    title: "Cờ Vua & Trò Chơi Trí Tuệ",
    category: "Ẩm thực & Đời sống",
    label: "Đời sống",
    era: "Thế kỷ 6 – nay",
    summary:
      "Nguồn gốc cờ vua (Chaturanga), cờ Rắn và Thang (Moksha Patam) mang triết lý nhân quả.",
    image: chessImg,
    context: [
      "Chaturanga – 'bốn binh chủng' (bộ binh, kỵ binh, tượng, chiến xa) – xuất hiện ở Ấn Độ khoảng thế kỷ 6, là tổ tiên trực tiếp của cờ vua. Qua Ba Tư (shatranj) và thế giới Ả Rập, trò chơi này du nhập châu Âu và tiến hóa thành cờ vua hiện đại.",
      "Moksha Patam (Rắn và Thang) là trò chơi giáo dục đạo đức: thang tượng trưng cho đức hạnh giúp thăng tiến, rắn là dục vọng khiến tụt lùi – một cách dạy luật nhân quả (karma) cho trẻ em.",
      "Ấn Độ cũng là quê hương của Pachisi (tiền thân Ludo) và nhiều bài toán trí tuệ như bài toán hạt lúa trên bàn cờ, minh họa lũy thừa và dãy số theo cách trực quan.",
    ],
    facts: [
      { label: "Tên gốc cờ vua", value: "Chaturanga (thế kỷ 6)" },
      { label: "Bốn binh chủng", value: "Bộ binh, kỵ binh, tượng, chiến xa" },
      { label: "Trò chơi đạo đức", value: "Moksha Patam – Rắn và Thang" },
      { label: "Lan tỏa", value: "Ấn Độ → Ba Tư → Ả Rập → châu Âu" },
    ],
    takeaways: [
      "Cờ vua – môn thể thao trí tuệ toàn cầu – khởi nguồn từ Ấn Độ cổ đại.",
      "Trò chơi Ấn Độ luôn gắn với bài học triết lý, không chỉ để giải trí.",
    ],
    keywords: ["cờ vua", "chaturanga", "rắn và thang", "trò chơi", "đời sống", "ludo"],
  },
  {
    id: "det-may",
    title: "Dệt May & Con Đường Tơ Lụa",
    category: "Ẩm thực & Đời sống",
    label: "Đời sống",
    era: "2500 TCN – nay",
    summary:
      "Kỹ thuật trồng bông & dệt vải sợi đầu tiên, nghệ thuật nhuộm chàm (Indigo) và trang phục Saree.",
    image: textilesImg,
    context: [
      "Người Ấn Độ là những người đầu tiên trồng bông và dệt vải bông – mảnh vải bông nhuộm cổ nhất được tìm thấy ở Mohenjo-daro, khoảng 2500 TCN. Từ 'indigo' và 'calico', 'chintz', 'cashmere' trong tiếng Anh đều gắn với thương mại vải Ấn Độ.",
      "Nghệ thuật nhuộm chàm, in khuôn gỗ, buộc nhuộm bandhani và dệt muslin Dhaka mỏng như sương mù từng là hàng xa xỉ được săn đón ở La Mã, Ba Tư và châu Âu qua Con đường Tơ lụa và hải trình gia vị.",
      "Saree – tấm vải liền không cắt may dài 5–9 m – cùng lụa Banarasi, lụa Kanchipuram tiếp tục là biểu tượng thời trang di sản. Phong trào khadi (vải dệt tay) của Gandhi biến dệt may thành biểu tượng của độc lập dân tộc.",
    ],
    facts: [
      { label: "Vải bông cổ nhất", value: "Mohenjo-daro, ~2500 TCN" },
      { label: "Kỹ thuật nhuộm", value: "Chàm indigo, bandhani, in khuôn gỗ" },
      { label: "Hàng xa xỉ", value: "Muslin Dhaka, lụa Banarasi" },
      { label: "Biểu tượng hiện đại", value: "Khadi – vải dệt tay của Gandhi" },
    ],
    takeaways: [
      "Ấn Độ là trung tâm dệt may hàng đầu thế giới trong gần bốn nghìn năm.",
      "Một tấm vải có thể trở thành tuyên ngôn chính trị: khadi và phong trào độc lập.",
    ],
    keywords: ["dệt may", "bông", "indigo", "saree", "tơ lụa", "khadi", "đời sống"],
  },
  {
    id: "thuy-loi",
    title: "Thủy Lợi & Nông Nghiệp Cổ Đại",
    category: "Khoa học & Y học",
    label: "Khoa học",
    era: "Thế kỷ 1 TCN – nay",
    summary:
      "Hệ thống dẫn nước công cộng sông Ấn, đập nước Kallanai cổ nhất thế giới và kỹ thuật canh tác lúa.",
    image: irrigationImg,
    context: [
      "Từ thời Indus, các thành phố đã có giếng công cộng, bể chứa lớn (Dholavira) và đường dẫn nước xây bằng gạch nung – hệ thống quản lý nước đô thị sớm nhất được biết đến.",
      "Đập Kallanai (Grand Anicut) trên sông Kaveri do vua Chola Karikala xây khoảng thế kỷ 2, dài hơn 300 m bằng đá không vữa, vẫn đang dẫn nước tưới cho đồng bằng Tamil Nadu – công trình thủy lợi cổ còn hoạt động lâu đời nhất thế giới.",
      "Giếng bậc thang (stepwell) như Rani ki Vav, Chand Baori giúp trữ nước qua mùa khô. Nông học cổ Ấn Độ ghi chép luân canh, ủ phân, chọn giống lúa và mía – Ấn Độ cũng là nơi đầu tiên tinh luyện mía thành đường.",
    ],
    facts: [
      { label: "Đập cổ nhất còn dùng", value: "Kallanai – thế kỷ 2, sông Kaveri" },
      { label: "Bể chứa cổ", value: "Dholavira, Mohenjo-daro" },
      { label: "Giếng bậc thang", value: "Rani ki Vav, Chand Baori" },
      { label: "Cây trồng khởi nguồn", value: "Mía, lúa, bông, gia vị" },
    ],
    takeaways: [
      "Quản lý nước là nền tảng giúp các đô thị và triều đại Ấn Độ tồn tại lâu dài.",
      "Kỹ thuật thủy lợi cổ vẫn đang phục vụ nông nghiệp hiện đại.",
    ],
    keywords: ["thủy lợi", "kallanai", "nông nghiệp", "giếng bậc thang", "lúa", "khoa học"],
  },
  {
    id: "nalanda",
    title: "Giáo Dục & Đại Học Nalanda",
    category: "Văn hóa & Nghệ thuật",
    label: "Văn hóa",
    era: "Thế kỷ 3 TCN – nay",
    summary:
      "Nalanda – Đại học quốc tế đầu tiên trên thế giới, trung tâm lưu trữ hàng triệu bản thảo tri thức cổ.",
    image: nalandaImg,
    context: [
      "Taxila (thế kỷ 5 TCN) và Nalanda (thành lập thế kỷ 5 SCN dưới triều Gupta) là những trung tâm học thuật quốc tế đầu tiên: sinh viên từ Trung Quốc, Tây Tạng, Hàn Quốc, Ba Tư và Đông Nam Á đến học logic, y học, thiên văn, ngữ pháp và triết học.",
      "Nalanda có tới khoảng 10.000 sinh viên và 2.000 giảng viên, ký túc xá, giảng đường và thư viện 'Dharmaganja' gồm ba toà nhà nhiều tầng lưu trữ hàng trăm nghìn bản thảo lá bối. Nhà sư Huyền Trang từng học và ghi chép tỉ mỉ về nơi này.",
      "Truyền thống học tập Ấn Độ dựa trên tranh luận (shastrartha) và truyền khẩu chính xác. Nalanda bị phá hủy cuối thế kỷ 12; ngày nay là Di sản UNESCO và đã được tái lập thành Đại học Nalanda hiện đại.",
    ],
    facts: [
      { label: "Thành lập", value: "Thế kỷ 5 SCN, triều Gupta" },
      { label: "Quy mô", value: "~10.000 sinh viên, 2.000 giảng viên" },
      { label: "Thư viện", value: "Dharmaganja – hàng trăm nghìn bản thảo" },
      { label: "Nhân vật nổi tiếng", value: "Huyền Trang, Nagarjuna, Aryabhata" },
    ],
    takeaways: [
      "Nalanda là mô hình đại học trú xá quốc tế đầu tiên của nhân loại.",
      "Tri thức Ấn Độ cổ được bảo tồn nhờ hệ thống tranh luận và truyền khẩu kỷ luật.",
    ],
    keywords: ["nalanda", "taxila", "giáo dục", "đại học", "huyền trang", "văn hóa"],
  },
];

export type TimelineEvent = {
  period: string;
  title: string;
  /** Nhãn chủ đề hiển thị trên mốc thời gian */
  tag: string;
  category: Category;
  description: string;
  highlights: string[];
  context: string[];
  facts: { label: string; value: string }[];
};

export const timeline: TimelineEvent[] = [
  {
    period: "2600 – 1900 TCN",
    title: "Văn minh lưu vực sông Ấn (Indus Valley)",
    tag: "Lịch sử & Khoa học",
    category: "Lịch sử",
    description:
      "Đô thị Harappa & Mohenjo-Daro, hệ thống thoát nước phức tạp, quy hoạch ô bàn cờ và kỹ thuật dệt sợi bông cổ nhất.",
    highlights: ["Đô thị gạch nung", "Dệt vải sợi", "Thủy lợi cổ đại", "Chữ viết Indus"],
    context: [
      "Trải trên hơn một triệu km², văn minh sông Ấn là nền văn minh có diện tích lớn nhất thời Đồ Đồng. Harappa, Mohenjo-daro và Dholavira được quy hoạch theo lưới ô bàn cờ với đường trục rộng, nhà gạch nung tiêu chuẩn và cống thoát nước có nắp dọc mọi con phố.",
      "Người Indus thống nhất hệ cân đo bằng quả cân đá chính xác, đúc con dấu khắc hình và chữ viết đến nay chưa giải mã. Họ buôn bán bằng đường biển tới Lưỡng Hà, Oman và Iran.",
      "Đây cũng là nơi tìm thấy mảnh vải bông nhuộm cổ nhất thế giới, cùng bể nước lớn (Great Bath) và các hồ trữ nước nhân tạo – bằng chứng về kỹ thuật thủy lợi và đời sống đô thị tinh vi.",
    ],
    facts: [
      { label: "Đô thị chính", value: "Harappa, Mohenjo-daro, Dholavira" },
      { label: "Dấu ấn kỹ thuật", value: "Cống thoát nước có nắp, gạch nung chuẩn hóa" },
      { label: "Thương mại", value: "Đường biển tới Lưỡng Hà" },
      { label: "Bí ẩn", value: "Chữ viết Indus chưa được giải mã" },
    ],
  },
  {
    period: "1500 – 500 TCN",
    title: "Thời kỳ Vệ Đà & Sử Thi Cổ Đại",
    tag: "Văn hóa & Trí tuệ",
    category: "Văn hóa & Nghệ thuật",
    description:
      "Sự hình thành kinh Vệ Đà, khởi nguồn y học Ayurveda, triết lý Yoga, các môn thể thao trí tuệ sơ khai và hai đại sử thi.",
    highlights: ["Kinh Vệ Đà", "Khởi nguồn Ayurveda", "Triết học Yoga", "Mahabharata & Ramayana"],
    context: [
      "Bốn bộ Vedas được sáng tác và truyền khẩu bằng tiếng Sanskrit với hệ thống ghi nhớ chính xác đến từng âm tiết. Upanishads sau đó chuyển trọng tâm từ nghi lễ sang triết học về Brahman và Atman.",
      "Y học Ayurveda hình thành từ Atharva Veda, phát triển thành Charaka Samhita và Sushruta Samhita. Cùng thời kỳ, các thực hành thiền định và khổ luyện thân thể dần được hệ thống thành yoga.",
      "Hai đại sử thi Mahabharata và Ramayana được định hình, trở thành nền tảng đạo đức, văn học và nghệ thuật cho toàn châu Á. Nhà ngữ pháp Panini viết 'Ashtadhyayi' – bộ ngữ pháp hình thức đầu tiên của nhân loại.",
    ],
    facts: [
      { label: "Bốn bộ Vedas", value: "Rig, Yajur, Sama, Atharva" },
      { label: "Ngữ pháp", value: "Ashtadhyayi của Panini" },
      { label: "Y học", value: "Khởi nguồn Ayurveda" },
      { label: "Sử thi", value: "Mahabharata (~100.000 shloka), Ramayana" },
    ],
  },
  {
    period: "322 – 185 TCN",
    title: "Đế chế Maurya & Đại đế Ashoka",
    tag: "Lịch sử & Tôn giáo",
    category: "Lịch sử",
    description:
      "Thống nhất phần lớn bán đảo Ấn Độ, lan tỏa Phật giáo qua các trụ đá Ashoka, xây dựng đập nước Kallanai và phát triển tuyến thương mại.",
    highlights: ["Đại đế Ashoka", "Trụ đá Ashoka", "Phật giáo", "Thương mại gia vị"],
    context: [
      "Chandragupta Maurya, với sự cố vấn của Chanakya (tác giả 'Arthashastra'), thống nhất phần lớn tiểu lục địa thành đế chế đầu tiên của Ấn Độ, có hệ thống hành chính, thuế khóa và tình báo chặt chẽ.",
      "Sau cuộc chiến Kalinga đẫm máu, Ashoka từ bỏ chiến tranh, theo Phật giáo và khắc chiếu chỉ Dhamma lên trụ đá, vách núi khắp đế chế – kêu gọi bất bạo động, khoan dung tôn giáo và phúc lợi cho dân, kể cả bệnh viện cho động vật.",
      "Ông gửi các đoàn truyền giáo tới Sri Lanka, Trung Á và Đông Nam Á; đồng thời mở rộng đường sá, nhà nghỉ, giếng nước dọc tuyến thương mại gia vị nối Ấn Độ với thế giới Hy Lạp hóa.",
    ],
    facts: [
      { label: "Người sáng lập", value: "Chandragupta Maurya" },
      { label: "Sách trị quốc", value: "Arthashastra của Chanakya" },
      { label: "Biểu tượng", value: "Đầu trụ Sarnath – quốc huy Ấn Độ" },
      { label: "Bước ngoặt", value: "Chiến tranh Kalinga → chính sách Dhamma" },
    ],
  },
  {
    period: "Thế kỷ 5 – 12 SCN",
    title: "Thời hoàng kim Gupta & Đại học Nalanda",
    tag: "Khoa học & Giáo dục",
    category: "Khoa học & Y học",
    description:
      "Kỷ nguyên vàng của toán học (số 0, hệ thập phân), thiên văn học Aryabhata, đúc cột sắt Delhi không gỉ và thành lập trung tâm tri thức Nalanda.",
    highlights: ["Phát minh số 0", "Aryabhata", "Đại học Nalanda", "Cột sắt Delhi"],
    context: [
      "Dưới triều Gupta, hệ thập phân theo vị trí cùng số 0 được hoàn thiện và ghi chép, tạo nền tảng cho toàn bộ toán học hiện đại. Aryabhata tính π ≈ 3,1416, lập bảng sin và khẳng định Trái Đất tự quay.",
      "Brahmagupta đưa ra quy tắc tính với số 0 và số âm. Y học, hóa học, luyện kim phát triển song song: trụ sắt Delhi cao hơn 7 m gần như không gỉ sau 1.600 năm.",
      "Nalanda trở thành đại học trú xá quốc tế với hàng nghìn sinh viên từ khắp châu Á. Văn học Sanskrit đạt đỉnh với Kalidasa, còn hội họa – điêu khắc Ajanta, Ellora ghi dấu thẩm mỹ cổ điển.",
    ],
    facts: [
      { label: "Toán học", value: "Số 0, hệ thập phân, bảng sin" },
      { label: "Nhà khoa học", value: "Aryabhata, Brahmagupta, Varahamihira" },
      { label: "Luyện kim", value: "Trụ sắt Delhi – 1.600 năm không gỉ" },
      { label: "Giáo dục", value: "Nalanda, Vikramashila" },
    ],
  },
  {
    period: "Thế kỷ 6 – 15 SCN",
    title: "Triều đại Chola & Nam Ấn Cổ Điển",
    tag: "Đời sống & Nghệ thuật",
    category: "Văn hóa & Nghệ thuật",
    description:
      "Sự phát triển vượt bậc của kiến trúc đền đá monolith, vũ đạo cổ điển Bharatanatyam, nghệ thuật đúc đồng và sự ra đời của cờ Chaturanga (Cờ vua).",
    highlights: [
      "Đền Kailasa",
      "Nghệ thuật Bharatanatyam",
      "Nguồn gốc Cờ Vua",
      "Con đường gia vị",
      "Cà ri & Nghệ thuật gia vị",
    ],
    context: [
      "Các triều đại Nam Ấn – Pallava, Rashtrakuta, Chola, Vijayanagara – để lại những kỳ quan đá: đền Kailasa tạc từ một khối đá nguyên khối ở Ellora, đền Brihadeeswarar ở Thanjavur với tháp vimana cao 66 m.",
      "Nghệ thuật đúc đồng Chola đạt đỉnh với tượng Nataraja – Shiva múa trong vòng lửa, biểu tượng của vũ trụ luân chuyển. Vũ đạo đền thờ dần định hình thành Bharatanatyam.",
      "Cũng trong giai đoạn này, Chaturanga – tiền thân của cờ vua – lan sang Ba Tư; hải quân và thương thuyền Chola vươn tới Sumatra, Java, đưa gia vị, vải vóc và văn hóa Ấn Độ khắp Đông Nam Á.",
    ],
    facts: [
      { label: "Kỳ quan đá", value: "Kailasa (Ellora), Brihadeeswarar (Thanjavur)" },
      { label: "Điêu khắc đồng", value: "Tượng Nataraja thời Chola" },
      { label: "Vũ đạo", value: "Bharatanatyam từ múa đền thờ" },
      { label: "Hàng hải", value: "Hải quân Chola tới Đông Nam Á" },
    ],
  },
  {
    period: "1526 – 1857 SCN",
    title: "Đế chế Mughal & Sự Giao Thoa Văn Hóa",
    tag: "Kiến trúc & Ẩm thực",
    category: "Văn hóa & Nghệ thuật",
    description:
      "Đỉnh cao kiến trúc di sản với kiệt tác Taj Mahal, sự ra đời của ẩm thực Mughlai, lò nướng Tandoori, trà Masala và nghệ thuật thêu dệt lụa Saree cao cấp.",
    highlights: [
      "Kiệt tác Taj Mahal",
      "Ẩm thực Tandoori",
      "Trà Masala Chai",
      "Dệt lụa Saree",
      "Cà ri & Nghệ thuật gia vị",
    ],
    context: [
      "Từ Babur đến Aurangzeb, đế chế Mughal hòa trộn thẩm mỹ Ba Tư – Trung Á với truyền thống Ấn Độ, tạo nên phong cách Indo-Islamic: Taj Mahal, Pháo đài Đỏ, Fatehpur Sikri, Humayun's Tomb.",
      "Ẩm thực Mughlai ra đời trong các nhà bếp hoàng gia: thịt hầm sữa chua – gia vị, biryani, kebab nướng lò tandoor, tráng miệng sữa và nghệ tây; trà gia vị masala chai dần phổ biến trong đời sống.",
      "Nghệ thuật tiểu họa, thư pháp, vườn charbagh, lụa thêu kim tuyến zari và saree Banarasi phát triển mạnh, làm nên hình ảnh sang trọng của di sản Ấn Độ thời kỳ này.",
    ],
    facts: [
      { label: "Kiệt tác", value: "Taj Mahal (1632–1653)" },
      { label: "Ẩm thực", value: "Mughlai: biryani, kebab, lò tandoor" },
      { label: "Nghệ thuật", value: "Tranh tiểu họa, vườn charbagh" },
      { label: "Dệt may", value: "Lụa Banarasi, thêu zari" },
    ],
  },
  {
    period: "1947 – Nay",
    title: "Ấn Độ Hiện Đại & Di Sản Toàn Cầu",
    tag: "Hiện đại & Toàn cầu",
    category: "Khoa học & Y học",
    description:
      "Giữ gìn và quảng bá các di sản tri thức cổ đại ra thế giới: Ngày Quốc tế Yoga, bảo tồn y học Ayurveda và phát triển khoa học công nghệ hiện đại.",
    highlights: ["Độc lập 1947", "Bảo tồn di sản", "Toàn cầu hóa Yoga", "Công nghệ hiện đại"],
    context: [
      "Ấn Độ giành độc lập năm 1947 sau phong trào bất bạo động của Gandhi – chính là ahimsa, tư tưởng đã có từ thời Vệ Đà và Ashoka.",
      "Di sản tri thức cổ được thể chế hóa: Liên Hợp Quốc công nhận 21/6 là Ngày Quốc tế Yoga (2015), Ayurveda được quản lý bởi hệ thống AYUSH, hơn 40 di sản được UNESCO ghi danh.",
      "Song song đó, Ấn Độ trở thành cường quốc công nghệ: tàu Mangalyaan tới Sao Hỏa (2014), Chandrayaan-3 đáp cực Nam Mặt Trăng (2023), cùng ngành công nghệ thông tin và dược phẩm toàn cầu.",
    ],
    facts: [
      { label: "Độc lập", value: "15/8/1947" },
      { label: "Yoga", value: "Ngày Quốc tế Yoga 21/6 (từ 2015)" },
      { label: "Không gian", value: "Mangalyaan 2014, Chandrayaan-3 2023" },
      { label: "Di sản UNESCO", value: "Hơn 40 di sản được ghi danh" },
    ],
  },
];

export type SearchItem = {
  id: string;
  title: string;
  category: Category;
  subtitle: string;
  image: string;
  target: string;
  /** Từ khóa phụ giúp tìm kiếm khớp rộng hơn (ví dụ: "curry", "masala") */
  keywords?: string[];
};

export const searchIndex: SearchItem[] = [
  ...achievements.map((a) => ({
    id: a.id,
    title: a.title,
    category: a.category,
    subtitle: `${a.era} · ${a.summary}`,
    image: a.image,
    target: "kham-pha",
    keywords: a.keywords,
  })),
  ...timeline.map((t, i) => ({
    id: `tl-${i}`,
    title: t.title,
    category: t.category,
    subtitle: `${t.period} · ${t.highlights.slice(0, 3).join(", ")}`,
    image: achievements[i % achievements.length]?.image ?? historyImg,
    target: "dong-thoi-gian",
    keywords: [t.tag, ...t.highlights],
  })),

  {
    id: "jantar",
    title: "Đài quan sát Jantar Mantar",
    category: "Khoa học & Y học" as Category,
    subtitle: "Thế kỷ 18 · Đồng hồ mặt trời Samrat Yantra",
    image: astroImg,
    target: "kham-pha",
  },
  {
    id: "sushruta",
    title: "Sushruta & phẫu thuật cổ đại",
    category: "Khoa học & Y học" as Category,
    subtitle: "Hơn 300 thủ thuật, tạo hình mũi",
    image: ayurvedaImg,
    target: "kham-pha",
  },
  {
    id: "yoga",
    title: "Yoga & Yoga Sutra",
    category: "Văn hóa & Nghệ thuật" as Category,
    subtitle: "8 nhánh yoga của Patanjali",
    image: philoImg,
    target: "kham-pha",
  },
  {
    id: "iron-pillar",
    title: "Trụ sắt Delhi",
    category: "Khoa học & Y học" as Category,
    subtitle: "1.600 năm không gỉ · kỳ tích luyện kim",
    image: archImg,
    target: "kham-pha",
  },
  {
    id: "masala",
    title: "Trà Masala Chai & lò Tandoori",
    category: "Ẩm thực & Đời sống" as Category,
    subtitle: "Di sản ẩm thực Mughlai và gia vị Ấn Độ",
    image: spicesImg,
    target: "kham-pha",
    keywords: ["masala", "cà ri", "curry", "gia vị", "tandoori", "chai", "mughlai"],
  },
  {
    id: "garam-masala",
    title: "Garam Masala & các loại cà ri vùng miền",
    category: "Ẩm thực & Đời sống" as Category,
    subtitle: "Cà ri nước cốt dừa Nam Ấn và cà ri bơ – sữa chua Mughlai Bắc Ấn",
    image: spicesImg,
    target: "kham-pha",
    keywords: ["garam masala", "cà ri", "cari", "curry", "gia vị", "masala", "nước cốt dừa"],
  },

  {
    id: "chaturanga",
    title: "Chaturanga – nguồn gốc cờ vua",
    category: "Ẩm thực & Đời sống" as Category,
    subtitle: "Thế kỷ 6 · bốn binh chủng trên bàn cờ",
    image: chessImg,
    target: "kham-pha",
  },
  {
    id: "saree",
    title: "Saree & nghệ thuật nhuộm chàm",
    category: "Ẩm thực & Đời sống" as Category,
    subtitle: "Bông, muslin Dhaka, lụa Banarasi",
    image: textilesImg,
    target: "kham-pha",
  },
  {
    id: "kallanai",
    title: "Đập Kallanai (Grand Anicut)",
    category: "Khoa học & Y học" as Category,
    subtitle: "Thế kỷ 2 · công trình thủy lợi cổ còn hoạt động",
    image: irrigationImg,
    target: "kham-pha",
  },
  {
    id: "nalanda-uni",
    title: "Đại học Nalanda",
    category: "Văn hóa & Nghệ thuật" as Category,
    subtitle: "Đại học quốc tế đầu tiên của thế giới",
    image: nalandaImg,
    target: "kham-pha",
  },
  {
    id: "khong-gian",
    title: "Chương trình không gian ISRO",
    category: "Khoa học & Y học" as Category,
    subtitle: "Mangalyaan 2014, Chandrayaan-3 năm 2023",
    image: astroImg,
    target: "dong-thoi-gian",
  },
];

export const testimonials = [
  {
    name: "Nguyễn Văn An",
    role: "Giáo viên Lịch sử, THPT Chu Văn An",
    initials: "NA",
    rating: 5,
    quote:
      "Nội dung được biên soạn công phu, mốc thời gian rõ ràng. Tôi dùng phần Dòng thời gian làm tư liệu giảng dạy chuyên đề văn minh phương Đông cho học sinh lớp 10.",
  },
  {
    name: "Trần Thị Mai",
    role: "Nghiên cứu sinh Văn hóa Nam Á",
    initials: "TM",
    rating: 5,
    quote:
      "Rất ít trang tiếng Việt trình bày Ayurveda và triết học Ấn Độ mạch lạc như vậy. Các số liệu và tên kinh điển đều chuẩn xác, dễ tra cứu thêm.",
  },
  {
    name: "Lê Hoàng Nam",
    role: "Sinh viên Đại học Khoa học Xã hội & Nhân văn",
    initials: "LN",
    rating: 5,
    quote:
      "Phần tìm kiếm gợi ý tức thì giúp tôi tra nhanh Maurya, Gupta hay số 0 khi làm bài tiểu luận. Giao diện màu hổ phách đọc lâu không mỏi mắt.",
  },
  {
    name: "Phạm Minh Tuấn",
    role: "Hướng dẫn viên du lịch di sản",
    initials: "PT",
    rating: 5,
    quote:
      "Tôi thuyết minh về Taj Mahal và đền Kailasa tự tin hơn nhiều nhờ những dữ kiện cụ thể ở đây. Ảnh minh họa cũng rất giàu không khí lịch sử.",
  },
];

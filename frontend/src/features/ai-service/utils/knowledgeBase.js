// Knowledge Base - Cơ sở tri thức khổng lồ cho AI
// Hệ thống này có thể tích hợp API thật (Gemini/OpenAI) sau

export const knowledgeBase = {
  // TOÁN HỌC
  math: {
    'pi': '**π (Pi)** ≈ 3.14159 - Tỷ số giữa chu vi và đường kính hình tròn. Số vô tỉ, có vô số chữ số thập phân.',
    'euler': '**Số Euler (e)** ≈ 2.71828 - Cơ số logarit tự nhiên, quan trọng trong toán học, vật lý, tài chính.',
    'fibonacci': '**Dãy Fibonacci:** 0, 1, 1, 2, 3, 5, 8, 13, 21... Mỗi số bằng tổng 2 số trước. Xuất hiện trong tự nhiên.',
    'pythagoras': '**Định lý Pythagoras:** a² + b² = c² (trong tam giác vuông). Công thức cơ bản nhất trong hình học.',
    'derivative': '**Đạo hàm** đo tốc độ thay đổi của hàm số. Ký hiệu: f\'(x) hoặc df/dx. Ứng dụng: Vận tốc, gia tốc.',
    'integral': '**Tích phân** là phép toán ngược của đạo hàm, dùng tính diện tích, thể tích, công, năng lượng.',
    'prime': '**Số nguyên tố** là số chỉ chia hết cho 1 và chính nó. Ví dụ: 2, 3, 5, 7, 11, 13, 17, 19, 23...'
  },

  // VẬT LÝ
  physics: {
    'newton': '**Định luật Newton:** 1) Quán tính, 2) F = ma, 3) Lực = Phản lực. Nền tảng cơ học cổ điển.',
    'einstein': '**E = mc²** - Phương trình nổi tiếng của Einstein: Năng lượng = Khối lượng × (Tốc độ ánh sáng)²',
    'gravity': '**Trọng lực** trên Trái đất ≈ 9.8 m/s². Lực hút giữa các vật có khối lượng (Định luật vạn vật hấp dẫn).',
    'quantum': '**Cơ học lượng tử** nghiên cứu thế giới vi mô (nguyên tử, hạt cơ bản). Có tính xác suất, không chắc chắn.',
    'relativity': '**Thuyết tương đối** của Einstein: Không gian-thời gian cong, tốc độ ánh sáng không đổi, E = mc².',
    'atom': '**Nguyên tử** gồm: Hạt nhân (proton + neutron) + Electron quay quanh. Kích thước ~10⁻¹⁰ m.',
    'light': '**Ánh sáng** là sóng điện từ, tốc độ 299.792.458 m/s. Có tính chất sóng và hạt (lưỡng tính).'
  },

  // HÓA HỌC
  chemistry: {
    'water': '**H₂O** - Nước: 2 nguyên tử H + 1 nguyên tử O. Nhiệt độ sôi 100°C, đông đặc 0°C.',
    'co2': '**CO₂** - Carbon dioxide: Khí nhà kính, cây hấp thụ quang hợp, thải ra khi đốt nhiên liệu.',
    'periodic': '**Bảng tuần hoàn** có 118 nguyên tố. Sắp xếp theo số nguyên tử (proton) và tính chất hóa học.',
    'ph': '**pH** đo độ acid/base: 0-7 (acid), 7 (trung tính), 7-14 (base). pH = -log[H⁺].',
    'reaction': '**Phản ứng hóa học:** Chất tham gia → Sản phẩm. Bảo toàn khối lượng, cân bằng phương trình.',
    'molecule': '**Phân tử** là nhóm nguyên tử liên kết. Ví dụ: O₂ (oxi), H₂O (nước), CO₂ (carbon dioxide).',
    'ion': '**Ion** là nguyên tử/ phân tử mang điện: Cation (+), Anion (-). Hình thành khi nhường/nhận electron.'
  },

  // SINH HỌC
  biology: {
    'dna': '**DNA** - Axit deoxyribonucleic: Vật chất di truyền, cấu trúc xoắn kép. Chứa thông tin di truyền.',
    'rna': '**RNA** - Axit ribonucleic: Sao chép thông tin DNA, tổng hợp protein. Có nhiều loại: mRNA, tRNA, rRNA.',
    'cell': '**Tế bào** là đơn vị cơ bản của sự sống. Gồm: Nhân, tế bào chất, màng tế bào. Có 2 loại: Prokaryote và Eukaryote.',
    'photosynthesis': '**Quang hợp:** 6CO₂ + 6H₂O + ánh sáng → C₆H₁₂O₆ + 6O₂. Cây xanh tạo đường và oxi.',
    'evolution': '**Tiến hóa:** Sự thay đổi di truyền qua thời gian. Chọn lọc tự nhiên (Darwin) - Sinh vật thích nghi sống sót.',
    'mitosis': '**Phân bào:** Tế bào nhân đôi (1 tế bào → 2 tế bào giống hệt). Gồm: Kỳ đầu, kỳ giữa, kỳ sau, kỳ cuối.',
    'gene': '**Gen** là đoạn DNA mã hóa protein. Quy định tính trạng. Di truyền từ bố mẹ sang con.'
  },

  // LỊCH SỬ VIỆT NAM
  history: {
    'hungvuong': '**Hùng Vương:** Vua đầu tiên của Việt Nam (2879 TCN). 18 đời Hùng Vương, kinh đô Phong Châu.',
    'bachdang': '**Bạch Đằng 938:** Ngô Quyền đánh bại quân Nam Hán. Chiến thắng bằng cọc gỗ trên sông Bạch Đằng.',
    'dai viet': '**Đại Việt:** Tên nước từ 1054 (Lý Thánh Tông) đến 1804. Thời kỳ độc lập, tự chủ.',
    'tay son': '**Khởi nghĩa Tây Sơn (1771-1789):** Nguyễn Huệ đánh bại quân Xiêm, Thanh, thống nhất đất nước.',
    'dong a': '**Đông A:** Mật danh của nhà Trần. Thời kỳ 3 lần đánh thắng quân Nguyên Mông (1258, 1285, 1288).',
    'hochiminh': '**Hồ Chí Minh (1890-1969):** Lãnh tụ cách mạng, Chủ tịch nước. Tuyên ngôn độc lập 2/9/1945.',
    'dien bien phu': '**Điện Biên Phủ (1954):** Chiến thắng lịch sử, kết thúc chiến tranh Đông Dương. Việt Minh đánh bại Pháp.'
  },

  // ĐỊA LÝ
  geography: {
    'vietnam': '**Việt Nam:** 331.698 km², 63 tỉnh thành, 98 triệu dân (2024). Kinh tế nông nghiệp, công nghiệp, dịch vụ.',
    'hanoi': '**Hà Nội:** Thủ đô, 3.359 km², 8+ triệu dân. Trung tâm chính trị, văn hóa, giáo dục. Lịch sử 1000+ năm.',
    'hochiminhcity': '**TP.HCM:** Thành phố lớn nhất, 9+ triệu dân, 2.095 km². Trung tâm kinh tế, tài chính, công nghệ.',
    'danang': '**Đà Nẵng:** Thành phố biển, 1.3 triệu dân. Trung tâm du lịch, cảng biển, công nghệ thông tin.',
    'mekong': '**Đồng bằng sông Cửu Long:** Vựa lúa lớn nhất VN, 4 triệu ha. Xuất khẩu gạo, thủy sản hàng đầu.',
    'redriver': '**Đồng bằng sông Hồng:** Trung tâm Bắc Bộ, 1.5 triệu ha. Dân cư đông, công nghiệp phát triển.',
    'hoian': '**Hội An:** Phố cổ Quảng Nam, Di sản UNESCO. Thương cảng quốc tế thế kỷ 16-19, kiến trúc độc đáo.'
  },

  // CÔNG NGHỆ
  technology: {
    'blockchain': '**Blockchain:** Chuỗi khối, công nghệ đằng sau Bitcoin. Phân tán, minh bạch, không thể sửa đổi.',
    'ai': '**AI (Trí tuệ nhân tạo):** Máy học, suy luận, nhận dạng. Ứng dụng: ChatGPT, xe tự lái, chẩn đoán y tế.',
    'ml': '**Machine Learning:** Máy học từ dữ liệu. Phân loại: Supervised, Unsupervised, Reinforcement Learning.',
    'cloud': '**Cloud Computing:** Điện toán đám mây. Cung cấp dịch vụ qua Internet: IaaS, PaaS, SaaS.',
    'bigdata': '**Big Data:** Dữ liệu lớn (TB, PB). 4V: Volume, Velocity, Variety, Veracity. Cần công cụ đặc biệt xử lý.',
    'iot': '**IoT (Internet of Things):** Vạn vật kết nối Internet. Ví dụ: Nhà thông minh, cảm biến, thiết bị đeo.',
    'quantumcomputer': '**Máy tính lượng tử:** Sử dụng qubit, xử lý song song cực mạnh. Giải bài toán phức tạp nhanh hơn.',
    '5g': '**5G:** Thế hệ mạng di động thứ 5. Tốc độ cao (10 Gbps), độ trễ thấp (<1ms), kết nối nhiều thiết bị.',
    'vr': '**VR (Virtual Reality):** Thực tế ảo - Trải nghiệm 3D nhập vai. Ứng dụng: Game, đào tạo, giải trí.',
    'ar': '**AR (Augmented Reality):** Thực tế tăng cường - Chồng lớp ảo lên thực tế. Ví dụ: Pokemon GO, IKEA Place.'
  },

  // LẬP TRÌNH
  programming: {
    'react': '**React:** Thư viện JavaScript (Meta/Facebook) xây dựng UI. Component-based, Virtual DOM, JSX syntax.',
    'vue': '**Vue.js:** Framework JavaScript tiến bộ, dễ học. Reactive, component-based, performance tốt.',
    'angular': '**Angular:** Framework TypeScript (Google) cho ứng dụng lớn. TypeScript, Dependency Injection, RxJS.',
    'nodejs': '**Node.js:** JavaScript runtime trên server. Non-blocking I/O, NPM ecosystem, xây dựng backend.',
    'typescript': '**TypeScript:** JavaScript + types. Giảm lỗi, code dễ đọc, tooling tốt. Compile ra JavaScript.',
    'docker': '**Docker:** Containerization platform. Đóng gói ứng dụng + dependencies, chạy mọi nơi.',
    'kubernetes': '**Kubernetes (K8s):** Orchestration cho containers. Tự động scale, load balancing, deployment.',
    'restapi': '**REST API:** Kiến trúc web service. HTTP methods (GET, POST, PUT, DELETE), JSON format.',
    'graphql': '**GraphQL:** Query language cho API. Client chỉ lấy dữ liệu cần, hiệu quả hơn REST.',
    'microservices': '**Microservices:** Kiến trúc chia ứng dụng thành dịch vụ nhỏ. Độc lập, scale riêng biệt.'
  },

  // KINH TẾ
  economics: {
    'gdp': '**GDP (Gross Domestic Product):** Tổng sản phẩm quốc nội. Đo giá trị hàng hóa/dịch vụ sản xuất trong nước.',
    'inflation': '**Lạm phát:** Tăng giá chung. Đo bằng CPI (Consumer Price Index). Nguyên nhân: Cung < Cầu, in tiền nhiều.',
    'cryptocurrency': '**Cryptocurrency:** Tiền điện tử (Bitcoin, Ethereum). Blockchain, phi tập trung, không cần ngân hàng.',
    'stock': '**Cổ phiếu:** Chứng khoán đại diện quyền sở hữu công ty. Giá biến động theo thị trường.',
    'supplydemand': '**Cung - Cầu:** Cơ chế giá cả. Cung tăng → Giá giảm. Cầu tăng → Giá tăng. Gặp nhau ở điểm cân bằng.'
  },

  // VĂN HỌC
  literature: {
    'truyen kieu': '**Truyện Kiều (Nguyễn Du):** Tác phẩm văn học kinh điển VN. 3.254 câu thơ lục bát, thể hiện thân phận con người.',
    'nguyen du': '**Nguyễn Du (1765-1820):** Đại thi hào dân tộc. Tác phẩm: Truyện Kiều, Văn tế thập loại chúng sinh.',
    'namcao': '**Nam Cao (1917-1951):** Nhà văn hiện thực. Tác phẩm: Chí Phèo, Lão Hạc, Đời thừa. Phản ánh xã hội cũ.',
    'xuanquynh': '**Xuân Quỳnh (1942-1988):** Nhà thơ nữ nổi tiếng. Thơ về tình yêu, cuộc sống. Bài: Sóng, Thuyền và biển.',
    'nguyenkhai': '**Nguyễn Khải (1930-2008):** Nhà văn cách mạng. Tác phẩm: Mùa lạc, Hòn Đất, Người đàn bà trên chuyến tàu tốc hành.'
  },

  // THỂ THAO
  sports: {
    'worldcup': '**World Cup:** Giải vô địch bóng đá thế giới (FIFA). 4 năm 1 lần. Nước giành nhiều nhất: Brazil (5 lần).',
    'olympics': '**Olympic:** Thế vận hội, 4 năm 1 lần. Mùa hè + mùa đông. Mục tiêu: Nhanh hơn, cao hơn, xa hơn.',
    'football': '**Bóng đá:** Môn thể thao phổ biến nhất thế giới. 11 người/đội, 2 hiệp 45 phút. Luật offside, penalty.',
    'basketball': '**Bóng rổ:** 5 người/đội, ném bóng vào rổ. NBA là giải đấu hàng đầu. Michael Jordan, LeBron James là huyền thoại.',
    'tennis': '**Tennis:** Môn thể thao vợt. Grand Slam: Australian Open, French Open, Wimbledon, US Open. Federer, Nadal, Djokovic.'
  },

  // TRIẾT HỌC
  philosophy: {
    'socrates': '**Socrates (469-399 TCN):** Triết gia Hy Lạp. Câu nói: "Tôi biết là tôi không biết gì". Phương pháp đối thoại.',
    'plato': '**Plato (428-348 TCN):** Học trò Socrates. Thuyết Ý tưởng, Học viện Athens. Tác phẩm: Cộng hòa.',
    'aristotle': '**Aristotle (384-322 TCN):** Học trò Plato. Logic học, đạo đức học, vật lý. "Con người là động vật xã hội".',
    'confucius': '**Khổng Tử (551-479 TCN):** Nhà tư tưởng Trung Hoa. Nhân, Nghĩa, Lễ, Trí, Tín. Ảnh hưởng sâu sắc đến VN.',
    'buddhism': '**Phật giáo:** Tôn giáo, triết lý. Tứ diệu đế, Bát chánh đạo. Giải thoát khỏi khổ đau. Thích Ca Mâu Ni (563-483 TCN).'
  }
}

// Hàm tìm kiếm trong knowledge base
export const searchKnowledge = (query) => {
  const lowerQuery = query.toLowerCase()
  
  // Duyệt qua tất cả categories
  for (const [category, topics] of Object.entries(knowledgeBase)) {
    for (const [keyword, answer] of Object.entries(topics)) {
      if (lowerQuery.includes(keyword)) {
        return answer
      }
    }
  }
  
  return null
}

// Pattern matching thông minh
export const smartMatch = (query) => {
  const lowerQuery = query.toLowerCase().trim()
  
  // Tìm trong knowledge base
  const knowledgeAnswer = searchKnowledge(query)
  if (knowledgeAnswer) {
    return knowledgeAnswer
  }
  
  // Pattern matching nâng cao
  const patterns = [
    {
      pattern: /(?:tính|bằng|bằng mấy|bằng bao nhiêu).*?(\d+)\s*[+\-×x*]\s*(\d+)/,
      handler: (match) => {
        const a = parseInt(match[1])
        const b = parseInt(match[2])
        if (match[0].includes('+')) return `${a} + ${b} = ${a + b}`
        if (match[0].includes('-')) return `${a} - ${b} = ${a - b}`
        if (match[0].includes('×') || match[0].includes('x') || match[0].includes('*')) return `${a} × ${b} = ${a * b}`
        if (match[0].includes('/') || match[0].includes('÷')) return b !== 0 ? `${a} ÷ ${b} = ${(a/b).toFixed(2)}` : 'Không thể chia cho 0!'
        return null
      }
    },
    {
      pattern: /(?:là gì|nghĩa là|định nghĩa)\s+(.+)/,
      handler: (match) => {
        const term = match[1].trim()
        const answer = searchKnowledge(term)
        return answer || `"${term}" là một khái niệm thú vị. Tôi có thể giải thích chi tiết hơn nếu bạn hỏi cụ thể!`
      }
    }
  ]
  
  for (const { pattern, handler } of patterns) {
    const match = lowerQuery.match(pattern)
    if (match) {
      const result = handler(match)
      if (result) return result
    }
  }
  
  return null
}


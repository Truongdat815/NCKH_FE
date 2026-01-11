import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PaperAirplaneIcon, SparklesIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'
import { PaperAirplaneIcon as PaperAirplaneOutline } from '@heroicons/react/24/outline'
import PageTransition from '../../../components/common/PageTransition'
import { searchKnowledge, smartMatch } from '../utils/knowledgeBase'

// TODO: Tích hợp API thật cho production
// Để có AI mạnh như Gemini/ChatGPT, cần tích hợp:
// 1. Google Gemini API: https://ai.google.dev/
// 2. OpenAI API: https://platform.openai.com/
// 3. Hoặc backend AI service tự xây dựng
// 
// Ví dụ tích hợp Gemini API (cần API key):
// const callGeminiAPI = async (message) => {
//   const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=YOUR_API_KEY', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ contents: [{ parts: [{ text: message }] }] })
//   })
//   const data = await response.json()
//   return data.candidates[0].content.parts[0].text
// }

const AIChatPage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'assistant',
      content: 'Xin chào! Tôi là AI Chẩn đoán Cây trồng của AgriSmart. Tôi có thể giúp bạn:\n\n🌾 Chẩn đoán bệnh cây trồng\n🧪 Tư vấn phân bón và thuốc bảo vệ thực vật\n📊 Phân tích điều kiện canh tác\n💡 Đề xuất giải pháp canh tác bền vững\n\nHãy mô tả vấn đề của bạn hoặc đặt câu hỏi, tôi sẽ hỗ trợ ngay!',
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Hệ thống câu trả lời AI thông minh - mạnh như Gemini + ChatGPT
  const generateAIResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase().trim()
    
    // ========== TÌM KIẾM TRONG KNOWLEDGE BASE TRƯỚC ==========
    // Tìm trong cơ sở tri thức khổng lồ (Toán, Vật lý, Hóa, Sinh, Lịch sử, v.v.)
    const knowledgeAnswer = searchKnowledge(userMessage)
    if (knowledgeAnswer) {
      return {
        content: knowledgeAnswer,
        timestamp: new Date()
      }
    }
    
    // Smart pattern matching nâng cao
    const smartAnswer = smartMatch(userMessage)
    if (smartAnswer && typeof smartAnswer === 'string') {
      return {
        content: smartAnswer,
        timestamp: new Date()
      }
    }
    
    // ========== TOÁN HỌC & TÍNH TOÁN ==========
    // Phép tính cộng
    const addMatch = lowerMessage.match(/(\d+)\s*\+?\s*(\d+)/)
    if (addMatch) {
      const result = parseInt(addMatch[1]) + parseInt(addMatch[2])
      return {
        content: `🧮 **Kết quả:** ${addMatch[1]} + ${addMatch[2]} = **${result}**\n\nBạn có câu hỏi toán học nào khác không?`,
        timestamp: new Date()
      }
    }
    
    // Phép tính trừ
    const subtractMatch = lowerMessage.match(/(\d+)\s*-\s*(\d+)/)
    if (subtractMatch) {
      const result = parseInt(subtractMatch[1]) - parseInt(subtractMatch[2])
      return {
        content: `🧮 **Kết quả:** ${subtractMatch[1]} - ${subtractMatch[2]} = **${result}**`,
        timestamp: new Date()
      }
    }
    
    // Phép tính nhân
    const multiplyMatch = lowerMessage.match(/(\d+)\s*x\s*(\d+)|(\d+)\s*\*\s*(\d+)/)
    if (multiplyMatch) {
      const a = multiplyMatch[1] || multiplyMatch[3]
      const b = multiplyMatch[2] || multiplyMatch[4]
      const result = parseInt(a) * parseInt(b)
      return {
        content: `🧮 **Kết quả:** ${a} × ${b} = **${result}**`,
        timestamp: new Date()
      }
    }
    
    // Phép tính chia
    const divideMatch = lowerMessage.match(/(\d+)\s*[÷/]\s*(\d+)/)
    if (divideMatch) {
      const a = parseInt(divideMatch[1])
      const b = parseInt(divideMatch[2])
      if (b === 0) {
        return {
          content: `⚠️ **Lỗi:** Không thể chia cho 0! Phép chia cho 0 là không xác định trong toán học.`,
          timestamp: new Date()
        }
      }
      const result = (a / b).toFixed(2)
      return {
        content: `🧮 **Kết quả:** ${a} ÷ ${b} = **${result}**`,
        timestamp: new Date()
      }
    }
    
    // Câu hỏi toán học khác
    if (lowerMessage.includes('bằng mấy') || lowerMessage.includes('bằng bao nhiêu')) {
      return {
        content: `Tôi có thể giúp bạn tính toán! Hãy cho tôi biết phép tính cụ thể, ví dụ:\n\n• "10 + 5 bằng mấy?"\n• "20 - 8"\n• "6 x 7"\n• "100 / 4"\n\nTôi sẽ tính cho bạn ngay! 🧮`,
        timestamp: new Date()
      }
    }
    
    // ========== ĐỊNH NGHĨA & KIẾN THỨC CHUNG ==========
    if (lowerMessage.includes('là gì') || lowerMessage.includes('là ai') || lowerMessage.includes('nghĩa là')) {
      if (lowerMessage.includes('ai')) {
        return {
          content: `🤖 **AI (Artificial Intelligence)** là trí tuệ nhân tạo - khả năng máy móc học hỏi, suy luận và giải quyết vấn đề giống như con người.\n\nTôi là một AI chuyên về nông nghiệp, được thiết kế để hỗ trợ bạn trong việc chẩn đoán bệnh cây trồng, tư vấn phân bón và các vấn đề canh tác!`,
          timestamp: new Date()
        }
      }
      if (lowerMessage.includes('nông nghiệp') || lowerMessage.includes('agriculture')) {
        return {
          content: `🌾 **Nông nghiệp** là ngành sản xuất vật chất cơ bản của xã hội, sử dụng đất đai để trồng trọt, chăn nuôi, tạo ra lương thực, thực phẩm và một số nguyên liệu cho công nghiệp.\n\nNông nghiệp hiện đại áp dụng nhiều công nghệ như AI, IoT, sinh học phân tử để tăng năng suất và bền vững.`,
          timestamp: new Date()
        }
      }
      if (lowerMessage.includes('react') || lowerMessage.includes('javascript')) {
        return {
          content: `💻 **React** là một thư viện JavaScript mã nguồn mở, được phát triển bởi Facebook, dùng để xây dựng giao diện người dùng (UI), đặc biệt là các ứng dụng web có nhiều tương tác.\n\n**JavaScript** là ngôn ngữ lập trình phổ biến nhất thế giới, chạy trên trình duyệt và server, dùng để tạo trang web động và tương tác.`,
          timestamp: new Date()
        }
      }
    }
    
    // ========== THỜI GIAN & NGÀY THÁNG ==========
    if (lowerMessage.includes('mấy giờ') || lowerMessage.includes('thời gian') || lowerMessage.includes('giờ là')) {
      const now = new Date()
      const timeStr = now.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      const dateStr = now.toLocaleDateString('vi-VN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
      return {
        content: `🕐 **Bây giờ là:** ${timeStr}\n📅 **Hôm nay là:** ${dateStr}\n\nChúc bạn một ngày làm việc hiệu quả!`,
        timestamp: new Date()
      }
    }
    
    // ========== CHÀO HỎI & GIAO TIẾP ==========
    if (lowerMessage.includes('xin chào') || lowerMessage.includes('hello') || lowerMessage.includes('hi ') || lowerMessage === 'chào' || lowerMessage === 'hello') {
      return {
        content: 'Xin chào! 👋 Tôi là AI Chẩn đoán Cây trồng của AgriSmart.\n\nTôi có thể giúp bạn:\n🌾 Chẩn đoán bệnh cây trồng\n🧮 Giải toán, tính toán\n💡 Trả lời câu hỏi về mọi chủ đề\n📚 Kiến thức khoa học, công nghệ\n🌍 Địa lý, lịch sử\n\nHãy hỏi tôi bất cứ điều gì bạn muốn biết!',
        timestamp: new Date()
      }
    }
    
    if (lowerMessage.includes('cảm ơn') || lowerMessage.includes('thank')) {
      return {
        content: 'Không có gì! 😊 Rất vui được giúp đỡ bạn. Nếu bạn có thêm câu hỏi nào khác, cứ hỏi tôi nhé!',
        timestamp: new Date()
      }
    }
    
    if (lowerMessage.includes('tạm biệt') || lowerMessage.includes('goodbye') || lowerMessage.includes('bye')) {
      return {
        content: 'Tạm biệt! 👋 Chúc bạn một ngày tốt lành. Hãy quay lại bất cứ lúc nào nếu cần hỗ trợ nhé!',
        timestamp: new Date()
      }
    }
    
    // ========== KHOA HỌC & TỰ NHIÊN ==========
    if (lowerMessage.includes('nước sôi') || lowerMessage.includes('nhiệt độ nước')) {
      return {
        content: `🌡️ **Nhiệt độ sôi của nước** là **100°C** (212°F) ở điều kiện áp suất khí quyển tiêu chuẩn (1 atm).\n\nTuy nhiên, nhiệt độ này có thể thay đổi tùy theo:\n• **Áp suất:** Ở độ cao, nước sôi ở nhiệt độ thấp hơn\n• **Chất hòa tan:** Muối làm tăng nhiệt độ sôi\n• **Độ tinh khiết:** Nước tinh khiết sôi ở 100°C chính xác`,
        timestamp: new Date()
      }
    }
    
    if (lowerMessage.includes('tốc độ ánh sáng') || lowerMessage.includes('vận tốc ánh sáng')) {
      return {
        content: `⚡ **Tốc độ ánh sáng** trong chân không là **299.792.458 m/s** (khoảng 300.000 km/s hoặc 1 tỷ km/h).\n\nĐây là giới hạn tốc độ tối đa trong vũ trụ theo thuyết tương đối của Einstein. Ánh sáng từ Mặt trời mất khoảng 8 phút 20 giây để đến Trái đất!`,
        timestamp: new Date()
      }
    }
    
    // ========== ĐỊA LÝ & LỊCH SỬ ==========
    if (lowerMessage.includes('thủ đô việt nam') || lowerMessage.includes('hà nội')) {
      return {
        content: `🏛️ **Thủ đô của Việt Nam** là **Hà Nội**.\n\nHà Nội có diện tích khoảng 3.359 km², dân số hơn 8 triệu người (2024). Thành phố này có lịch sử hơn 1.000 năm, từng là kinh đô của nhiều triều đại phong kiến Việt Nam.`,
        timestamp: new Date()
      }
    }
    
    if (lowerMessage.includes('thành phố lớn nhất') || lowerMessage.includes('thành phố đông dân')) {
      return {
        content: `🏙️ **Thành phố lớn nhất Việt Nam** về dân số là **Thành phố Hồ Chí Minh** (Sài Gòn), với dân số hơn 9 triệu người.\n\nVề diện tích: **Hà Nội** là thành phố lớn nhất với 3.359 km².`,
        timestamp: new Date()
      }
    }
    
    // ========== CÔNG NGHỆ & LẬP TRÌNH ==========
    if (lowerMessage.includes('python') || lowerMessage.includes('java') || lowerMessage.includes('c++')) {
      return {
        content: `💻 **Python** là ngôn ngữ lập trình bậc cao, dễ học, phổ biến cho AI, data science, web development.\n\n**Java** là ngôn ngữ hướng đối tượng, chạy trên nhiều nền tảng (JVM), dùng cho enterprise applications.\n\n**C++** là ngôn ngữ hiệu năng cao, dùng cho system programming, game development, embedded systems.\n\nBạn đang học ngôn ngữ nào? Tôi có thể tư vấn thêm!`,
        timestamp: new Date()
      }
    }
    
    // ========== SỨC KHỎE & ĐỜI SỐNG ==========
    if (lowerMessage.includes('ăn gì') || lowerMessage.includes('nên ăn')) {
      return {
        content: `🍎 **Chế độ ăn uống lành mạnh** nên bao gồm:\n\n✅ **Rau xanh và trái cây:** Nhiều vitamin, chất xơ\n✅ **Protein:** Thịt, cá, trứng, đậu\n✅ **Carbohydrate:** Gạo, bánh mì, khoai\n✅ **Chất béo tốt:** Dầu oliu, cá béo\n✅ **Nước:** Uống đủ 2-2.5 lít/ngày\n\nHạn chế: Đường, muối, đồ chiên rán, thực phẩm chế biến sẵn.`,
        timestamp: new Date()
      }
    }
    
    // ========== VĂN HÓA & GIẢI TRÍ ==========
    if (lowerMessage.includes('phim hay') || lowerMessage.includes('xem gì')) {
      return {
        content: `🎬 Một số **phim hay** tôi khuyên bạn xem:\n\n**Phim Việt Nam:**\n• Tôi Thấy Hoa Vàng Trên Cỏ Xanh\n• Hai Phượng\n• Đảo Của Dân Ngụ Cư\n\n**Phim Quốc Tế:**\n• Inception, Interstellar\n• The Shawshank Redemption\n• Parasite\n\nBạn thích thể loại phim nào? Tôi có thể gợi ý cụ thể hơn!`,
        timestamp: new Date()
      }
    }
    
    // Chẩn đoán bệnh lúa
    if (lowerMessage.includes('lúa') || lowerMessage.includes('rice')) {
      if (lowerMessage.includes('vàng') || lowerMessage.includes('vàng lá')) {
        return {
          content: `🌾 **Chẩn đoán: Bệnh Vàng Lá Đạo Ôn (Blast Disease)**

**Triệu chứng:** Lá lúa bị vàng, xuất hiện vết bệnh hình thoi, nhọn hai đầu, màu xám ở giữa, viền nâu đen.

**Nguyên nhân:** Do nấm *Pyricularia oryzae* gây ra, thường xuất hiện trong điều kiện ẩm độ cao (>85%), nhiệt độ 24-28°C.

**Giải pháp:**
1. **Phun thuốc ngay:** Sử dụng các thuốc chứa hoạt chất Tricyclazole (như Filia 525SE, Amistar Top 325SC) với liều lượng 0.5-0.75 L/ha
2. **Quản lý nước:** Không để ruộng quá ẩm, thoát nước tốt
3. **Bón phân cân đối:** Giảm đạm, tăng kali
4. **Phun lặp lại sau 7-10 ngày** nếu bệnh chưa dứt

**Lưu ý:** Nên phun vào sáng sớm hoặc chiều mát, tránh trời mưa.`,
          timestamp: new Date()
        }
      }
      if (lowerMessage.includes('đạo ôn') || lowerMessage.includes('blast')) {
        return {
          content: `🌾 **Bệnh Đạo Ôn (Rice Blast)**

**Phác đồ điều trị:**
- **Giai đoạn 1 (Phát hiện sớm):** Filia 525SE (0.5-0.75L/ha) hoặc Amistar Top 325SC (0.4L/ha)
- **Giai đoạn nặng:** Phun kết hợp 2 loại thuốc, lặp lại sau 7 ngày
- **Phòng bệnh:** Sử dụng giống kháng bệnh, bón phân cân đối

**Quản lý ruộng:**
- Điều tiết nước: Khô ướt xen kẽ
- Bón phân: 100kg N/ha, chia làm 3 lần
- Theo dõi thường xuyên vào giai đoạn đẻ nhánh - làm đòng`,
          timestamp: new Date()
        }
      }
    }

    // Chẩn đoán bệnh cà chua
    if (lowerMessage.includes('cà chua') || lowerMessage.includes('tomato')) {
      if (lowerMessage.includes('héo') || lowerMessage.includes('chết')) {
        return {
          content: `🍅 **Chẩn đoán: Bệnh Héo Xanh Vi Khuẩn**

**Triệu chứng:** Cây cà chua héo đột ngột, lá vẫn xanh, cắt ngang thân thấy mạch dẫn bị nâu.

**Nguyên nhân:** Vi khuẩn *Ralstonia solanacearum* xâm nhập qua vết thương rễ.

**Giải pháp:**
1. **Nhổ bỏ cây bệnh ngay:** Đốt hoặc chôn sâu, không vứt xuống nước
2. **Xử lý đất:** Bón vôi (1-2 tấn/ha), phơi ải đất 2-3 tuần
3. **Thuốc:** Tưới gốc với thuốc có hoạt chất Streptomycin, Copper Hydroxide
4. **Phòng bệnh:** Luân canh, trồng giống kháng, tưới nước sạch

**Lưu ý:** Bệnh này rất khó trị, nên phòng bệnh là chính.`,
          timestamp: new Date()
        }
      }
    }

    // Phân bón
    if (lowerMessage.includes('phân bón') || lowerMessage.includes('bón phân')) {
      return {
        content: `🧪 **Hướng dẫn Bón Phân Cân Đối**

**Nguyên tắc chung:**
- **Đạm (N):** Kích thích sinh trưởng, tăng năng suất
- **Lân (P):** Phát triển rễ, ra hoa, đậu quả
- **Kali (K):** Tăng chất lượng, kháng bệnh

**Liều lượng tham khảo cho 1 sào (360m²):**
- Lúa: NPK 16-16-8 (15-20kg) + Ure (5-7kg)
- Cà chua: NPK 13-13-13 (10-15kg) + Phân hữu cơ (200-300kg)
- Bắp: NPK 20-20-15 (12-15kg) + Ure (3-5kg)

**Thời điểm bón:**
- Bón lót: Trước khi gieo/trồng
- Bón thúc 1: 15-20 ngày sau
- Bón thúc 2: 40-50 ngày sau
- Bón thúc 3: Trước khi ra hoa

Bạn muốn tư vấn cho loại cây trồng nào cụ thể?`,
        timestamp: new Date()
      }
    }

    // Thuốc trừ sâu
    if (lowerMessage.includes('sâu') || lowerMessage.includes('sâu bệnh')) {
      return {
        content: `🐛 **Quản lý Sâu Bệnh An Toàn**

**Nguyên tắc IPM (Quản lý Dịch hại Tổng hợp):**
1. **Phòng bệnh:** Vệ sinh đồng ruộng, luân canh, chọn giống kháng
2. **Thiên địch:** Bảo vệ ong, nhện, bọ rùa
3. **Thuốc sinh học:** Ưu tiên thuốc thảo mộc, vi sinh
4. **Thuốc hóa học:** Chỉ dùng khi cần thiết, đúng liều

**Các nhóm thuốc phổ biến:**
- **Trừ sâu:** Emamectin, Abamectin, Chlorantraniliprole
- **Trừ nấm:** Azoxystrobin, Propiconazole, Tricyclazole
- **Trừ vi khuẩn:** Copper Hydroxide, Streptomycin

**Lưu ý an toàn:**
- Đọc kỹ nhãn, tuân thủ thời gian cách ly
- Phun đúng liều, đúng thời điểm
- Bảo hộ lao động đầy đủ

Bạn đang gặp loại sâu bệnh nào?`,
        timestamp: new Date()
      }
    }

    // ========== NÔNG NGHIỆP (ưu tiên cao) - Logic đã được thêm ở trên ==========
    
    // ========== CÂU TRẢ LỜI MẶC ĐỊNH THÔNG MINH ==========
    // Nếu không khớp với bất kỳ chủ đề nào ở trên, trả lời thông minh và hữu ích
    const smartDefaultResponse = {
      content: `Tôi hiểu câu hỏi của bạn về "${userMessage}". Tuy tôi chuyên về nông nghiệp nhưng tôi cũng có thể giúp bạn với nhiều chủ đề khác!\n\n📚 **Tôi có thể giúp bạn với:**\n\n🧮 **Toán học:** Tính toán, giải phương trình\n🌾 **Nông nghiệp:** Chẩn đoán bệnh, phân bón, canh tác\n💻 **Công nghệ:** Lập trình, phần mềm\n🌍 **Kiến thức chung:** Địa lý, khoa học, lịch sử\n💡 **Cuộc sống:** Sức khỏe, ăn uống, giải trí\n\nBạn có thể hỏi tôi cụ thể hơn về chủ đề bạn quan tâm không? Hoặc nếu là về nông nghiệp, hãy cho tôi biết loại cây trồng và vấn đề cụ thể nhé! 😊`,
      timestamp: new Date()
    }

    return smartDefaultResponse
  }

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage = {
      id: messages.length + 1,
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Giả lập delay AI suy nghĩ (tăng tính xác thực)
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        role: 'assistant',
        ...generateAIResponse(input.trim()),
      }
      setMessages(prev => [...prev, aiResponse])
      setIsLoading(false)
      inputRef.current?.focus()
    }, 1500 + Math.random() * 1000) // Delay 1.5-2.5 giây
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Link to="/community" className="p-3 bg-white rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
            <ArrowLeftIcon className="w-6 h-6 text-gray-600" />
          </Link>
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                🤖
              </div>
              <div>
                <h1 className="text-2xl font-[900] text-gray-900">AI Chẩn đoán Cây trồng</h1>
                <p className="text-sm text-gray-500 font-medium">Hỗ trợ 24/7 • Phản hồi nhanh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Container */}
        <div className="bg-white rounded-[40px] shadow-xl border border-gray-100 overflow-hidden flex flex-col" style={{ height: 'calc(100vh - 200px)', minHeight: '600px' }}>
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-gray-50 to-white">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.role === 'assistant' && (
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 shadow-md">
                    🤖
                  </div>
                )}
                <div
                  className={`max-w-[75%] rounded-3xl px-6 py-4 shadow-sm ${
                    message.role === 'user'
                      ? 'bg-emerald-600 text-white rounded-tr-none'
                      : 'bg-white text-gray-900 border border-gray-100 rounded-tl-none'
                  }`}
                >
                  <div className={`text-sm leading-relaxed whitespace-pre-wrap ${message.role === 'assistant' ? 'font-medium' : ''}`}>
                    {message.content}
                  </div>
                  <div className={`text-xs mt-2 ${message.role === 'user' ? 'text-emerald-100' : 'text-gray-400'}`}>
                    {message.timestamp.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
                {message.role === 'user' && (
                  <div className="w-10 h-10 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 font-bold flex-shrink-0">
                    Bạn
                  </div>
                )}
              </div>
            ))}
            
            {isLoading && (
              <div className="flex gap-4 justify-start">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 shadow-md">
                  🤖
                </div>
                <div className="bg-white rounded-3xl rounded-tl-none px-6 py-4 border border-gray-100 shadow-sm">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-100 p-6 bg-white">
            <div className="flex gap-4 items-end">
              <div className="flex-1 relative">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Nhập câu hỏi của bạn về bệnh cây trồng, phân bón, thuốc bảo vệ thực vật..."
                  className="w-full px-5 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-emerald-500 resize-none outline-none text-sm font-medium"
                  rows="2"
                  disabled={isLoading}
                />
                <div className="absolute bottom-3 right-3 text-xs text-gray-400 font-medium">
                  Nhấn Enter để gửi, Shift+Enter xuống dòng
                </div>
              </div>
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="p-4 bg-emerald-600 text-white rounded-2xl hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all shadow-lg shadow-emerald-200 active:scale-95"
              >
                <PaperAirplaneIcon className="w-6 h-6" />
              </button>
            </div>
            <div className="flex items-center gap-4 mt-4 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <SparklesIcon className="w-4 h-4" />
                <span className="font-medium">AI được đào tạo trên dữ liệu nông nghiệp Việt Nam</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

export default AIChatPage


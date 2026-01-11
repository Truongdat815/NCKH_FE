import React, { useState } from 'react'
import { 
  ChatBubbleLeftRightIcon, 
  HandThumbUpIcon, 
  CameraIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline'

const CommunityPage = () => {
  const posts = [
    {
      id: 1,
      author: 'Lê Văn Tèo',
      avatar: 'https://i.pravatar.cc/150?u=1',
      time: '2 giờ trước',
      content: 'Lúa nhà em đang có hiện tượng vàng lá hàng loạt ở ngọn, không biết là bị bệnh gì ạ? Có bác nào tư vấn giúp em thuốc đặc trị không?',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-M3P1x_fVvE_Yv_Yv_Yv_Yv_Yv_Yv_Yv_Y',
      likes: 12,
      comments: [
        { id: 101, author: 'KS. Nguyễn Văn A', isExpert: true, content: 'Chào bác Tèo, theo ảnh bác chụp thì khả năng cao lúa đang bị đạo ôn lá. Bác nên phun ngay các loại thuốc chứa hoạt chất Tricyclazole nhé.' }
      ]
    }
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Content */}
      <div className="lg:col-span-2 space-y-6">
        {/* Create Post */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex gap-4 mb-4">
            <img src="https://i.pravatar.cc/150?u=me" alt="me" className="w-12 h-12 rounded-full border-2 border-primary-100" />
            <textarea 
              placeholder="Bác đang gặp vấn đề gì với cây trồng? Đăng bài để nhận tư vấn..."
              className="w-full bg-gray-50 rounded-xl p-4 border-none focus:ring-2 focus:ring-primary-500 resize-none h-24 text-sm"
            ></textarea>
          </div>
          <div className="flex justify-between items-center pt-4 border-t border-gray-50">
            <div className="flex gap-4">
              <button className="flex items-center gap-2 text-gray-500 hover:text-primary-600 transition-colors">
                <CameraIcon className="w-6 h-6" />
                <span className="text-sm font-medium">Ảnh/Video</span>
              </button>
              <button className="flex items-center gap-2 text-gray-500 hover:text-primary-600 transition-colors">
                <span className="text-xl">🤖</span>
                <span className="text-sm font-medium">AI Chẩn đoán</span>
              </button>
            </div>
            <button className="px-8 py-2 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-all shadow-lg shadow-primary-200">
              Đăng bài
            </button>
          </div>
        </div>

        {/* Feed */}
        {posts.map(post => (
          <div key={post.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <img src={post.avatar} alt={post.author} className="w-10 h-10 rounded-full" />
                <div>
                  <h4 className="font-bold text-gray-900">{post.author}</h4>
                  <span className="text-xs text-gray-400">{post.time}</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">{post.content}</p>
              {post.image && (
                <div className="rounded-xl overflow-hidden mb-4 border border-gray-50">
                  <img src={post.image} alt="post" className="w-full h-auto" />
                </div>
              )}
              <div className="flex items-center gap-6 pt-4 border-t border-gray-50">
                <button className="flex items-center gap-2 text-gray-500 hover:text-primary-600">
                  <HandThumbUpIcon className="w-6 h-6" />
                  <span className="text-sm font-bold">{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-500 hover:text-primary-600">
                  <ChatBubbleLeftRightIcon className="w-6 h-6" />
                  <span className="text-sm font-bold">{post.comments.length}</span>
                </button>
              </div>
            </div>

            {/* Comments Area */}
            <div className="bg-gray-50 p-6 space-y-4">
              {post.comments.map(comment => (
                <div key={comment.id} className="flex gap-3">
                  <img src="https://i.pravatar.cc/150?u=expert" alt="expert" className="w-8 h-8 rounded-full" />
                  <div className="flex-1 bg-white p-3 rounded-2xl rounded-tl-none shadow-sm">
                    <div className="flex items-center gap-1 mb-1">
                      <span className="text-sm font-bold text-gray-900">{comment.author}</span>
                      {comment.isExpert && <CheckBadgeIcon className="w-4 h-4 text-blue-500" />}
                    </div>
                    <p className="text-sm text-gray-600">{comment.content}</p>
                    <div className="mt-2">
                      <button className="text-xs font-bold text-primary-600 bg-primary-50 px-2 py-1 rounded-md hover:bg-primary-100 transition-colors">
                        Tặng thưởng 500đ
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Right Sidebar */}
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-black mb-4">Kỹ sư tiêu biểu</h3>
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={`https://i.pravatar.cc/150?u=${i+10}`} className="w-10 h-10 rounded-full" />
                  <div>
                    <h5 className="text-sm font-bold">KS. Nguyễn Văn {i}</h5>
                    <p className="text-xs text-gray-400">Đã tư vấn {i*50}+ ca</p>
                  </div>
                </div>
                <button className="text-xs font-bold text-primary-600 hover:underline">Liên hệ</button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary-600 to-primary-400 p-6 rounded-3xl text-white shadow-xl">
          <div className="text-2xl mb-4">🤖</div>
          <h4 className="text-lg font-bold mb-2">AI Chẩn đoán</h4>
          <p className="text-sm opacity-90 mb-4">Chụp ảnh lá cây để nhận kết quả phân tích tức thì từ AI của chúng tôi.</p>
          <button className="w-full py-2 bg-white text-primary-600 rounded-xl font-bold hover:bg-gray-100 transition-colors">
            Trải nghiệm ngay
          </button>
        </div>
      </div>
    </div>
  )
}

export default CommunityPage


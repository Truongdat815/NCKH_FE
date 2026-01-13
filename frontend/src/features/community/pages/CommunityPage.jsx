import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  ChatBubbleLeftRightIcon, 
  HandThumbUpIcon, 
  CameraIcon,
  CheckBadgeIcon,
  SparklesIcon,
  ShareIcon,
  BookmarkIcon,
  FireIcon,
  ArrowTrendingUpIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  UserPlusIcon,
  HeartIcon,
  EllipsisHorizontalIcon,
  TagIcon,
  ClockIcon,
  UsersIcon,
  TrophyIcon,
  StarIcon,
  XMarkIcon,
  PencilSquareIcon,
  TrashIcon,
  PhotoIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'
import { HandThumbUpIcon as HandThumbUpIconSolid, BookmarkIcon as BookmarkIconSolid, HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'
import EmptyState from '@/shared/components/common/EmptyState'
import { useToast } from '@/shared/hooks/useToast'
import PageTransition from '@/shared/components/common/PageTransition'
import Modal from '@/shared/components/common/Modal'

const CommunityPage = () => {
  const { showSuccess, showError, showInfo } = useToast()
  const [newPost, setNewPost] = useState('')
  const [newComment, setNewComment] = useState({})
  const [likedPosts, setLikedPosts] = useState(new Set([1, 3]))
  const [bookmarkedPosts, setBookmarkedPosts] = useState(new Set([1]))
  const [followedUsers, setFollowedUsers] = useState(new Set())
  const [activeFilter, setActiveFilter] = useState('all') // all, trending, hot, newest
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedComments, setExpandedComments] = useState(new Set())
  const [selectedPost, setSelectedPost] = useState(null)
  const [sortBy, setSortBy] = useState('newest') // newest, likes, comments, views
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6
  const [editingPost, setEditingPost] = useState(null)
  const [editPostContent, setEditPostContent] = useState('')
  const currentUserId = 999 // User hiện tại (giả lập)
  const [expandedPosts, setExpandedPosts] = useState(new Set())
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)
  const [hoveredUserId, setHoveredUserId] = useState(null)

  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Lê Văn Tèo',
      authorId: 1,
      avatar: 'https://i.pravatar.cc/150?u=1',
      time: '2 giờ trước',
      content: 'Lúa nhà em đang có hiện tượng vàng lá hàng loạt ở ngọn, không biết là bị bệnh gì ạ? Có bác nào tư vấn giúp em thuốc đặc trị không? Em đã thử một số loại thuốc nhưng chưa hiệu quả lắm. Vườn lúa nhà em rộng khoảng 2 hecta, đã trồng được 3 tháng, gần đây bắt đầu xuất hiện các đốm vàng trên lá. Em rất lo lắng vì đây là vụ mùa quan trọng của gia đình.',
      images: [
        'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800'
      ],
      likes: 24,
      comments: 8,
      shares: 5,
      views: 156,
      category: 'Bệnh cây trồng',
      tags: ['lúa', 'bệnh lá', 'tư vấn'],
      isExpert: false,
      isHot: true,
      isTrending: true,
      commentsList: [
        { 
          id: 101, 
          author: 'KS. Nguyễn Văn A', 
          authorId: 10,
          avatar: 'https://i.pravatar.cc/150?u=expert1',
          isExpert: true, 
          time: '1 giờ trước',
          content: 'Chào bác Tèo, theo ảnh bác chụp thì khả năng cao lúa đang bị đạo ôn lá. Bác nên phun ngay các loại thuốc chứa hoạt chất Tricyclazole như Filia 525SE hoặc Vimonco 750WP. Phun vào sáng sớm hoặc chiều mát, cách nhau 7-10 ngày.',
          likes: 12,
          rewarded: 500
        },
        { 
          id: 102, 
          author: 'Trần Thị Lan', 
          authorId: 2,
          avatar: 'https://i.pravatar.cc/150?u=2',
          isExpert: false, 
          time: '30 phút trước',
          content: 'Nhà em cũng bị tình trạng tương tự, sau khi phun Tricyclazole thì đã khỏi. Các bác thử xem nhé!',
          likes: 3,
          rewarded: 0
        }
      ]
    },
    {
      id: 2,
      author: 'Phạm Văn Hùng',
      authorId: 3,
      avatar: 'https://i.pravatar.cc/150?u=3',
      time: '5 giờ trước',
      content: 'Chia sẻ kinh nghiệm bón phân cho cây xoài giai đoạn ra hoa. Mình đã thử nghiệm và đạt kết quả tốt với công thức NPK 12-12-17 kết hợp với phân hữu cơ. Giai đoạn này rất quan trọng, cần bón đúng thời điểm và liều lượng để đảm bảo cây ra hoa đều và tỷ lệ đậu quả cao.',
      images: ['https://images.unsplash.com/photo-1591031826213-c3260701884c?auto=format&fit=crop&q=80&w=800'],
      likes: 45,
      comments: 15,
      shares: 12,
      views: 289,
      category: 'Phân bón',
      tags: ['xoài', 'phân bón', 'kinh nghiệm'],
      isExpert: false,
      isHot: false,
      isTrending: true,
      commentsList: [
        { 
          id: 201, 
          author: 'KS. Lê Văn B', 
          authorId: 11,
          avatar: 'https://i.pravatar.cc/150?u=expert2',
          isExpert: true, 
          time: '3 giờ trước',
          content: 'Cảm ơn bác đã chia sẻ! Công thức này rất phù hợp. Ngoài ra, các bác nên bổ sung thêm canxi và boron để tăng tỷ lệ đậu quả.',
          likes: 8,
          rewarded: 300
        }
      ]
    },
    {
      id: 3,
      author: 'Nguyễn Thị Mai',
      authorId: 4,
      avatar: 'https://i.pravatar.cc/150?u=4',
      time: '1 ngày trước',
      content: 'Ai có kinh nghiệm trị sâu đục thân trên cây thanh long không ạ? Vườn nhà em bị nhiễm nặng, cần tư vấn gấp!',
      image: 'https://images.unsplash.com/photo-1621606450007-8277f51d21c6?auto=format&fit=crop&q=80&w=800',
      likes: 18,
      comments: 6,
      shares: 3,
      views: 98,
      category: 'Sâu bệnh',
      tags: ['thanh long', 'sâu đục thân', 'cần giúp'],
      isExpert: false,
      isHot: true,
      isTrending: false,
      commentsList: []
    },
    {
      id: 4,
      author: 'KS. Trần Văn C',
      authorId: 12,
      avatar: 'https://i.pravatar.cc/150?u=expert3',
      time: '3 ngày trước',
      content: 'Bài viết chuyên sâu về kỹ thuật trồng lúa thông minh áp dụng công nghệ 4.0. Mình sẽ chia sẻ chi tiết về hệ thống tưới tự động, giám sát IoT và ứng dụng AI trong nông nghiệp.',
      images: ['https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800'],
      likes: 89,
      comments: 23,
      shares: 34,
      views: 567,
      category: 'Kỹ thuật',
      tags: ['lúa', 'IoT', 'AI', 'nông nghiệp 4.0'],
      isExpert: true,
      isHot: true,
      isTrending: true,
      commentsList: []
    }
  ])

  const topExperts = [
    { id: 10, name: 'KS. Nguyễn Văn A', avatar: 'https://i.pravatar.cc/150?u=expert1', solved: 245, rating: 4.9, category: 'Bệnh cây trồng', points: 5240, rank: 1 },
    { id: 11, name: 'KS. Lê Văn B', avatar: 'https://i.pravatar.cc/150?u=expert2', solved: 189, rating: 4.8, category: 'Phân bón', points: 4120, rank: 2 },
    { id: 12, name: 'KS. Trần Văn C', avatar: 'https://i.pravatar.cc/150?u=expert3', solved: 312, rating: 5.0, category: 'Kỹ thuật', points: 5980, rank: 1 },
    { id: 13, name: 'KS. Phạm Thị D', avatar: 'https://i.pravatar.cc/150?u=expert4', solved: 167, rating: 4.7, category: 'Sâu bệnh', points: 3210, rank: 3 },
  ]

  const leaderboard = [
    { rank: 1, name: 'KS. Trần Văn C', avatar: 'https://i.pravatar.cc/150?u=expert3', points: 5980, posts: 45, likes: 1200, badge: '🥇' },
    { rank: 2, name: 'KS. Nguyễn Văn A', avatar: 'https://i.pravatar.cc/150?u=expert1', points: 5240, posts: 38, likes: 980, badge: '🥈' },
    { rank: 3, name: 'KS. Lê Văn B', avatar: 'https://i.pravatar.cc/150?u=expert2', points: 4120, posts: 32, likes: 750, badge: '🥉' },
    { rank: 4, name: 'Nguyễn Thị Lan', avatar: 'https://i.pravatar.cc/150?u=4', points: 3560, posts: 28, likes: 620, badge: '⭐' },
    { rank: 5, name: 'Phạm Văn Hùng', avatar: 'https://i.pravatar.cc/150?u=3', points: 2890, posts: 25, likes: 540, badge: '⭐' },
  ]

  const trendingTopics = [
    { name: 'Đạo ôn lúa', count: 156, trend: 'up' },
    { name: 'Phân bón NPK', count: 98, trend: 'up' },
    { name: 'Sâu đục thân', count: 87, trend: 'down' },
    { name: 'Tưới tiết kiệm', count: 76, trend: 'up' },
    { name: 'Xoài Cát Chu', count: 65, trend: 'up' },
  ]

  const categories = ['Tất cả', 'Bệnh cây trồng', 'Phân bón', 'Sâu bệnh', 'Kỹ thuật', 'Thị trường', 'Khác']
  const [selectedCategory, setSelectedCategory] = useState('Tất cả')

  const handleCreatePost = () => {
    if (!newPost.trim()) {
      showError('Vui lòng nhập nội dung bài đăng')
      return
    }

    const post = {
      id: Date.now(),
      author: 'Bạn',
      authorId: 999,
      avatar: 'https://i.pravatar.cc/150?u=me',
      time: 'Vừa xong',
      content: newPost,
      likes: 0,
      comments: 0,
      shares: 0,
      views: 0,
      category: 'Khác',
      tags: [],
      isExpert: false,
      isHot: false,
      isTrending: false,
      commentsList: []
    }

    setPosts([post, ...posts])
    setNewPost('')
    showSuccess('Đăng bài thành công!')
  }

  const handleEditPost = (post) => {
    setEditingPost(post)
    setEditPostContent(post.content)
  }

  const handleSaveEdit = () => {
    if (!editPostContent.trim()) {
      showError('Vui lòng nhập nội dung bài đăng')
      return
    }

    setPosts(posts.map(p => 
      p.id === editingPost.id 
        ? { ...p, content: editPostContent }
        : p
    ))
    setEditingPost(null)
    setEditPostContent('')
    showSuccess('Đã cập nhật bài viết!')
  }

  const handleDeletePost = (postId) => {
    if (window.confirm('Bạn có chắc muốn xóa bài viết này?')) {
      setPosts(posts.filter(p => p.id !== postId))
      if (selectedPost?.id === postId) {
        setSelectedPost(null)
      }
      showSuccess('Đã xóa bài viết!')
    }
  }

  const handleLike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        const isLiked = likedPosts.has(postId)
        return {
          ...post,
          likes: isLiked ? post.likes - 1 : post.likes + 1
        }
      }
      return post
    }))
    
    const newLiked = new Set(likedPosts)
    if (newLiked.has(postId)) {
      newLiked.delete(postId)
      showInfo('Đã bỏ thích')
    } else {
      newLiked.add(postId)
      showSuccess('Đã thích bài viết!')
    }
    setLikedPosts(newLiked)
  }

  const handleBookmark = (postId) => {
    const newBookmarked = new Set(bookmarkedPosts)
    if (newBookmarked.has(postId)) {
      newBookmarked.delete(postId)
      showInfo('Đã bỏ lưu bài viết')
    } else {
      newBookmarked.add(postId)
      showSuccess('Đã lưu bài viết!')
    }
    setBookmarkedPosts(newBookmarked)
  }

  const handleFollow = (userId) => {
    const newFollowed = new Set(followedUsers)
    if (newFollowed.has(userId)) {
      newFollowed.delete(userId)
      showInfo('Đã bỏ theo dõi')
    } else {
      newFollowed.add(userId)
      showSuccess('Đã theo dõi!')
    }
    setFollowedUsers(newFollowed)
  }

  const handleShare = (postId) => {
    if (navigator.share) {
      navigator.share({
        title: 'Bài viết từ AgriSmart Community',
        text: 'Xem bài viết thú vị này!',
        url: window.location.href
      }).then(() => showSuccess('Đã chia sẻ!'))
        .catch(() => showError('Không thể chia sẻ'))
    } else {
      navigator.clipboard.writeText(window.location.href)
      showSuccess('Đã sao chép link!')
    }
  }

  const handleAddComment = (postId) => {
    const commentText = newComment[postId]
    if (!commentText?.trim()) {
      showError('Vui lòng nhập bình luận')
      return
    }

    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: post.comments + 1,
          commentsList: [
            ...post.commentsList,
            {
              id: Date.now(),
              author: 'Bạn',
              authorId: 999,
              avatar: 'https://i.pravatar.cc/150?u=me',
              isExpert: false,
              time: 'Vừa xong',
              content: commentText,
              likes: 0,
              rewarded: 0
            }
          ]
        }
      }
      return post
    }))

    setNewComment({ ...newComment, [postId]: '' })
    setExpandedComments(new Set([...expandedComments, postId]))
    showSuccess('Bình luận thành công!')
  }

  const toggleComments = (postId) => {
    const newExpanded = new Set(expandedComments)
    if (newExpanded.has(postId)) {
      newExpanded.delete(postId)
    } else {
      newExpanded.add(postId)
    }
    setExpandedComments(newExpanded)
  }

  const filteredPosts = posts.filter(post => {
    const matchFilter = activeFilter === 'all' || 
      (activeFilter === 'trending' && post.isTrending) ||
      (activeFilter === 'hot' && post.isHot) ||
      (activeFilter === 'newest' && !post.isHot && !post.isTrending)
    
    const matchCategory = selectedCategory === 'Tất cả' || post.category === selectedCategory
    const matchSearch = searchQuery === '' || 
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchFilter && matchCategory && matchSearch
  })

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (activeFilter === 'trending') return b.likes + b.comments - (a.likes + a.comments)
    if (activeFilter === 'hot') return b.views - a.views
    return b.id - a.id // newest first
  })

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header với Search và Filters */}
        <div className="mb-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-2">Cộng Đồng Nông Dân</h1>
              <p className="text-sm text-gray-500 font-medium">Chia sẻ kinh nghiệm, tư vấn và học hỏi cùng nhau</p>
            </div>
            <Link 
              to="/ai-chat"
              className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-2xl font-bold hover:shadow-xl hover:shadow-emerald-500/50 transition-all duration-300 active:scale-[0.98] group"
            >
              <SparklesIcon className="w-5 h-5" />
              <span>AI Chẩn đoán</span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-14 pr-5 py-4 bg-white border border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 text-base font-medium outline-none"
              placeholder="Tìm kiếm bài viết, tags, người dùng..."
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3">
            {[
              { id: 'all', label: 'Tất cả', icon: UsersIcon },
              { id: 'trending', label: 'Đang hot', icon: FireIcon },
              { id: 'hot', label: 'Nổi bật', icon: ArrowTrendingUpIcon },
              { id: 'newest', label: 'Mới nhất', icon: ClockIcon }
            ].map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200/50'
                    : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 border border-gray-200'
                }`}
              >
                <filter.icon className="w-4 h-4" />
                {filter.label}
              </button>
            ))}
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl font-bold text-xs transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-emerald-100 hover:text-emerald-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* Create Post */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 hover-lift">
              <div className="flex gap-4 mb-4">
                <img src="https://i.pravatar.cc/150?u=me" alt="me" className="w-12 h-12 rounded-full border-2 border-emerald-100 flex-shrink-0 ring-2 ring-transparent hover:ring-emerald-200 transition-all duration-300 hover:scale-110" />
                <textarea 
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  placeholder="Bác đang gặp vấn đề gì với cây trồng? Đăng bài để nhận tư vấn..."
                  className="flex-1 bg-gray-50 rounded-2xl p-4 border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white resize-none h-24 text-sm transition-all duration-300 font-medium placeholder:text-gray-400 focus:scale-[1.02]"
                ></textarea>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 pt-4 border-t border-gray-100">
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 text-gray-500 hover:text-emerald-600 transition-colors duration-200 px-3 py-2 rounded-xl hover:bg-emerald-50">
                    <CameraIcon className="w-5 h-5" />
                    <span className="text-sm font-medium">Ảnh/Video</span>
                  </button>
                  <Link to="/ai-chat" className="flex items-center gap-2 text-gray-500 hover:text-emerald-600 transition-colors duration-200 px-3 py-2 rounded-xl hover:bg-emerald-50">
                    <SparklesIcon className="w-5 h-5" />
                    <span className="text-sm font-medium">AI Chẩn đoán</span>
                  </Link>
                </div>
                <button 
                  onClick={handleCreatePost}
                  className="px-6 py-2.5 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 shadow-lg shadow-emerald-200/50 active:scale-[0.98] self-start sm:self-auto relative overflow-hidden group hover:-translate-y-1"
                >
                  <span className="relative z-10">Đăng bài</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>

            {/* Feed */}
            {sortedPosts.length > 0 ? (
              sortedPosts.map((post, idx) => (
                <div 
                  key={post.id} 
                  className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover-lift"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <div className="p-6">
                    {/* Post Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div className="relative">
                          <img 
                            src={post.avatar} 
                            alt={post.author} 
                            className="w-12 h-12 rounded-full border-2 border-emerald-100 flex-shrink-0 cursor-pointer hover:ring-2 hover:ring-emerald-300 transition-all duration-200" 
                            onMouseEnter={() => setHoveredUserId(post.authorId)}
                            onMouseLeave={() => setHoveredUserId(null)}
                          />
                          {hoveredUserId === post.authorId && (
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-900 text-white p-3 rounded-2xl shadow-xl z-50 min-w-[200px] animate-fade-in">
                              <div className="flex items-center gap-3 mb-2">
                                <img src={post.avatar} alt={post.author} className="w-12 h-12 rounded-full border-2 border-white" />
                                <div>
                                  <div className="flex items-center gap-1">
                                    <h5 className="font-bold text-sm">{post.author}</h5>
                                    {post.isExpert && <CheckBadgeIcon className="w-4 h-4 text-blue-400" />}
                                  </div>
                                  <p className="text-xs text-gray-300 mt-0.5">Thành viên từ 2025</p>
                                </div>
                              </div>
                              <div className="flex items-center justify-between pt-2 border-t border-white/20 text-xs">
                                <div className="text-center">
                                  <div className="font-bold">{post.likes}</div>
                                  <div className="text-gray-300">Thích</div>
                                </div>
                                <div className="text-center">
                                  <div className="font-bold">{post.comments}</div>
                                  <div className="text-gray-300">Bình luận</div>
                                </div>
                                <div className="text-center">
                                  <div className="font-bold">{post.views}</div>
                                  <div className="text-gray-300">Lượt xem</div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-gray-900 truncate">{post.author}</h4>
                            {post.isExpert && <CheckBadgeIcon className="w-5 h-5 text-blue-500 flex-shrink-0" />}
                            {(post.isHot || post.isTrending) && (
                              <span className="px-2 py-0.5 bg-orange-100 text-orange-700 rounded-full text-[10px] font-bold uppercase">
                                {post.isHot ? 'HOT' : 'TRENDING'}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-400 mt-0.5">
                            <span>{post.time}</span>
                            <span>•</span>
                            <span>{post.views} lượt xem</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {post.authorId === currentUserId ? (
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => handleEditPost(post)}
                              className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200"
                              title="Chỉnh sửa"
                            >
                              <PencilSquareIcon className="w-5 h-5" />
                            </button>
                            <button
                              onClick={() => handleDeletePost(post.id)}
                              className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200"
                              title="Xóa"
                            >
                              <TrashIcon className="w-5 h-5" />
                            </button>
                          </div>
                        ) : (
                          <>
                            {!followedUsers.has(post.authorId) && (
                              <button
                                onClick={() => handleFollow(post.authorId)}
                                className="p-2 text-gray-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all duration-200"
                                title="Theo dõi"
                              >
                                <UserPlusIcon className="w-5 h-5" />
                              </button>
                            )}
                            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200">
                              <EllipsisHorizontalIcon className="w-5 h-5" />
                            </button>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Category & Tags */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold">{post.category}</span>
                      {post.tags.map((tag, i) => (
                        <span key={i} className="flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium">
                          <TagIcon className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Post Content */}
                    <div className="mb-4">
                      {editingPost?.id === post.id ? (
                        <div className="space-y-3">
                          <textarea
                            value={editPostContent}
                            onChange={(e) => setEditPostContent(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white resize-none text-sm transition-all duration-300 font-medium outline-none"
                            rows="4"
                          />
                          <div className="flex gap-2">
                            <button
                              onClick={handleSaveEdit}
                              className="px-4 py-2 bg-emerald-600 text-white rounded-xl font-bold text-sm hover:bg-emerald-700 transition-colors duration-200"
                            >
                              Lưu
                            </button>
                            <button
                              onClick={() => {
                                setEditingPost(null)
                                setEditPostContent('')
                              }}
                              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-xl font-bold text-sm hover:bg-gray-300 transition-colors duration-200"
                            >
                              Hủy
                            </button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            {expandedPosts.has(post.id) || post.content.length <= 150
                              ? post.content
                              : `${post.content.substring(0, 150)}...`
                            }
                          </p>
                          {post.content.length > 150 && (
                            <button
                              onClick={() => {
                                const newExpanded = new Set(expandedPosts)
                                if (newExpanded.has(post.id)) {
                                  newExpanded.delete(post.id)
                                } else {
                                  newExpanded.add(post.id)
                                }
                                setExpandedPosts(newExpanded)
                              }}
                              className="text-emerald-600 hover:text-emerald-700 text-sm font-bold mt-2 hover:underline"
                            >
                              {expandedPosts.has(post.id) ? 'Thu gọn' : 'Đọc thêm'}
                            </button>
                          )}
                          <button
                            onClick={() => setSelectedPost(post)}
                            className="text-emerald-600 hover:text-emerald-700 text-sm font-bold mt-2 ml-3 hover:underline"
                          >
                            Xem chi tiết →
                          </button>
                        </>
                      )}
                    </div>
                    {/* Image Gallery */}
                    {((post.images && post.images.length > 0) || post.image) && (
                      <div className="mb-4">
                        {(() => {
                          const images = post.images || (post.image ? [post.image] : [])
                          if (images.length === 1) {
                            return (
                              <div 
                                className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
                                onClick={() => {
                                  setSelectedPost(post)
                                  setSelectedImageIndex(0)
                                }}
                              >
                                <img src={images[0]} alt="post" className="w-full h-auto max-h-96 object-cover hover:scale-[1.02] transition-transform duration-500" />
                              </div>
                            )
                          } else {
                            return (
                              <div className={`grid gap-2 rounded-2xl overflow-hidden ${images.length === 2 ? 'grid-cols-2' : images.length === 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
                                {images.slice(0, 4).map((img, idx) => (
                                  <div
                                    key={idx}
                                    className="relative cursor-pointer group overflow-hidden rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                                    onClick={() => {
                                      setSelectedPost(post)
                                      setSelectedImageIndex(idx)
                                    }}
                                  >
                                    <img 
                                      src={img} 
                                      alt={`post ${idx + 1}`} 
                                      className={`w-full h-full object-cover hover:scale-110 transition-transform duration-500 ${
                                        images.length > 4 && idx === 3 ? 'opacity-60' : ''
                                      }`}
                                      style={{ aspectRatio: '1/1', maxHeight: '200px' }}
                                    />
                                    {images.length > 4 && idx === 3 && (
                                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">+{images.length - 4}</span>
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )
                          }
                        })()}
                      </div>
                    )}

                    {/* Post Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-4">
                        <button 
                          onClick={() => handleLike(post.id)}
                          className={`flex items-center gap-2 transition-all duration-200 px-3 py-2 rounded-xl ${
                            likedPosts.has(post.id) 
                              ? 'text-emerald-600 bg-emerald-50' 
                              : 'text-gray-500 hover:text-emerald-600 hover:bg-emerald-50'
                          }`}
                        >
                          {likedPosts.has(post.id) ? (
                            <HandThumbUpIconSolid className="w-5 h-5" />
                          ) : (
                            <HandThumbUpIcon className="w-5 h-5" />
                          )}
                          <span className="text-sm font-bold">{post.likes}</span>
                        </button>
                        <button 
                          onClick={() => toggleComments(post.id)}
                          className="flex items-center gap-2 text-gray-500 hover:text-emerald-600 hover:bg-emerald-50 transition-colors duration-200 px-3 py-2 rounded-xl"
                        >
                          <ChatBubbleLeftRightIcon className="w-5 h-5" />
                          <span className="text-sm font-bold">{post.comments}</span>
                        </button>
                        <button 
                          onClick={() => handleShare(post.id)}
                          className="flex items-center gap-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 px-3 py-2 rounded-xl"
                        >
                          <ShareIcon className="w-5 h-5" />
                          <span className="text-sm font-bold">{post.shares}</span>
                        </button>
                      </div>
                      <button
                        onClick={() => handleBookmark(post.id)}
                        className={`p-2 rounded-xl transition-all duration-200 ${
                          bookmarkedPosts.has(post.id)
                            ? 'text-emerald-600 bg-emerald-50'
                            : 'text-gray-500 hover:text-emerald-600 hover:bg-emerald-50'
                        }`}
                        title="Lưu bài viết"
                      >
                        {bookmarkedPosts.has(post.id) ? (
                          <BookmarkIconSolid className="w-5 h-5" />
                        ) : (
                          <BookmarkIcon className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Comments Area */}
                  {expandedComments.has(post.id) && (
                    <div className="bg-gray-50/50 p-5 space-y-4 border-t border-gray-100 animate-fade-in-up">
                      {post.commentsList.length > 0 && (
                        <div className="space-y-3">
                          {post.commentsList.map(comment => (
                            <div key={comment.id} className="flex gap-3">
                              <img src={comment.avatar || 'https://i.pravatar.cc/150?u=expert'} alt={comment.author} className="w-9 h-9 rounded-full border-2 border-white flex-shrink-0" />
                              <div className="flex-1 bg-white p-4 rounded-2xl rounded-tl-none shadow-sm hover:shadow-md transition-shadow duration-200">
                                <div className="flex items-center gap-2 mb-1.5">
                                  <span className="text-sm font-bold text-gray-900">{comment.author}</span>
                                  {comment.isExpert && <CheckBadgeIcon className="w-4 h-4 text-blue-500 flex-shrink-0" />}
                                  <span className="text-xs text-gray-400">{comment.time}</span>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed mb-2">{comment.content}</p>
                                <div className="flex items-center justify-between">
                                  <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-emerald-600 transition-colors">
                                    <HandThumbUpIcon className="w-4 h-4" />
                                    <span>{comment.likes}</span>
                                  </button>
                                  {comment.rewarded > 0 && (
                                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
                                      Đã thưởng {comment.rewarded}đ
                                    </span>
                                  )}
                                  {!comment.isExpert && (
                                    <button 
                                      onClick={() => showSuccess(`Đã tặng thưởng ${comment.rewarded || 500}đ!`)}
                                      className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg hover:bg-emerald-100 transition-colors duration-200 active:scale-95"
                                    >
                                      Tặng thưởng 500đ
                                    </button>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {/* Add Comment Input */}
                      <div className="flex gap-3 pt-2">
                        <img src="https://i.pravatar.cc/150?u=me" alt="me" className="w-9 h-9 rounded-full border-2 border-white flex-shrink-0" />
                        <div className="flex-1 flex gap-2">
                          <input
                            type="text"
                            value={newComment[post.id] || ''}
                            onChange={(e) => setNewComment({ ...newComment, [post.id]: e.target.value })}
                            placeholder="Viết bình luận..."
                            className="flex-1 px-4 py-2 bg-white rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none text-sm"
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                handleAddComment(post.id)
                              }
                            }}
                          />
                          <button
                            onClick={() => handleAddComment(post.id)}
                            className="px-4 py-2 bg-emerald-600 text-white rounded-xl font-bold text-sm hover:bg-emerald-700 transition-colors duration-200 active:scale-95"
                          >
                            Gửi
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <EmptyState
                icon={<ChatBubbleLeftRightIcon className="w-16 h-16 text-gray-400 mx-auto" />}
                title="Không tìm thấy bài viết"
                description="Hãy thử điều chỉnh bộ lọc hoặc tìm kiếm của bạn."
                buttonText="Xóa bộ lọc"
                onButtonClick={() => {
                  setActiveFilter('all')
                  setSelectedCategory('Tất cả')
                  setSearchQuery('')
                }}
              />
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Real-time Stats */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-6 rounded-3xl text-white shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <ChartBarIcon className="w-6 h-6 text-blue-200" />
                <h3 className="text-lg font-bold">Thống Kê</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div>
                    <p className="text-xs text-blue-200 mb-1">Tổng bài viết</p>
                    <p className="text-2xl font-bold">{posts.length}</p>
                  </div>
                  <div className="text-3xl">📝</div>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div>
                    <p className="text-xs text-blue-200 mb-1">Tổng lượt thích</p>
                    <p className="text-2xl font-bold">{posts.reduce((sum, p) => sum + p.likes, 0).toLocaleString('vi-VN')}</p>
                  </div>
                  <div className="text-3xl">❤️</div>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div>
                    <p className="text-xs text-blue-200 mb-1">Thành viên online</p>
                    <p className="text-2xl font-bold">1,234</p>
                  </div>
                  <div className="text-3xl">👥</div>
                </div>
              </div>
            </div>

            {/* Trending Topics */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <FireIcon className="w-5 h-5 text-orange-500" />
                <h3 className="text-lg font-bold text-gray-900">Chủ đề nổi bật</h3>
              </div>
              <div className="space-y-3">
                {trendingTopics.map((topic, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 group cursor-pointer">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">{topic.name}</span>
                        {topic.trend === 'up' && <ArrowTrendingUpIcon className="w-4 h-4 text-emerald-600" />}
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5">{topic.count} bài viết</p>
                    </div>
                    <span className="text-lg font-bold text-gray-300">#{idx + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Experts */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <TrophyIcon className="w-5 h-5 text-yellow-500" />
                <h3 className="text-lg font-bold text-gray-900">Kỹ sư tiêu biểu</h3>
              </div>
              <div className="space-y-3">
                {topExperts.map(expert => (
                  <div key={expert.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 group">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className="relative">
                        <img src={expert.avatar} className="w-12 h-12 rounded-full border-2 border-emerald-100 flex-shrink-0" />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1">
                          <h5 className="text-sm font-bold text-gray-900 truncate">{expert.name}</h5>
                          <CheckBadgeIcon className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        </div>
                        <div className="flex items-center gap-2 mt-0.5">
                          <div className="flex items-center gap-0.5">
                            <StarIcon className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                            <span className="text-xs font-bold text-gray-600">{expert.rating}</span>
                          </div>
                          <span className="text-xs text-gray-400">•</span>
                          <span className="text-xs text-gray-400">{expert.solved} ca</span>
                        </div>
                        <p className="text-[10px] text-gray-500 mt-0.5">{expert.category}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleFollow(expert.id)}
                      className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-all duration-200 flex-shrink-0 ml-2 ${
                        followedUsers.has(expert.id)
                          ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                          : 'text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 border border-emerald-200'
                      }`}
                    >
                      {followedUsers.has(expert.id) ? 'Đang theo' : 'Theo dõi'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Chat CTA */}
            <div className="bg-gradient-to-br from-emerald-600 to-green-500 p-6 rounded-3xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full"></div>
              <div className="relative z-10">
                <SparklesIcon className="w-10 h-10 mb-4 text-emerald-200" />
                <h4 className="text-lg font-bold mb-2">AI Chẩn đoán</h4>
                <p className="text-sm opacity-90 mb-5 leading-relaxed">Chụp ảnh lá cây để nhận kết quả phân tích tức thì từ AI của chúng tôi.</p>
                <Link 
                  to="/ai-chat"
                  className="block w-full py-3 bg-white text-emerald-600 rounded-xl font-bold hover:bg-gray-100 transition-all duration-200 text-center shadow-lg active:scale-[0.98]"
                >
                  Trải nghiệm ngay
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Post Detail Modal */}
      {selectedPost && (
        <Modal
          isOpen={!!selectedPost}
          onClose={() => setSelectedPost(null)}
          title="Chi tiết bài viết"
          size="lg"
        >
          <div className="space-y-6">
            {/* Author Info */}
            <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
              <img src={selectedPost.avatar} alt={selectedPost.author} className="w-16 h-16 rounded-full border-2 border-emerald-100" />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-gray-900">{selectedPost.author}</h3>
                  {selectedPost.isExpert && <CheckBadgeIcon className="w-6 h-6 text-blue-500" />}
                </div>
                <p className="text-sm text-gray-500 mt-1">{selectedPost.time} • {selectedPost.views} lượt xem</p>
              </div>
              <button
                onClick={() => setSelectedPost(null)}
                className="p-2 text-gray-500 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Category & Tags */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold">{selectedPost.category}</span>
              {selectedPost.tags.map((tag, i) => (
                <span key={i} className="flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium">
                  <TagIcon className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Content */}
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed text-base whitespace-pre-wrap">{selectedPost.content}</p>
            </div>

            {/* Image Gallery */}
            {((selectedPost.images && selectedPost.images.length > 0) || selectedPost.image) && (
              <div className="space-y-3">
                {(selectedPost.images?.length > 1 ? selectedPost.images : [selectedPost.images?.[0] || selectedPost.image]).map((img, idx) => (
                  <div key={idx} className="rounded-2xl overflow-hidden border border-gray-100 shadow-lg">
                    <img src={img} alt={`post ${idx + 1}`} className="w-full h-auto max-h-[600px] object-cover" />
                  </div>
                ))}
              </div>
            )}

            {/* Stats */}
            <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 text-gray-600">
                <HandThumbUpIcon className="w-5 h-5" />
                <span className="font-bold">{selectedPost.likes}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <ChatBubbleLeftRightIcon className="w-5 h-5" />
                <span className="font-bold">{selectedPost.comments}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <ShareIcon className="w-5 h-5" />
                <span className="font-bold">{selectedPost.shares}</span>
              </div>
            </div>

            {/* Comments */}
            {selectedPost.commentsList && selectedPost.commentsList.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <h4 className="font-bold text-gray-900">Bình luận ({selectedPost.commentsList.length})</h4>
                {selectedPost.commentsList.map(comment => (
                  <div key={comment.id} className="flex gap-3 p-4 bg-gray-50 rounded-2xl">
                    <img src={comment.avatar} alt={comment.author} className="w-10 h-10 rounded-full border-2 border-white flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-gray-900">{comment.author}</span>
                        {comment.isExpert && <CheckBadgeIcon className="w-4 h-4 text-blue-500" />}
                        <span className="text-xs text-gray-400">{comment.time}</span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{comment.content}</p>
                      {comment.rewarded > 0 && (
                        <span className="inline-block mt-2 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
                          Đã thưởng {comment.rewarded}đ
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Modal>
      )}
    </PageTransition>
  )
}

export default CommunityPage
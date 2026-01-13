import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { setPageSEO, addStructuredData, schemas } from '../utils/seo'

/**
 * Hook to manage SEO for each page
 */
export const useSEO = (seoConfig) => {
  const location = useLocation()
  
  useEffect(() => {
    if (seoConfig) {
      const fullUrl = window.location.origin + location.pathname
      
      setPageSEO({
        title: seoConfig.title,
        description: seoConfig.description,
        image: seoConfig.image,
        url: fullUrl,
        keywords: seoConfig.keywords,
      })
      
      // Add structured data if provided
      if (seoConfig.structuredData) {
        const script = addStructuredData(seoConfig.structuredData)
        
        return () => {
          // Cleanup: remove structured data script on unmount
          if (script && script.parentNode) {
            script.parentNode.removeChild(script)
          }
        }
      }
    }
  }, [location.pathname, seoConfig])
}

/**
 * Default SEO configs for common routes
 */
export const defaultSEO = {
  home: {
    title: 'AgriSmart - Hệ sinh thái số cho Nông nghiệp Việt Nam',
    description: 'Kết nối nông dân, doanh nghiệp và người tiêu dùng. Sàn giao dịch vật tư nông nghiệp, cộng đồng chia sẻ kinh nghiệm, nhật ký số và AI chẩn đoán bệnh cây trồng.',
    keywords: 'nông nghiệp, nông nghiệp thông minh, vật tư nông nghiệp, cộng đồng nông dân, AI nông nghiệp',
    structuredData: schemas.website(),
  },
  
  marketplace: {
    title: 'Sàn Vật Tư Nông Nghiệp - AgriSmart',
    description: 'Mua sắm vật tư nông nghiệp chất lượng cao với giá tốt nhất. Phân bón, thuốc bảo vệ thực vật, hạt giống và thiết bị nông nghiệp.',
    keywords: 'vật tư nông nghiệp, phân bón, thuốc bảo vệ thực vật, hạt giống, thiết bị nông nghiệp',
  },
  
  community: {
    title: 'Cộng Đồng Nông Dân - Chia Sẻ Kinh Nghiệm - AgriSmart',
    description: 'Tham gia cộng đồng nông dân lớn nhất Việt Nam. Chia sẻ kinh nghiệm, hỏi đáp, và học hỏi từ các chuyên gia nông nghiệp.',
    keywords: 'cộng đồng nông dân, chia sẻ kinh nghiệm, hỏi đáp nông nghiệp, diễn đàn nông nghiệp',
  },
  
  aiChat: {
    title: 'AI Chẩn Đoán Bệnh Cây Trồng - AgriSmart',
    description: 'Sử dụng trí tuệ nhân tạo để chẩn đoán bệnh cây trồng nhanh chóng và chính xác. Nhận phác đồ điều trị ngay tức thì.',
    keywords: 'AI nông nghiệp, chẩn đoán bệnh cây trồng, AI chẩn đoán, bác sỹ cây trồng',
  },
}


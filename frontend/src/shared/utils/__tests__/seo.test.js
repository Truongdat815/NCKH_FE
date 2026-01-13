import { describe, it, expect, beforeEach, vi } from 'vitest'
import { updateMetaTag, updateTitle, updateDescription, setPageSEO, schemas } from '../seo'

describe('SEO Utils', () => {
  beforeEach(() => {
    // Clear document head before each test
    document.head.innerHTML = ''
  })

  describe('updateMetaTag', () => {
    it('should create a new meta tag if it does not exist', () => {
      updateMetaTag('test-name', 'test-content')
      const meta = document.querySelector('meta[name="test-name"]')
      expect(meta).toBeTruthy()
      expect(meta.getAttribute('content')).toBe('test-content')
    })

    it('should update existing meta tag', () => {
      const meta = document.createElement('meta')
      meta.setAttribute('name', 'test-name')
      meta.setAttribute('content', 'old-content')
      document.head.appendChild(meta)

      updateMetaTag('test-name', 'new-content')
      expect(meta.getAttribute('content')).toBe('new-content')
    })

    it('should handle property attribute', () => {
      updateMetaTag('og:title', 'Test Title', true)
      const meta = document.querySelector('meta[property="og:title"]')
      expect(meta).toBeTruthy()
      expect(meta.getAttribute('content')).toBe('Test Title')
    })
  })

  describe('updateTitle', () => {
    it('should update document title and og:title', () => {
      updateTitle('New Title')
      expect(document.title).toBe('New Title')
      
      const ogTitle = document.querySelector('meta[property="og:title"]')
      expect(ogTitle).toBeTruthy()
      expect(ogTitle.getAttribute('content')).toBe('New Title')
    })
  })

  describe('updateDescription', () => {
    it('should update description meta tags', () => {
      updateDescription('Test description')
      
      const meta = document.querySelector('meta[name="description"]')
      expect(meta).toBeTruthy()
      expect(meta.getAttribute('content')).toBe('Test description')
    })
  })

  describe('setPageSEO', () => {
    it('should set all SEO properties', () => {
      setPageSEO({
        title: 'Page Title',
        description: 'Page Description',
        image: 'https://example.com/image.jpg',
        url: 'https://example.com/page',
        keywords: 'test, keywords',
      })

      expect(document.title).toBe('Page Title')
      expect(document.querySelector('meta[name="description"]').getAttribute('content')).toBe('Page Description')
      expect(document.querySelector('meta[name="keywords"]').getAttribute('content')).toBe('test, keywords')
    })
  })

  describe('schemas', () => {
    it('should generate organization schema', () => {
      const schema = schemas.organization({
        name: 'Test Org',
        url: 'https://test.com',
      })

      expect(schema['@context']).toBe('https://schema.org')
      expect(schema['@type']).toBe('Organization')
      expect(schema.name).toBe('Test Org')
      expect(schema.url).toBe('https://test.com')
    })

    it('should generate product schema', () => {
      const schema = schemas.product({
        name: 'Test Product',
        description: 'Test Description',
        image: 'https://test.com/image.jpg',
        price: '100000',
      })

      expect(schema['@type']).toBe('Product')
      expect(schema.name).toBe('Test Product')
      expect(schema.offers['@type']).toBe('Offer')
      expect(schema.offers.price).toBe('100000')
    })
  })
})


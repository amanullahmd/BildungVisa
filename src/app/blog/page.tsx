'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, Calendar, Clock, ArrowRight, BookOpen, Filter, TrendingUp, Star, Eye, User, FileText } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  authorImage: string
  publishDate: string
  readTime: string
  category: string
  tags: string[]
  featured: boolean
  views: number
  likes: number
  image: string
}

interface Category {
  id: string
  name: string
  count: number
  color: string
}

const categories: Category[] = [
  { id: 'all', name: 'All Articles', count: 24, color: 'bg-white border border-black text-black' },
  { id: 'study-visa', name: 'Study Visa', count: 8, color: 'bg-white border border-black text-black' },
  { id: 'work-permit', name: 'Work Permit', count: 6, color: 'bg-white border border-black text-black' },
  { id: 'ausbildung', name: 'Ausbildung', count: 5, color: 'bg-white border border-black text-black' },
  { id: 'life-in-europe', name: 'Life in Europe', count: 3, color: 'bg-white border border-black text-black' },
  { id: 'success-stories', name: 'Success Stories', count: 2, color: 'bg-white border border-black text-black' }
]

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Complete Guide to German Student Visa Application 2025',
    excerpt: 'Everything you need to know about applying for a German student visa, including requirements, documents, and step-by-step process.',
    content: '',
    author: 'Dr. Sarah Ahmed',
    authorImage: '/images/team/team-member-2.svg',
    publishDate: '2025-01-15',
    readTime: '8 min read',
    category: 'study-visa',
    tags: ['Germany', 'Student Visa', 'Application Process'],
    featured: true,
    views: 2450,
    likes: 89,
    image: '/images/screenshots/university-campus.svg'
  },
  {
    id: '2',
    title: 'Top 10 Ausbildung Programs for Bangladeshi Students',
    excerpt: 'Discover the most popular and promising Ausbildung programs that offer excellent career prospects and immigration pathways.',
    content: '',
    author: 'Mohammad Rahman',
    authorImage: '/images/team/team-member-1.svg',
    publishDate: '2025-01-12',
    readTime: '6 min read',
    category: 'ausbildung',
    tags: ['Ausbildung', 'Career', 'Germany'],
    featured: true,
    views: 1890,
    likes: 67,
    image: '/images/services/vocational-training.svg'
  },
  {
    id: '3',
    title: 'EU Blue Card vs National Work Permit: Which is Better?',
    excerpt: 'Compare the benefits, requirements, and application processes of EU Blue Card and national work permits for skilled professionals.',
    content: '',
    author: 'Fatima Khan',
    authorImage: '/images/team/team-member-2.svg',
    publishDate: '2025-01-10',
    readTime: '10 min read',
    category: 'work-permit',
    tags: ['EU Blue Card', 'Work Permit', 'Skilled Migration'],
    featured: false,
    views: 1654,
    likes: 45,
    image: '/images/screenshots/eu-workplace.svg'
  },
  {
    id: '4',
    title: 'Living in Germany: A Complete Guide for Bangladeshi Expats',
    excerpt: 'Essential information about housing, healthcare, banking, and cultural adaptation for Bangladeshi immigrants in Germany.',
    content: '',
    author: 'Ahmed Hassan',
    authorImage: '/images/team/team-member-3.svg',
    publishDate: '2025-01-08',
    readTime: '12 min read',
    category: 'life-in-europe',
    tags: ['Germany', 'Expat Life', 'Cultural Guide'],
    featured: false,
    views: 2100,
    likes: 78,
    image: '/images/screenshots/german-city.svg'
  },
  {
    id: '5',
    title: 'Success Story: From Dhaka to Berlin - My Journey',
    excerpt: 'Read about Rashid\'s inspiring journey from a software engineer in Dhaka to landing his dream job in Berlin through our guidance.',
    content: '',
    author: 'Rashid Ahmed',
    authorImage: '/images/team/team-member-1.svg',
    publishDate: '2025-01-05',
    readTime: '7 min read',
    category: 'success-stories',
    tags: ['Success Story', 'Software Engineer', 'Berlin'],
    featured: true,
    views: 3200,
    likes: 156,
    image: '/images/screenshots/berlin-success.svg'
  },
  {
    id: '6',
    title: 'Netherlands Study Visa: Requirements and Process 2025',
    excerpt: 'Complete guide to studying in the Netherlands, including university selection, visa requirements, and application timeline.',
    content: '',
    author: 'Dr. Sarah Ahmed',
    authorImage: '/images/team/team-member-2.svg',
    publishDate: '2025-01-03',
    readTime: '9 min read',
    category: 'study-visa',
    tags: ['Netherlands', 'Student Visa', 'Universities'],
    featured: false,
    views: 1456,
    likes: 52,
    image: '/images/screenshots/dutch-university.svg'
  }
]

const popularTags = [
  'Germany', 'Student Visa', 'Work Permit', 'Ausbildung', 'EU Blue Card',
  'Netherlands', 'Success Stories', 'Application Process', 'Requirements'
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
    filterPosts(categoryId, searchQuery)
  }

  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
    filterPosts(selectedCategory, query)
  }

  const filterPosts = (category: string, search: string) => {
    let filtered = blogPosts

    if (category !== 'all') {
      filtered = filtered.filter(post => post.category === category)
    }

    if (search) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
      )
    }

    setFilteredPosts(filtered)
  }

  const featuredPosts = blogPosts.filter(post => post.featured)
  const recentPosts = blogPosts.slice(0, 5)

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-yellow-500 to-green-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                <BookOpen className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Immigration <span className="text-blue-300">Blog</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest immigration news, guides, and success stories. Get expert insights to help you navigate your European journey.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-white/80">Expert Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">10K+</div>
                <div className="text-white/80">Monthly Readers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">Weekly</div>
                <div className="text-white/80">New Content</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#featured" className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Featured Articles
              </Link>
              <Link href="#categories" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Browse Categories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-8">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="w-full px-6 py-4 rounded-2xl text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none border-2 border-gray-200 bg-white/95 backdrop-blur-sm font-medium text-lg"
                />
              </div>
              <div className="flex gap-4">
                <Filter className="w-5 h-5 text-gray-500" />
                <select
                  value={selectedCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className="px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 bg-white shadow-sm font-medium"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-3 mb-8" id="categories">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-md ${
                      selectedCategory === category.id
                        ? 'bg-gradient-professional text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50 border-2 border-gray-200'
                    }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section id="featured" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                  <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-green-600 bg-clip-text text-transparent">
                    Featured Articles
                  </span>
                </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our most popular and helpful guides to help you succeed in your European journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="relative h-48 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center hover:scale-110 transition-transform duration-500">
                    <BookOpen className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {categories.find(cat => cat.id === post.category)?.name}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-red-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <div className="w-4 h-4 bg-gray-300 rounded-full mr-1 flex items-center justify-center">
                          <User className="w-2 h-2 text-gray-600" />
                        </div>
                        {post.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.publishDate).toLocaleDateString()}
                      </span>
                    </div>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {post.views.toLocaleString()}
                      </span>
                      <span className="flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        {post.likes}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="bg-gradient-professional text-white px-4 py-2 rounded-lg font-semibold hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 flex items-center shadow-md"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-bold">
                  <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-green-600 bg-clip-text text-transparent">
                    {selectedCategory === 'all' ? 'All Articles' : categories.find(cat => cat.id === selectedCategory)?.name}
                  </span>
                  <span className="text-gray-500 ml-2">({filteredPosts.length})</span>
                </h2>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <TrendingUp className="w-4 h-4" />
                  <span>Sorted by popularity</span>
                </div>
              </div>

              <div className="space-y-8">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="relative overflow-hidden rounded-lg">
                          <div className="w-full h-48 md:h-32 bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center hover:scale-110 transition-transform duration-500">
                            <FileText className="w-12 h-12 text-white" />
                          </div>
                          <div className="absolute top-2 left-2">
                            <span className="bg-gradient-professional text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                              {categories.find(cat => cat.id === post.category)?.name}
                            </span>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                      </div>
                      
                      <div className="md:w-2/3 space-y-3 p-6">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map(tag => (
                            <span key={tag} className="bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium border border-yellow-300">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-2">
                              <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center">
                                <User className="w-3 h-3 text-gray-600" />
                              </div>
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <Link 
                            href={`/blog/${post.id}`}
                            className="bg-gradient-professional text-white px-6 py-2 rounded-lg font-semibold hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 flex items-center shadow-md"
                          >
                            <span>Read More</span>
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="space-y-8">
                {/* Recent Posts */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                      Recent Posts
                    </span>
                  </h3>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <Link key={post.id} href={`/blog/${post.id}`} className="block group">
                        <div className="flex space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300">
                          <div className="relative overflow-hidden rounded-lg flex-shrink-0">
                            <div className="w-15 h-15 bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <FileText className="w-6 h-6 text-white" />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 line-clamp-2 transition-colors duration-300">
                              {post.title}
                            </h4>
                            <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
                              <Calendar className="w-3 h-3" />
                              <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Popular Tags */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-yellow-500 to-green-600 bg-clip-text text-transparent">
                      Popular Tags
                    </span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map(tag => (
                      <button
                        key={tag}
                        onClick={() => handleSearchChange(tag)}
                        className="bg-gradient-to-r from-gray-100 to-gray-200 hover:from-blue-100 hover:to-blue-200 text-gray-700 hover:text-blue-700 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 border border-gray-200 hover:border-blue-300 shadow-sm"
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-professional rounded-2xl shadow-lg p-6 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                    <p className="text-white/90 mb-6 leading-relaxed">
                      Get the latest immigration news and guides delivered to your inbox.
                    </p>
                    <form className="space-y-4">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 rounded-xl text-gray-900 focus:ring-2 focus:ring-white/50 focus:outline-none border-2 border-white/20 bg-white/95 backdrop-blur-sm font-medium"
                      />
                      <button type="submit" className="w-full bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Subscribe Now
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
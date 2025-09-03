'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Clock, Share2, Eye, MessageCircle, ThumbsUp, Facebook, Twitter, Linkedin, Copy, Check, User, BookOpen, FileText } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

interface BlogPost {
  id: string
  title: string
  content: string
  author: string
  authorImage: string
  authorBio: string
  publishDate: string
  readTime: string
  category: string
  tags: string[]
  views: number
  likes: number
  comments: number
  image: string
}

interface RelatedPost {
  id: string
  title: string
  image: string
  category: string
  readTime: string
}

interface Comment {
  id: string
  author: string
  authorImage: string
  content: string
  date: string
  likes: number
}

// Mock data - in a real app, this would come from an API
const getBlogPost = (id: string): BlogPost | null => {
  const posts: { [key: string]: BlogPost } = {
    '1': {
      id: '1',
      title: 'Complete Guide to German Student Visa Application 2025',
      content: `
        <h2>Introduction</h2>
        <p>Germany has become one of the most popular destinations for international students, offering world-class education, affordable tuition fees, and excellent career prospects. If you're a Bangladeshi student planning to study in Germany, this comprehensive guide will walk you through the entire student visa application process.</p>
        
        <h2>Types of German Student Visas</h2>
        <p>There are three main types of student visas for Germany:</p>
        <ul>
          <li><strong>Student Visa (Visum zu Studienzwecken):</strong> For students who have already been accepted to a German university</li>
          <li><strong>Student Applicant Visa (Visum zur Studienbewerbung):</strong> For students who want to apply to universities while in Germany</li>
          <li><strong>Language Course Visa:</strong> For students who need to improve their German language skills before starting their studies</li>
        </ul>
        
        <h2>Requirements for German Student Visa</h2>
        <p>To apply for a German student visa from Bangladesh, you'll need the following documents:</p>
        
        <h3>1. Academic Documents</h3>
        <ul>
          <li>University admission letter or conditional acceptance</li>
          <li>Academic transcripts and certificates</li>
          <li>Proof of previous qualifications</li>
          <li>Language proficiency certificate (IELTS, TOEFL, or German language certificate)</li>
        </ul>
        
        <h3>2. Financial Documents</h3>
        <ul>
          <li>Proof of financial resources (€11,208 per year as of 2025)</li>
          <li>Bank statements for the last 6 months</li>
          <li>Scholarship letter (if applicable)</li>
          <li>Sponsor's financial documents (if sponsored)</li>
        </ul>
        
        <h3>3. Personal Documents</h3>
        <ul>
          <li>Valid passport (with at least 12 months validity)</li>
          <li>Passport-sized photographs</li>
          <li>Completed visa application form</li>
          <li>Travel insurance</li>
          <li>Motivation letter</li>
          <li>CV/Resume</li>
        </ul>
        
        <h2>Step-by-Step Application Process</h2>
        
        <h3>Step 1: Prepare Your Documents</h3>
        <p>Gather all required documents and ensure they are properly translated and notarized. All documents must be in German or English.</p>
        
        <h3>Step 2: Book an Appointment</h3>
        <p>Schedule an appointment at the German Embassy or Consulate in Dhaka. Appointments can be booked online through the embassy's website.</p>
        
        <h3>Step 3: Attend the Interview</h3>
        <p>Attend your visa interview with all required documents. Be prepared to answer questions about your study plans, financial situation, and future goals.</p>
        
        <h3>Step 4: Pay the Visa Fee</h3>
        <p>The visa fee is €75 for students. Payment methods may vary, so check with the embassy beforehand.</p>
        
        <h3>Step 5: Wait for Processing</h3>
        <p>Processing time is typically 4-6 weeks, but can be longer during peak seasons. You can track your application status online.</p>
        
        <h2>Tips for a Successful Application</h2>
        <ul>
          <li>Apply early - start the process at least 3 months before your intended travel date</li>
          <li>Ensure all documents are complete and properly formatted</li>
          <li>Prepare for the interview by practicing common questions</li>
          <li>Show strong ties to Bangladesh to demonstrate your intention to return</li>
          <li>Be honest and consistent in all your responses</li>
        </ul>
        
        <h2>Common Reasons for Visa Rejection</h2>
        <ul>
          <li>Insufficient financial proof</li>
          <li>Incomplete or incorrect documentation</li>
          <li>Lack of genuine study intention</li>
          <li>Poor academic background</li>
          <li>Inadequate language skills</li>
        </ul>
        
        <h2>After Visa Approval</h2>
        <p>Once your visa is approved, you'll need to:</p>
        <ul>
          <li>Book your flight to Germany</li>
          <li>Arrange accommodation</li>
          <li>Register with local authorities within 14 days of arrival</li>
          <li>Open a German bank account</li>
          <li>Get health insurance</li>
          <li>Enroll at your university</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Applying for a German student visa can seem overwhelming, but with proper preparation and guidance, it&apos;s entirely achievable. Remember to start early, be thorough with your documentation, and don&apos;t hesitate to seek professional help if needed.</p>
        
        <p>At AusbildungVisa, we&apos;ve helped hundreds of Bangladeshi students successfully obtain their German student visas. If you need personalized guidance, don&apos;t hesitate to book a consultation with our experts.</p>
      `,
      author: 'Dr. Sarah Ahmed',
      authorImage: '/images/team/team-member-2.svg',
      authorBio: 'Dr. Sarah Ahmed is a certified immigration consultant with over 15 years of experience helping Bangladeshi students achieve their European education dreams. She holds a PhD in International Education Policy and has personally guided over 2,000 successful visa applications.',
      publishDate: '2025-01-15',
      readTime: '8 min read',
      category: 'study-visa',
      tags: ['Germany', 'Student Visa', 'Application Process', 'Requirements', 'Documentation'],
      views: 2450,
      likes: 89,
      comments: 23,
      image: '/images/screenshots/university-campus.svg'
    }
  }
  
  return posts[id] || null
}

const getRelatedPosts = (): RelatedPost[] => {
  return [
    {
      id: '2',
      title: 'Top 10 Ausbildung Programs for Bangladeshi Students',
      image: '/images/services/vocational-training.svg',
      category: 'ausbildung',
      readTime: '6 min read'
    },
    {
      id: '3',
      title: 'EU Blue Card vs National Work Permit: Which is Better?',
      image: '/images/screenshots/eu-workplace.svg',
      category: 'work-permit',
      readTime: '10 min read'
    },
    {
      id: '6',
      title: 'Netherlands Study Visa: Requirements and Process 2025',
      image: '/images/screenshots/dutch-university.svg',
      category: 'study-visa',
      readTime: '9 min read'
    }
  ]
}

const getComments = (): Comment[] => {
  return [
    {
      id: '1',
      author: 'Rashid Hassan',
      authorImage: '/images/team/team-member-1.svg',
      content: 'This guide is incredibly detailed and helpful! I followed these steps and got my German student visa approved in just 5 weeks. Thank you for sharing such valuable information.',
      date: '2025-01-20',
      likes: 12
    },
    {
      id: '2',
      author: 'Fatima Khan',
      authorImage: '/images/team/team-member-2.svg',
      content: 'Great article! One question - do we need to show the full €11,208 in our bank account, or can we show a combination of bank balance and scholarship?',
      date: '2025-01-18',
      likes: 8
    },
    {
      id: '3',
      author: 'Ahmed Rahman',
      authorImage: '/images/team/team-member-3.svg',
      content: 'My daughter is planning to apply for German universities. This guide will be very helpful for her visa application. Bookmarking this for future reference!',
      date: '2025-01-16',
      likes: 5
    }
  ]
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const [liked, setLiked] = useState(false)
  const [copied, setCopied] = useState(false)
  const [newComment, setNewComment] = useState('')
  
  const post = getBlogPost(id)
  const relatedPosts = getRelatedPosts()
  const comments = getComments()

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-6">The article you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/blog" className="btn-primary">
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const handleLike = () => {
    setLiked(!liked)
  }

  const handleShare = async (platform: string) => {
    const url = window.location.href
    const title = post.title
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
        break
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank')
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')
        break
      case 'copy':
        await navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
        break
    }
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit to an API
    console.log('New comment:', newComment)
    setNewComment('')
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Article Header */}
      <article className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link 
              href="/blog" 
              className="inline-flex items-center space-x-2 text-black hover:text-gray-600 mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              <span>Back to Blog</span>
            </Link>

            {/* Article Meta */}
            <div className="mb-8">
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-semibold">
                  Study Visa
                </span>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>{post.views.toLocaleString()} views</span>
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {post.title}
              </h1>
              
              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{post.author}</h3>
                    <p className="text-sm text-gray-600">Immigration Consultant</p>
                  </div>
                </div>
                
                {/* Social Share */}
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleShare('facebook')}
                    className="p-2 text-gray-500 hover:text-black hover:bg-gray-100 rounded-full transition-colors duration-200"
                  >
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleShare('twitter')}
                    className="p-2 text-gray-500 hover:text-black hover:bg-gray-100 rounded-full transition-colors duration-200"
                  >
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="p-2 text-gray-500 hover:text-black hover:bg-gray-100 rounded-full transition-colors duration-200"
                  >
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleShare('copy')}
                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-full transition-colors duration-200"
                  >
                    {copied ? <Check className="w-5 h-5 text-black" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8">
              <div className="w-full h-64 md:h-96 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-white" />
              </div>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Article Actions */}
            <div className="flex items-center justify-between py-6 border-t border-b border-gray-200 mb-8">
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleLike}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors duration-200 ${
                    liked ? 'bg-gray-100 text-black' : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-black'
                  }`}
                >
                  <ThumbsUp className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                  <span>{post.likes + (liked ? 1 : 0)}</span>
                </button>
                <div className="flex items-center space-x-2 text-gray-600">
                  <MessageCircle className="w-5 h-5" />
                  <span>{post.comments} comments</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Share2 className="w-5 h-5 text-gray-500" />
                <span className="text-gray-600">Share this article</span>
              </div>
            </div>

            {/* Author Bio */}
            <div className="card mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-8 h-8 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">About {post.author}</h3>
                  <p className="text-gray-600 mb-4">{post.authorBio}</p>
                  <Link href="/consultation" className="btn-primary inline-block">
                    Book Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Comments Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Comments ({comments.length})</h2>
            
            {/* Comment Form */}
            <form onSubmit={handleCommentSubmit} className="card mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Leave a Comment</h3>
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Share your thoughts or ask questions..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent mb-4"
                required
              />
              <button type="submit" className="btn-primary">
                Post Comment
              </button>
            </form>
            
            {/* Comments List */}
            <div className="space-y-6">
              {comments.map(comment => (
                <div key={comment.id} className="card">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{comment.author}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{new Date(comment.date).toLocaleDateString()}</span>
                          <button className="flex items-center space-x-1 hover:text-black">
                            <ThumbsUp className="w-4 h-4" />
                            <span>{comment.likes}</span>
                          </button>
                        </div>
                      </div>
                      <p className="text-gray-700">{comment.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map(relatedPost => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} className="card hover:shadow-lg transition-all duration-300 group">
                  <div className="w-full h-40 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                      {relatedPost.category.replace('-', ' ')}
                    </span>
                    <h3 className="font-bold text-gray-900 group-hover:text-black transition-colors duration-200 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
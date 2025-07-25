import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, Users, Wallet, ShoppingBag, FileText,
  Video, Phone, QrCode, Grid3X3, Home, Bell, User,
  Send, Paperclip, Smile, Mic, Camera, MapPin,
  TrendingUp, Calendar, CreditCard, Package, Building2,
  BarChart3, Clock, Star, Heart, Share2, MoreHorizontal,
  Search, Plus, Check, X, ChevronRight, Circle, Settings,
  Briefcase, Store, Truck, Receipt, DollarSign, ArrowRight,
  Shield, Zap, Globe, Database, Cloud, Lock, Activity,
  Coffee, Car, Plane, Hotel, ShoppingCart, Ticket,
  ArrowUp, ArrowDown, Hash, Loader2, Info, Edit,
  Trash2, Eye, Download, Upload, Filter, LogOut, AlertTriangle,
  Moon, Sun, Sparkles, Bot, Layers, PieChart, Target,
  TrendingDown, Award, Lightbulb, ChevronDown, ExternalLink,
  GitBranch, Command, Cpu, Server, Code2, Terminal
} from 'lucide-react';

export default function Databarn2() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('messages');
  const [activeChat, setActiveChat] = useState(null);
  const [showMiniProgram, setShowMiniProgram] = useState(null);
  const [messageInput, setMessageInput] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [notifications, setNotifications] = useState(5);
  const messagesEndRef = useRef(null);

  // Initialize demo data in localStorage
  useEffect(() => {
    const initializeDemoData = () => {
      if (!localStorage.getItem('databarn_initialized')) {
        const demoUsers = [
          { id: '1', email: 'demo@databarn.com', password: 'demo123', name: 'Demo User', role: 'admin', company: 'Acme Corp' },
          { id: '2', email: 'sarah@databarn.com', password: 'demo123', name: 'Sarah Chen', role: 'user', company: 'Acme Corp' },
          { id: '3', email: 'john@databarn.com', password: 'demo123', name: 'John Doe', role: 'user', company: 'Acme Corp' }
        ];
        
        const demoConversations = [
          {
            id: '1',
            type: 'team',
            name: 'Product Team',
            avatar: '👥',
            lastMessage: 'New features deployed successfully!',
            time: '2m',
            unread: 3,
            members: 12,
            pinned: true,
            online: true,
            messages: [
              { id: '1', sender: '2', senderName: 'Sarah Chen', content: 'Good morning team! 👋', time: '9:00 AM', read: true },
              { id: '2', sender: '3', senderName: 'John Doe', content: 'Morning! Ready for the standup?', time: '9:02 AM', read: true },
              { id: '3', sender: '2', senderName: 'Sarah Chen', content: 'New features deployed successfully!', time: '9:05 AM', read: false }
            ]
          },
          {
            id: '2',
            type: 'client',
            name: 'TechStart Inc',
            avatar: '🏢',
            lastMessage: 'Invoice #2024-156 approved',
            time: '15m',
            unread: 0,
            verified: true,
            online: false,
            messages: [
              { id: '1', sender: 'client', senderName: 'TechStart Inc', content: 'Thanks for the proposal!', time: '2:00 PM', read: true },
              { id: '2', sender: '1', senderName: 'You', content: 'Happy to help! Let me know if you need anything else.', time: '2:15 PM', read: true },
              { id: '3', sender: 'client', senderName: 'TechStart Inc', content: 'Invoice #2024-156 approved', time: '2:30 PM', read: true }
            ]
          },
          {
            id: '3',
            type: 'supplier',
            name: 'TechSupply Co',
            avatar: '📦',
            lastMessage: 'Shipment arriving tomorrow',
            time: '1h',
            unread: 1,
            online: true,
            messages: [
              { id: '1', sender: 'supplier', senderName: 'TechSupply Co', content: 'Order confirmed for 50 units', time: 'Yesterday', read: true },
              { id: '2', sender: '1', senderName: 'You', content: 'Great! When can we expect delivery?', time: 'Yesterday', read: true },
              { id: '3', sender: 'supplier', senderName: 'TechSupply Co', content: 'Shipment arriving tomorrow', time: '1h ago', read: false }
            ]
          },
          {
            id: '4',
            type: 'system',
            name: 'Databarn AI',
            avatar: '🤖',
            lastMessage: 'Your weekly analytics report is ready',
            time: '3h',
            unread: 2,
            official: true,
            online: true,
            messages: [
              { id: '1', sender: 'ai', senderName: 'Databarn AI', content: 'Good morning! Here\'s your daily briefing.', time: '6:00 AM', read: true },
              { id: '2', sender: 'ai', senderName: 'Databarn AI', content: 'Revenue is up 23% this week! 📈', time: '7:00 AM', read: false },
              { id: '3', sender: 'ai', senderName: 'Databarn AI', content: 'Your weekly analytics report is ready', time: '3h ago', read: false }
            ]
          }
        ];
        
        const demoTransactions = [
          { id: '1', type: 'credit', amount: 5000, description: 'Client payment - TechStart Inc', date: '2024-03-20', status: 'completed', category: 'revenue' },
          { id: '2', type: 'debit', amount: 1200, description: 'Software licenses', date: '2024-03-19', status: 'completed', category: 'software' },
          { id: '3', type: 'credit', amount: 3500, description: 'Project milestone payment', date: '2024-03-18', status: 'completed', category: 'revenue' },
          { id: '4', type: 'debit', amount: 450, description: 'Team lunch expense', date: '2024-03-17', status: 'completed', category: 'meals' },
          { id: '5', type: 'credit', amount: 8750, description: 'Contract renewal - GlobalTech', date: '2024-03-16', status: 'pending', category: 'revenue' }
        ];
        
        const demoProducts = [
          { id: '1', name: 'Laptop Pro X1', sku: 'LP-X1-2024', quantity: 45, minStock: 20, price: 1299.99, status: 'healthy', trend: 'up' },
          { id: '2', name: 'Office Chair Deluxe', sku: 'OC-DLX-01', quantity: 12, minStock: 10, price: 459.99, status: 'low', trend: 'down' },
          { id: '3', name: 'Wireless Mouse', sku: 'WM-2024', quantity: 8, minStock: 25, price: 39.99, status: 'critical', trend: 'down' },
          { id: '4', name: 'USB-C Hub', sku: 'UCH-2024', quantity: 67, minStock: 30, price: 89.99, status: 'healthy', trend: 'stable' },
          { id: '5', name: '4K Webcam', sku: '4K-WC-01', quantity: 5, minStock: 15, price: 199.99, status: 'critical', trend: 'down' }
        ];
        
        const demoInvoices = [
          { id: '1', client: 'TechStart Inc', amount: 12500, status: 'paid', dueDate: '2024-03-15', items: 3 },
          { id: '2', client: 'Global Systems', amount: 8750, status: 'pending', dueDate: '2024-03-30', items: 2 },
          { id: '3', client: 'StartupHub', amount: 5200, status: 'overdue', dueDate: '2024-03-10', items: 1 }
        ];
        
        localStorage.setItem('databarn_users', JSON.stringify(demoUsers));
        localStorage.setItem('databarn_conversations', JSON.stringify(demoConversations));
        localStorage.setItem('databarn_transactions', JSON.stringify(demoTransactions));
        localStorage.setItem('databarn_products', JSON.stringify(demoProducts));
        localStorage.setItem('databarn_invoices', JSON.stringify(demoInvoices));
        localStorage.setItem('databarn_wallet_balance', '12450');
        localStorage.setItem('databarn_initialized', 'true');
      }
    };
    
    initializeDemoData();
  }, []);

  // Load data from localStorage
  const [conversations, setConversations] = useState([]);
  const [products, setProducts] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [walletBalance, setWalletBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (isLoggedIn) {
      setConversations(JSON.parse(localStorage.getItem('databarn_conversations') || '[]'));
      setProducts(JSON.parse(localStorage.getItem('databarn_products') || '[]'));
      setInvoices(JSON.parse(localStorage.getItem('databarn_invoices') || '[]'));
      setTransactions(JSON.parse(localStorage.getItem('databarn_transactions') || '[]'));
      setWalletBalance(parseFloat(localStorage.getItem('databarn_wallet_balance') || '0'));
    }
  }, [isLoggedIn]);

  // Login Screen Component
  const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
      const users = JSON.parse(localStorage.getItem('databarn_users') || '[]');
      const user = users.find(u => u.email === email && u.password === password);
      
      if (user) {
        setCurrentUser(user);
        setIsLoggedIn(true);
        setError('');
      } else {
        setError('Invalid email or password');
      }
    };

    const handleDemoLogin = () => {
      const users = JSON.parse(localStorage.getItem('databarn_users') || '[]');
      const demoUser = users.find(u => u.email === 'demo@databarn.com');
      if (demoUser) {
        setCurrentUser(demoUser);
        setIsLoggedIn(true);
      }
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-md p-8 border border-gray-700/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl mb-4 shadow-lg">
                <Database className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Databarn 2.0
              </h1>
              <p className="text-gray-400 mt-2">Your Business Super App</p>
            </div>

            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-lg p-4 mb-6 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold text-purple-300">Welcome to the Future!</p>
                  <p className="text-gray-300 mt-1">
                    Experience the next generation of business management.
                  </p>
                  <button
                    onClick={handleDemoLogin}
                    className="mt-3 w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-medium flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Zap className="w-4 h-4" />
                    Try Demo Instantly
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500 backdrop-blur-sm"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500 backdrop-blur-sm"
                  placeholder="Enter your password"
                />
              </div>
              {error && (
                <div className="text-red-400 text-sm text-center bg-red-900/20 rounded-lg py-2 border border-red-800/30">
                  {error}
                </div>
              )}
              <button
                onClick={handleLogin}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-medium shadow-lg transform hover:scale-105"
              >
                Sign In
              </button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                New to Databarn? <a href="#" className="text-purple-400 hover:text-purple-300 font-medium">Create Account</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Work apps configuration
  const workApps = [
    { id: 'pay', name: 'Quick Pay', icon: Wallet, bgGradient: 'from-green-500 to-emerald-600', badge: 'New' },
    { id: 'shop', name: 'Marketplace', icon: ShoppingBag, bgGradient: 'from-orange-500 to-red-600' },
    { id: 'docs', name: 'Documents', icon: FileText, bgGradient: 'from-blue-500 to-indigo-600' },
    { id: 'meet', name: 'Video Meet', icon: Video, bgGradient: 'from-purple-500 to-pink-600' },
    { id: 'invoice', name: 'Invoicing', icon: Receipt, bgGradient: 'from-indigo-500 to-purple-600' },
    { id: 'inventory', name: 'Inventory', icon: Package, bgGradient: 'from-yellow-500 to-orange-600' },
    { id: 'crm', name: 'CRM', icon: Users, bgGradient: 'from-pink-500 to-rose-600' },
    { id: 'analytics', name: 'Analytics', icon: BarChart3, bgGradient: 'from-cyan-500 to-blue-600' }
  ];

  const miniPrograms = [
    { id: 'expense', name: 'Expense Tracker', icon: '💰', users: '12.5K', gradient: 'from-green-600 to-emerald-700' },
    { id: 'hr', name: 'HR Portal', icon: '👔', users: '8.2K', gradient: 'from-blue-600 to-indigo-700' },
    { id: 'fleet', name: 'Fleet Manager', icon: '🚛', users: '5.1K', gradient: 'from-orange-600 to-red-700' },
    { id: 'booking', name: 'Room Booking', icon: '🏢', users: '15.7K', gradient: 'from-purple-600 to-pink-700' },
    { id: 'lunch', name: 'Lunch Orders', icon: '🍱', users: '23.4K', gradient: 'from-yellow-600 to-orange-700' },
    { id: 'travel', name: 'Travel Buddy', icon: '✈️', users: '9.8K', gradient: 'from-cyan-600 to-blue-700' }
  ];

  const moments = [
    {
      id: 1,
      author: 'Sarah Chen',
      avatar: '👩',
      time: '30m',
      content: 'Just closed a major deal with GlobalTech! 🎉 Thank you team for all the support.',
      likes: 42,
      comments: 8,
      image: null,
      verified: true
    },
    {
      id: 2,
      author: 'Tech Team',
      avatar: '💻',
      time: '2h',
      content: 'New API endpoints are live! Check out the documentation for v2.0 integration.',
      likes: 15,
      comments: 3,
      official: true
    }
  ];

  // Get current chat messages
  const getCurrentChatMessages = () => {
    if (!activeChat) return [];
    const conv = conversations.find(c => c.id === activeChat.id);
    return conv?.messages || [];
  };

  // Send message
  const sendMessage = () => {
    if (!messageInput.trim() || !activeChat) return;

    const newMessage = {
      id: Date.now().toString(),
      sender: currentUser.id,
      senderName: 'You',
      content: messageInput,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      read: false
    };

    const updatedConversations = conversations.map(conv => {
      if (conv.id === activeChat.id) {
        return {
          ...conv,
          messages: [...(conv.messages || []), newMessage],
          lastMessage: messageInput,
          time: 'now'
        };
      }
      return conv;
    });

    setConversations(updatedConversations);
    localStorage.setItem('databarn_conversations', JSON.stringify(updatedConversations));
    setMessageInput('');
  };

  // Auto scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeChat]);

  // Chat Interface
  const ChatInterface = () => {
    const messages = getCurrentChatMessages();

    return (
      <div className="flex flex-col h-full bg-gray-900">
        <div className="bg-gray-800 border-b border-gray-700 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setActiveChat(null)}
              className="lg:hidden hover:bg-gray-700 p-1 rounded"
            >
              <ChevronRight className="w-5 h-5 rotate-180 text-gray-400" />
            </button>
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                {activeChat?.avatar}
              </div>
              {activeChat?.online && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full ring-2 ring-gray-800"></div>
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-white">{activeChat?.name}</h3>
                {activeChat?.verified && <Shield className="w-4 h-4 text-blue-400" />}
                {activeChat?.official && <Check className="w-4 h-4 text-green-400" />}
              </div>
              <p className="text-xs text-gray-400">
                {activeChat?.type === 'team' ? `${activeChat.members} members` : activeChat?.online ? 'Active now' : 'Last seen recently'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
              <Phone className="w-5 h-5 text-gray-400" />
            </button>
            <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
              <Video className="w-5 h-5 text-gray-400" />
            </button>
            <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-900 to-gray-950">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === currentUser?.id || msg.senderName === 'You' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] px-4 py-3 rounded-2xl ${
                  msg.sender === currentUser?.id || msg.senderName === 'You'
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-100 border border-gray-700'
                }`}
              >
                {msg.sender !== currentUser?.id && msg.senderName !== 'You' && (
                  <p className="text-xs font-semibold mb-1 opacity-70">{msg.senderName}</p>
                )}
                <p>{msg.content}</p>
                <div className={`text-xs mt-1 ${
                  msg.sender === currentUser?.id || msg.senderName === 'You' ? 'text-purple-200' : 'text-gray-500'
                }`}>
                  {msg.time}
                  {(msg.sender === currentUser?.id || msg.senderName === 'You') && msg.read && (
                    <span className="ml-2">✓✓</span>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="bg-gray-800 border-t border-gray-700 p-4">
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
              <Smile className="w-5 h-5 text-gray-400" />
            </button>
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 bg-gray-900 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500 border border-gray-700"
            />
            <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
              <Paperclip className="w-5 h-5 text-gray-400" />
            </button>
            <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
              <Mic className="w-5 h-5 text-gray-400" />
            </button>
            <button 
              onClick={sendMessage}
              className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg transition-all shadow-lg"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Work Tab Content
  const WorkTab = () => {
    const [selectedApp, setSelectedApp] = useState(null);
    const [activeMiniProgram, setActiveMiniProgram] = useState(null);

    const handleAppClick = (app) => {
      if (app.id === 'inventory') {
        setSelectedApp('inventory');
      } else if (app.id === 'invoice') {
        setSelectedApp('invoice');
      } else if (app.id === 'analytics') {
        setSelectedApp('analytics');
      } else {
        setShowMiniProgram({
          name: app.name,
          icon: app.badge === 'New' ? '🆕' : '🚀',
          isQuickApp: true
        });
      }
    };

    const handleMiniProgramClick = (program) => {
      setActiveMiniProgram(program.id);
    };

    // Render mini program views
    if (activeMiniProgram === 'expense') {
      return <ExpenseTracker onBack={() => setActiveMiniProgram(null)} />;
    }
    if (activeMiniProgram === 'hr') {
      return <HRPortal onBack={() => setActiveMiniProgram(null)} />;
    }
    if (activeMiniProgram === 'fleet') {
      return <FleetManager onBack={() => setActiveMiniProgram(null)} />;
    }
    if (activeMiniProgram === 'booking') {
      return <RoomBooking onBack={() => setActiveMiniProgram(null)} />;
    }
    if (activeMiniProgram === 'lunch') {
      return <LunchOrders onBack={() => setActiveMiniProgram(null)} />;
    }
    if (activeMiniProgram === 'travel') {
      return <TravelBuddy onBack={() => setActiveMiniProgram(null)} />;
    }

    if (selectedApp === 'inventory') {
      return <InventoryView onBack={() => setSelectedApp(null)} />;
    }

    if (selectedApp === 'invoice') {
      return <InvoiceView onBack={() => setSelectedApp(null)} />;
    }

    if (selectedApp === 'analytics') {
      return <AnalyticsView onBack={() => setSelectedApp(null)} />;
    }

    return (
      <div className="max-w-7xl mx-auto p-4">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-700/50">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-8 h-8 text-purple-400" />
              <span className="text-xs text-green-400 bg-green-900/30 px-2 py-1 rounded-full">+23%</span>
            </div>
            <p className="text-2xl font-bold text-white">$45.2K</p>
            <p className="text-sm text-gray-400">Revenue Today</p>
          </div>
          <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-700/50">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-8 h-8 text-blue-400" />
              <span className="text-xs text-green-400 bg-green-900/30 px-2 py-1 rounded-full">+12</span>
            </div>
            <p className="text-2xl font-bold text-white">1,284</p>
            <p className="text-sm text-gray-400">Active Users</p>
          </div>
          <div className="bg-gradient-to-br from-green-900/50 to-green-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-700/50">
            <div className="flex items-center justify-between mb-2">
              <Package className="w-8 h-8 text-green-400" />
              <span className="text-xs text-yellow-400 bg-yellow-900/30 px-2 py-1 rounded-full">12 low</span>
            </div>
            <p className="text-2xl font-bold text-white">342</p>
            <p className="text-sm text-gray-400">Products</p>
          </div>
          <div className="bg-gradient-to-br from-orange-900/50 to-orange-800/50 backdrop-blur-sm rounded-xl p-6 border border-orange-700/50">
            <div className="flex items-center justify-between mb-2">
              <Activity className="w-8 h-8 text-orange-400" />
              <span className="text-xs text-green-400 bg-green-900/30 px-2 py-1 rounded-full">98.5%</span>
            </div>
            <p className="text-2xl font-bold text-white">Online</p>
            <p className="text-sm text-gray-400">System Status</p>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 mb-6 border border-gray-700/50">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Grid3X3 className="w-5 h-5 text-purple-400" />
            Quick Access
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
            {workApps.map(app => {
              const IconComponent = app.icon;
              return (
                <button
                  key={app.id}
                  onClick={() => handleAppClick(app)}
                  className="group relative flex flex-col items-center gap-2 p-3 hover:scale-110 transition-all duration-200"
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${app.bgGradient} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-xs text-gray-300">{app.name}</span>
                  {app.badge && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full animate-pulse">
                      {app.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 mb-6 border border-gray-700/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-blue-400" />
              Business Services
            </h3>
            <button className="text-blue-400 text-sm hover:text-blue-300 flex items-center gap-1">
              See All <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="group bg-gray-900/50 border border-gray-700 rounded-lg p-4 hover:border-purple-500/50 transition-all cursor-pointer hover:bg-gray-900/70">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-white">Business Registration</h4>
                  <p className="text-sm text-gray-400">Register your company online</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-purple-400 transition-colors" />
              </div>
            </div>
            <div className="group bg-gray-900/50 border border-gray-700 rounded-lg p-4 hover:border-green-500/50 transition-all cursor-pointer hover:bg-gray-900/70">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-white">Corporate Cards</h4>
                  <p className="text-sm text-gray-400">Virtual & physical cards</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-green-400 transition-colors" />
              </div>
            </div>
            <div className="group bg-gray-900/50 border border-gray-700 rounded-lg p-4 hover:border-orange-500/50 transition-all cursor-pointer hover:bg-gray-900/70">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-white">Business Insurance</h4>
                  <p className="text-sm text-gray-400">Comprehensive coverage</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-orange-400 transition-colors" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              Mini Programs
            </h3>
            <button className="text-purple-400 text-sm hover:text-purple-300 flex items-center gap-1">
              Discover <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {miniPrograms.map(program => (
              <button
                key={program.id}
                onClick={() => handleMiniProgramClick(program)}
                className="group bg-gray-900/50 border border-gray-700 rounded-lg p-4 hover:border-purple-500/50 transition-all hover:scale-105 hover:bg-gray-900/70"
              >
                <div className="flex items-center gap-3">
                  <div className="text-3xl transform group-hover:scale-110 transition-transform">{program.icon}</div>
                  <div className="flex-1 text-left">
                    <h4 className="font-medium text-sm text-white">{program.name}</h4>
                    <p className="text-xs text-gray-400">{program.users} users</p>
                  </div>
                </div>
                <div className={`h-1 bg-gradient-to-r ${program.gradient} rounded-full mt-3 opacity-50 group-hover:opacity-100 transition-opacity`}></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Analytics View
  const AnalyticsView = ({ onBack }) => {
    return (
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={onBack} className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <ChevronRight className="w-5 h-5 rotate-180 text-gray-400" />
          </button>
          <h2 className="text-2xl font-bold text-white">Analytics Dashboard</h2>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-700/50">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8 text-purple-400" />
              <span className="text-sm text-green-400">+12.5%</span>
            </div>
            <p className="text-3xl font-bold text-white">$284.5K</p>
            <p className="text-sm text-gray-400">Monthly Revenue</p>
            <div className="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-gradient-to-r from-purple-500 to-blue-500"></div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-700/50">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-blue-400" />
              <span className="text-sm text-green-400">+23%</span>
            </div>
            <p className="text-3xl font-bold text-white">8,421</p>
            <p className="text-sm text-gray-400">Total Customers</p>
            <div className="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full w-4/5 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-900/50 to-green-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-700/50">
            <div className="flex items-center justify-between mb-4">
              <Target className="w-8 h-8 text-green-400" />
              <span className="text-sm text-green-400">+8%</span>
            </div>
            <p className="text-3xl font-bold text-white">94.2%</p>
            <p className="text-sm text-gray-400">Goal Achievement</p>
            <div className="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full w-11/12 bg-gradient-to-r from-green-500 to-emerald-500"></div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-900/50 to-orange-800/50 backdrop-blur-sm rounded-xl p-6 border border-orange-700/50">
            <div className="flex items-center justify-between mb-4">
              <Activity className="w-8 h-8 text-orange-400" />
              <span className="text-sm text-red-400">-5%</span>
            </div>
            <p className="text-3xl font-bold text-white">$12.4K</p>
            <p className="text-sm text-gray-400">Operating Costs</p>
            <div className="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-gradient-to-r from-orange-500 to-red-500"></div>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Chart */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-purple-400" />
              Revenue Overview
            </h3>
            <div className="h-64 flex items-end justify-between gap-2">
              {[65, 80, 45, 90, 70, 85, 95, 75, 88, 92, 78, 85].map((height, i) => (
                <div key={i} className="flex-1 bg-gradient-to-t from-purple-600 to-blue-600 rounded-t-lg hover:opacity-80 transition-opacity relative group"
                     style={{ height: `${height}%` }}>
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-900 px-2 py-1 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    ${(height * 3).toFixed(0)}k
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-xs text-gray-500">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <PieChart className="w-5 h-5 text-blue-400" />
              Performance Metrics
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-300">Sales Target</span>
                  <span className="text-sm text-white font-medium">92%</span>
                </div>
                <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full w-11/12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-300">Customer Satisfaction</span>
                  <span className="text-sm text-white font-medium">88%</span>
                </div>
                <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full w-10/12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-300">Operational Efficiency</span>
                  <span className="text-sm text-white font-medium">95%</span>
                </div>
                <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full w-11/12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-300">Market Share</span>
                  <span className="text-sm text-white font-medium">73%</span>
                </div>
                <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Inventory View
  const InventoryView = ({ onBack }) => {
    const lowStockCount = products.filter(p => p.status === 'critical' || p.status === 'low').length;

    return (
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={onBack} className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <ChevronRight className="w-5 h-5 rotate-180 text-gray-400" />
          </button>
          <h2 className="text-2xl font-bold text-white">Inventory Management</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Products</p>
                <p className="text-2xl font-bold text-white">{products.length}</p>
              </div>
              <Package className="w-8 h-8 text-green-400" />
            </div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Low Stock</p>
                <p className="text-2xl font-bold text-red-400">{lowStockCount}</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Value</p>
                <p className="text-2xl font-bold text-white">${products.reduce((sum, p) => sum + (p.quantity * p.price), 0).toFixed(0)}</p>
              </div>
              <DollarSign className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Categories</p>
                <p className="text-2xl font-bold text-white">5</p>
              </div>
              <Grid3X3 className="w-8 h-8 text-purple-400" />
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden">
          <div className="p-4 border-b border-gray-700 flex items-center justify-between">
            <h3 className="font-semibold text-white">Product Inventory</h3>
            <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 flex items-center gap-2 shadow-lg">
              <Plus className="w-4 h-4" />
              Add Product
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-900/50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">Product</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">SKU</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">Stock</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">Price</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">Trend</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {products.map(product => (
                  <tr key={product.id} className="hover:bg-gray-800/50 transition-colors">
                    <td className="px-4 py-3">
                      <p className="font-medium text-white">{product.name}</p>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-400">{product.sku}</td>
                    <td className="px-4 py-3">
                      <p className="font-medium text-white">{product.quantity} units</p>
                      <p className="text-xs text-gray-500">Min: {product.minStock}</p>
                    </td>
                    <td className="px-4 py-3 font-medium text-white">${product.price}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        product.status === 'healthy' ? 'bg-green-900/50 text-green-400 border border-green-700' :
                        product.status === 'low' ? 'bg-yellow-900/50 text-yellow-400 border border-yellow-700' :
                        'bg-red-900/50 text-red-400 border border-red-700'
                      }`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        {product.trend === 'up' ? (
                          <TrendingUp className="w-4 h-4 text-green-400" />
                        ) : product.trend === 'down' ? (
                          <TrendingDown className="w-4 h-4 text-red-400" />
                        ) : (
                          <ArrowRight className="w-4 h-4 text-gray-400" />
                        )}
                        <span className={`text-xs ${
                          product.trend === 'up' ? 'text-green-400' :
                          product.trend === 'down' ? 'text-red-400' :
                          'text-gray-400'
                        }`}>
                          {product.trend === 'up' ? '+12%' :
                           product.trend === 'down' ? '-8%' :
                           'stable'}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <button className="text-blue-400 hover:text-blue-300 mr-3">Edit</button>
                      <button className="text-red-400 hover:text-red-300">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  // Invoice View
  const InvoiceView = ({ onBack }) => {
    return (
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={onBack} className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <ChevronRight className="w-5 h-5 rotate-180 text-gray-400" />
          </button>
          <h2 className="text-2xl font-bold text-white">Invoicing</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Invoices</p>
                <p className="text-2xl font-bold text-white">{invoices.length}</p>
              </div>
              <FileText className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Paid</p>
                <p className="text-2xl font-bold text-green-400">{invoices.filter(i => i.status === 'paid').length}</p>
              </div>
              <Check className="w-8 h-8 text-green-400" />
            </div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-
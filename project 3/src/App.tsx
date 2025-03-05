import React, { useState } from 'react';
import { Mic, Music, Layers, Image, Code, Play, Settings, Save, Layout, Palette, FileCode, Headphones } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('canvas');
  const [isRecording, setIsRecording] = useState(false);
  
  const handleVoiceCommand = () => {
    setIsRecording(!isRecording);
    // In a real implementation, this would trigger voice recording
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-indigo-600 text-white p-4 flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-2">
          <Code className="h-6 w-6" />
          <h1 className="text-xl font-bold">CodeVibe</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            className={`flex items-center space-x-1 px-3 py-1 rounded-full ${isRecording ? 'bg-red-500' : 'bg-indigo-700 hover:bg-indigo-800'} transition-colors`}
            onClick={handleVoiceCommand}
          >
            <Mic className="h-4 w-4" />
            <span>{isRecording ? 'Recording...' : 'Voice Command'}</span>
          </button>
          <button className="flex items-center space-x-1 px-3 py-1 rounded-full bg-indigo-700 hover:bg-indigo-800 transition-colors">
            <Save className="h-4 w-4" />
            <span>Save Project</span>
          </button>
          <button className="flex items-center space-x-1 px-3 py-1 rounded-full bg-green-600 hover:bg-green-700 transition-colors">
            <Play className="h-4 w-4" />
            <span>Preview</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-16 bg-gray-800 text-white flex flex-col items-center py-4">
          <button 
            className={`p-3 rounded-lg mb-4 ${activeTab === 'canvas' ? 'bg-indigo-600' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveTab('canvas')}
            title="Design Canvas"
          >
            <Layout className="h-6 w-6" />
          </button>
          <button 
            className={`p-3 rounded-lg mb-4 ${activeTab === 'components' ? 'bg-indigo-600' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveTab('components')}
            title="Component Library"
          >
            <Layers className="h-6 w-6" />
          </button>
          <button 
            className={`p-3 rounded-lg mb-4 ${activeTab === 'assets' ? 'bg-indigo-600' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveTab('assets')}
            title="Asset Library"
          >
            <Image className="h-6 w-6" />
          </button>
          <button 
            className={`p-3 rounded-lg mb-4 ${activeTab === 'code' ? 'bg-indigo-600' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveTab('code')}
            title="Code View"
          >
            <FileCode className="h-6 w-6" />
          </button>
          <button 
            className={`p-3 rounded-lg mb-4 ${activeTab === 'music' ? 'bg-indigo-600' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveTab('music')}
            title="Spotify Integration"
          >
            <Headphones className="h-6 w-6" />
          </button>
          <div className="flex-grow"></div>
          <button 
            className="p-3 rounded-lg hover:bg-gray-700"
            title="Settings"
          >
            <Settings className="h-6 w-6" />
          </button>
        </div>

        {/* Panel Content */}
        <div className="flex-1 flex">
          {/* Left Panel (Tools) */}
          <div className="w-64 bg-white border-r border-gray-200 p-4">
            {activeTab === 'canvas' && (
              <div>
                <h2 className="font-bold text-lg mb-4">Drawing Tools</h2>
                <div className="grid grid-cols-2 gap-2">
                  <button className="p-2 bg-gray-100 rounded hover:bg-gray-200 flex flex-col items-center">
                    <div className="w-6 h-6 border border-gray-400 rounded"></div>
                    <span className="text-sm mt-1">Rectangle</span>
                  </button>
                  <button className="p-2 bg-gray-100 rounded hover:bg-gray-200 flex flex-col items-center">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full border border-gray-400"></div>
                    </div>
                    <span className="text-sm mt-1">Circle</span>
                  </button>
                  <button className="p-2 bg-gray-100 rounded hover:bg-gray-200 flex flex-col items-center">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <div className="w-6 border-t border-gray-400"></div>
                    </div>
                    <span className="text-sm mt-1">Line</span>
                  </button>
                  <button className="p-2 bg-gray-100 rounded hover:bg-gray-200 flex flex-col items-center">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <span className="text-xs">T</span>
                    </div>
                    <span className="text-sm mt-1">Text</span>
                  </button>
                </div>
                
                <h2 className="font-bold text-lg mt-6 mb-4">Properties</h2>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Fill Color</label>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-500 rounded-l border border-gray-300"></div>
                      <input type="text" value="#3B82F6" className="border border-l-0 border-gray-300 rounded-r px-2 py-1 text-sm flex-1" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Border</label>
                    <select className="w-full border border-gray-300 rounded px-2 py-1 text-sm">
                      <option>1px solid</option>
                      <option>2px dashed</option>
                      <option>3px dotted</option>
                      <option>None</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'components' && (
              <div>
                <h2 className="font-bold text-lg mb-4">UI Components</h2>
                <div className="space-y-2">
                  <div className="p-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer">
                    <h3 className="font-medium">Login Form</h3>
                    <p className="text-xs text-gray-500">Email/password authentication</p>
                  </div>
                  <div className="p-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer">
                    <h3 className="font-medium">Navigation Bar</h3>
                    <p className="text-xs text-gray-500">Responsive top navigation</p>
                  </div>
                  <div className="p-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer">
                    <h3 className="font-medium">Data Table</h3>
                    <p className="text-xs text-gray-500">Sortable, filterable table</p>
                  </div>
                  <div className="p-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer">
                    <h3 className="font-medium">User Profile</h3>
                    <p className="text-xs text-gray-500">Profile card with avatar</p>
                  </div>
                </div>
                
                <h3 className="font-bold text-md mt-6 mb-2">Popular App Patterns</h3>
                <div className="space-y-2">
                  <div className="p-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer">
                    <h3 className="font-medium">Twitter Feed</h3>
                    <p className="text-xs text-gray-500">Timeline with posts</p>
                  </div>
                  <div className="p-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer">
                    <h3 className="font-medium">Spotify Player</h3>
                    <p className="text-xs text-gray-500">Music player controls</p>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'assets' && (
              <div>
                <h2 className="font-bold text-lg mb-4">Asset Library</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Icons</h3>
                    <div className="grid grid-cols-4 gap-2">
                      <div className="p-2 bg-gray-100 rounded flex items-center justify-center">
                        <Mic className="h-5 w-5" />
                      </div>
                      <div className="p-2 bg-gray-100 rounded flex items-center justify-center">
                        <Music className="h-5 w-5" />
                      </div>
                      <div className="p-2 bg-gray-100 rounded flex items-center justify-center">
                        <Image className="h-5 w-5" />
                      </div>
                      <div className="p-2 bg-gray-100 rounded flex items-center justify-center">
                        <Palette className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Stock Photos</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="aspect-video bg-gray-200 rounded overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" alt="Coding" className="w-full h-full object-cover" />
                      </div>
                      <div className="aspect-video bg-gray-200 rounded overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692" alt="Team" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Logo Creator</h3>
                    <button className="w-full py-2 bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200">
                      Create New Logo
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'music' && (
              <div>
                <h2 className="font-bold text-lg mb-4">Spotify Integration</h2>
                <div className="bg-gray-100 p-3 rounded-lg mb-4">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-green-600 rounded-md flex items-center justify-center text-white">
                      <Music className="h-6 w-6" />
                    </div>
                    <div className="ml-3">
                      <h3 className="font-medium">Connect Spotify</h3>
                      <p className="text-xs text-gray-500">Link your account</p>
                    </div>
                  </div>
                  <button className="w-full py-1.5 bg-green-600 text-white rounded text-sm hover:bg-green-700">
                    Connect
                  </button>
                </div>
                
                <h3 className="font-medium mb-2">Coding Playlists</h3>
                <div className="space-y-2">
                  <div className="p-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer flex items-center">
                    <div className="w-8 h-8 bg-purple-200 rounded flex items-center justify-center mr-2">
                      <Music className="h-4 w-4 text-purple-700" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Deep Focus</h4>
                      <p className="text-xs text-gray-500">Concentration music</p>
                    </div>
                  </div>
                  <div className="p-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer flex items-center">
                    <div className="w-8 h-8 bg-blue-200 rounded flex items-center justify-center mr-2">
                      <Music className="h-4 w-4 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Coding Beats</h4>
                      <p className="text-xs text-gray-500">Electronic & lo-fi</p>
                    </div>
                  </div>
                  <div className="p-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer flex items-center">
                    <div className="w-8 h-8 bg-green-200 rounded flex items-center justify-center mr-2">
                      <Music className="h-4 w-4 text-green-700" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Ambient Vibes</h4>
                      <p className="text-xs text-gray-500">Calm background music</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'code' && (
              <div>
                <h2 className="font-bold text-lg mb-4">Code Explanation</h2>
                <div className="p-3 bg-gray-100 rounded-lg mb-4">
                  <h3 className="font-medium text-sm mb-1">What does this code do?</h3>
                  <p className="text-xs text-gray-600 mb-2">Select code to get a PM-friendly explanation</p>
                  <button className="w-full py-1.5 bg-indigo-600 text-white rounded text-sm hover:bg-indigo-700">
                    Explain Selected Code
                  </button>
                </div>
                
                <div className="p-3 bg-gray-100 rounded-lg">
                  <h3 className="font-medium text-sm mb-1">Recent Changes</h3>
                  <div className="text-xs space-y-2">
                    <div className="p-2 bg-green-50 border-l-2 border-green-500 rounded">
                      <p className="font-medium text-green-800">Added login form component</p>
                      <p className="text-gray-600">Creates user authentication UI with email/password fields</p>
                    </div>
                    <div className="p-2 bg-blue-50 border-l-2 border-blue-500 rounded">
                      <p className="font-medium text-blue-800">Modified navigation bar</p>
                      <p className="text-gray-600">Updated responsive behavior for mobile devices</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Main Canvas */}
          <div className="flex-1 bg-gray-100 p-4 overflow-auto">
            {activeTab === 'canvas' && (
              <div className="bg-white rounded-lg shadow-lg h-full flex flex-col">
                <div className="p-3 border-b border-gray-200 flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">Device:</span>
                    <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                      <option>Desktop</option>
                      <option>Tablet</option>
                      <option>Mobile</option>
                    </select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-1.5 bg-gray-100 rounded hover:bg-gray-200">
                      <Layers className="h-4 w-4" />
                    </button>
                    <button className="p-1.5 bg-gray-100 rounded hover:bg-gray-200">
                      <Palette className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="flex-1 p-6 flex items-center justify-center">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <p className="text-gray-500 mb-4">Drag components here or use voice commands to build your interface</p>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                      Start Building
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'code' && (
              <div className="bg-white rounded-lg shadow-lg h-full flex flex-col">
                <div className="p-3 border-b border-gray-200 flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">File:</span>
                    <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                      <option>App.js</option>
                      <option>LoginForm.js</option>
                      <option>Navigation.js</option>
                    </select>
                  </div>
                  <div>
                    <button className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded text-sm hover:bg-indigo-200">
                      Translate to PM Language
                    </button>
                  </div>
                </div>
                <div className="flex-1 p-4 overflow-auto bg-gray-50 font-mono text-sm">
                  <pre className="text-gray-800">
{`// This is a simplified representation of generated code
import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Authentication logic would go here
    console.log('Login attempt with:', email);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}`}
                  </pre>
                </div>
                <div className="p-3 border-t border-gray-200 bg-indigo-50">
                  <h3 className="font-medium text-sm text-indigo-800 mb-1">PM-Friendly Explanation:</h3>
                  <p className="text-xs text-gray-700">
                    This code creates a login form with email and password fields. When a user enters their information and clicks "Sign In", the system will attempt to authenticate them. The form includes validation to ensure the email field contains a valid email address and that both fields are filled out before submission.
                  </p>
                </div>
              </div>
            )}
            
            {(activeTab === 'components' || activeTab === 'assets' || activeTab === 'music') && (
              <div className="bg-white rounded-lg shadow-lg h-full flex items-center justify-center p-8 text-center">
                <div>
                  <p className="text-gray-500 mb-4">Select items from the left panel and drag them to your canvas</p>
                  <button 
                    className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                    onClick={() => setActiveTab('canvas')}
                  >
                    Go to Canvas
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <footer className="bg-gray-800 text-gray-300 py-1 px-4 text-xs flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span>Project: Fitness Tracker App</span>
          <span>Components: 4</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="flex items-center">
            <Music className="h-3 w-3 mr-1" />
            Now Playing: Deep Focus
          </span>
          <span className="bg-green-500 text-white px-2 py-0.5 rounded-full text-xs">Voice Ready</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
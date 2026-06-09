import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Play, Loader2 } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';

interface InstagramPost {
  id: string;
  mediaUrl: string;
  permalink: string;
  mediaType: string;
  caption: string;
  thumbnailUrl?: string;
}

export function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const BEHOLD_API_URL = 'https://feeds.behold.so/YiSQcoHCMHnL6maFl0Ee';

  useEffect(() => {
    let isMounted = true;
    
    async function fetchPosts() {
      try {
        const response = await fetch(BEHOLD_API_URL);
        if (!response.ok) throw new Error('Falha ao carregar feed');
        const data = await response.json();
        
        if (isMounted) {
          setPosts(data.posts.slice(0, 6));
          setError(false);
        }
      } catch (err) {
        console.error('Erro no Instagram Feed:', err);
        if (isMounted) setError(true);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchPosts();
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 w-full bg-white rounded-3xl border border-gray-100 shadow-sm">
        <Loader2 className="w-10 h-10 text-mattos-primary animate-spin mb-4" />
        <p className="text-gray-500 font-medium">Carregando feed oficial...</p>
      </div>
    );
  }

  if (error || posts.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-3xl border border-dashed border-gray-200">
        <p className="text-gray-500 mb-4">Não conseguimos carregar as fotos automaticamente.</p>
        <a 
          href="https://www.instagram.com/labmattos/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-mattos-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-mattos-dark transition-colors"
        >
          <Instagram className="w-5 h-5" />
          Ver perfil no Instagram
        </a>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {posts.map((post, index) => (
        <Dialog key={post.id}>
          <DialogTrigger asChild>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98] 
              }}
              className="cursor-pointer group relative aspect-square overflow-hidden rounded-2xl bg-gray-50 shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              <img
                src={post.mediaType === 'VIDEO' && post.thumbnailUrl ? post.thumbnailUrl : post.mediaUrl}
                alt="Instagram post"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                 <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-2">
                      <Instagram className="w-5 h-5" strokeWidth={2.5} />
                      <span className="text-sm font-bold tracking-wide uppercase">Ampliar</span>
                    </div>
                 </div>
              </div>
              {post.mediaType === 'VIDEO' && (
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md p-2 rounded-xl text-white">
                  <Play className="w-4 h-4 fill-current" />
                </div>
              )}
            </motion.div>
          </DialogTrigger>
          
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-none shadow-2xl [&>button]:text-white">
            <DialogTitle className="sr-only">Post do Instagram</DialogTitle>
            <div className="flex flex-col md:flex-row h-[85vh] sm:h-[80vh] max-h-[800px] w-full">
              {/* Media Section */}
              <div className="flex-1 bg-black flex items-center justify-center relative min-h-[50vh] md:min-h-0">
                {post.mediaType === 'VIDEO' ? (
                  <video src={post.mediaUrl} controls autoPlay className="w-full h-full object-contain" />
                ) : (
                  <img src={post.mediaUrl} alt="" className="w-full h-full object-contain" />
                )}
              </div>
              
              {/* Caption Section */}
              <div className="w-full md:w-[350px] bg-white flex flex-col h-full">
                {/* Header */}
                <div className="p-4 flex items-center gap-3 border-b border-gray-100 shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 p-[2px]">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                      <Instagram className="w-5 h-5 text-pink-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-mattos-dark">labmattos</h4>
                    <p className="text-xs text-gray-500">Laboratório Mattos</p>
                  </div>
                </div>
                
                {/* Caption Body */}
                <div className="p-4 overflow-y-auto flex-1">
                  <p className="text-sm text-gray-700 whitespace-pre-wrap">
                    {post.caption}
                  </p>
                </div>
                
                {/* Footer Action */}
                <div className="p-4 border-t border-gray-100 shrink-0 bg-gray-50">
                  <a 
                    href={post.permalink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-mattos-primary text-white py-3 rounded-xl font-semibold hover:bg-mattos-dark transition-colors shadow-sm"
                  >
                    <Instagram className="w-4 h-4" />
                    Ver no Instagram
                  </a>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}



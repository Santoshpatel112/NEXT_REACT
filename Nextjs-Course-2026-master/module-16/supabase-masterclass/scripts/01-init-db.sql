-- Create posts table
CREATE TABLE IF NOT EXISTS posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content JSONB NOT NULL,
  excerpt TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Enable RLS
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- RLS Policies for posts
CREATE POLICY "Users can view all posts" ON posts FOR SELECT USING (true);
CREATE POLICY "Users can create their own posts" ON posts FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own posts" ON posts FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete their own posts" ON posts FOR DELETE USING (auth.uid() = user_id);

-- Create storage bucket for images
INSERT INTO storage.buckets (id, name, public) VALUES ('blog-images', 'blog-images', true) ON CONFLICT DO NOTHING;

-- RLS Policies for storage
CREATE POLICY "Public read access" ON storage.objects FOR SELECT USING (bucket_id = 'blog-images');
CREATE POLICY "Authenticated users can upload" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'blog-images' AND auth.role() = 'authenticated');
CREATE POLICY "Users can delete their own uploads" ON storage.objects FOR DELETE USING (bucket_id = 'blog-images' AND auth.uid() = owner);

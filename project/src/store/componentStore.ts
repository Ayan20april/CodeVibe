import { create } from 'zustand';
import { supabase } from '../lib/supabase';

interface Component {
  id: string;
  project_id: string;
  name: string;
  type: string;
  content: Record<string, any>;
  created_at: string;
  updated_at: string;
}

interface ComponentState {
  components: Component[];
  loading: boolean;
  createComponent: (projectId: string, name: string, type: string, content: Record<string, any>) => Promise<void>;
  fetchComponents: (projectId: string) => Promise<void>;
  updateComponent: (id: string, updates: Partial<Component>) => Promise<void>;
  deleteComponent: (id: string) => Promise<void>;
}

export const useComponentStore = create<ComponentState>((set, get) => ({
  components: [],
  loading: false,
  createComponent: async (projectId: string, name: string, type: string, content: Record<string, any>) => {
    const { data, error } = await supabase
      .from('components')
      .insert([{ project_id: projectId, name, type, content }])
      .select()
      .single();

    if (error) throw error;
    set({ components: [...get().components, data] });
  },
  fetchComponents: async (projectId: string) => {
    set({ loading: true });
    const { data, error } = await supabase
      .from('components')
      .select('*')
      .eq('project_id', projectId)
      .order('created_at', { ascending: true });

    if (error) throw error;
    set({ components: data || [], loading: false });
  },
  updateComponent: async (id: string, updates: Partial<Component>) => {
    const { error } = await supabase
      .from('components')
      .update(updates)
      .eq('id', id);

    if (error) throw error;
    set({
      components: get().components.map((c) =>
        c.id === id ? { ...c, ...updates } : c
      ),
    });
  },
  deleteComponent: async (id: string) => {
    const { error } = await supabase.from('components').delete().eq('id', id);

    if (error) throw error;
    set({ components: get().components.filter((c) => c.id !== id) });
  },
}));
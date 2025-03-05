import { create } from 'zustand';
import { supabase } from '../lib/supabase';

interface Project {
  id: string;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
}

interface ProjectState {
  projects: Project[];
  loading: boolean;
  createProject: (name: string, description: string) => Promise<void>;
  fetchProjects: () => Promise<void>;
  updateProject: (id: string, updates: Partial<Project>) => Promise<void>;
  deleteProject: (id: string) => Promise<void>;
}

export const useProjectStore = create<ProjectState>((set, get) => ({
  projects: [],
  loading: false,
  createProject: async (name: string, description: string) => {
    const { data, error } = await supabase
      .from('projects')
      .insert([{ name, description }])
      .select()
      .single();

    if (error) throw error;
    set({ projects: [...get().projects, data] });
  },
  fetchProjects: async () => {
    set({ loading: true });
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    set({ projects: data || [], loading: false });
  },
  updateProject: async (id: string, updates: Partial<Project>) => {
    const { error } = await supabase
      .from('projects')
      .update(updates)
      .eq('id', id);

    if (error) throw error;
    set({
      projects: get().projects.map((p) =>
        p.id === id ? { ...p, ...updates } : p
      ),
    });
  },
  deleteProject: async (id: string) => {
    const { error } = await supabase.from('projects').delete().eq('id', id);

    if (error) throw error;
    set({ projects: get().projects.filter((p) => p.id !== id) });
  },
}));
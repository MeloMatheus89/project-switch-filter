export interface Switch {
  id: string;
  model: string;
  ports: number;
  hasPoe: boolean;
  hasManagement: boolean;
  imageUrl: string;
  description: string;
}

export const mockSwitches: Switch[] = [
  {
    id: '1',
    model: 'SG350-28P',
    ports: 28,
    hasPoe: true,
    hasManagement: true,
    imageUrl: 'https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?auto=format&fit=crop&q=80&w=600',
    description: 'Enterprise managed switch with PoE+ support'
  },
  {
    id: '2',
    model: 'GS308E',
    ports: 8,
    hasPoe: false,
    hasManagement: true,
    imageUrl: 'https://images.unsplash.com/photo-1647427017067-8f33c2159764?auto=format&fit=crop&q=80&w=600',
    description: 'Smart managed switch for small businesses'
  },
  {
    id: '3',
    model: 'TL-SG1024PE',
    ports: 24,
    hasPoe: true,
    hasManagement: false,
    imageUrl: 'https://images.unsplash.com/photo-1636389657137-97aba60026a1?auto=format&fit=crop&q=80&w=600',
    description: 'Unmanaged PoE switch for simple deployments'
  },
  {
    id: '4',
    model: 'CBS350-48P',
    ports: 48,
    hasPoe: true,
    hasManagement: true,
    imageUrl: 'https://images.unsplash.com/photo-1647427017067-8f33c2159764?auto=format&fit=crop&q=80&w=600',
    description: 'High-performance managed switch with full PoE+ capability'
  },
  {
    id: '5',
    model: 'GS105E',
    ports: 5,
    hasPoe: false,
    hasManagement: true,
    imageUrl: 'https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?auto=format&fit=crop&q=80&w=600',
    description: 'Compact smart managed switch for home offices'
  },
  {
    id: '6',
    model: 'TL-SG1016PE',
    ports: 16,
    hasPoe: true,
    hasManagement: false,
    imageUrl: 'https://images.unsplash.com/photo-1636389657137-97aba60026a1?auto=format&fit=crop&q=80&w=600',
    description: 'Mid-range PoE switch for small networks'
  },
  {
    id: '7',
    model: 'SG550X-24',
    ports: 24,
    hasPoe: false,
    hasManagement: true,
    imageUrl: 'https://images.unsplash.com/photo-1647427017067-8f33c2159764?auto=format&fit=crop&q=80&w=600',
    description: 'Advanced managed switch with 10G uplinks'
  },
  {
    id: '8',
    model: 'GS724TPv2',
    ports: 24,
    hasPoe: true,
    hasManagement: true,
    imageUrl: 'https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?auto=format&fit=crop&q=80&w=600',
    description: 'Business-class managed PoE switch with advanced features'
  },
  {
    id: '9',
    model: 'TL-SG108E',
    ports: 8,
    hasPoe: false,
    hasManagement: true,
    imageUrl: 'https://images.unsplash.com/photo-1636389657137-97aba60026a1?auto=format&fit=crop&q=80&w=600',
    description: 'Easy-smart managed switch for basic networks'
  },
  {
    id: '10',
    model: 'MS510TX',
    ports: 10,
    hasPoe: true,
    hasManagement: true,
    imageUrl: 'https://images.unsplash.com/photo-1647427017067-8f33c2159764?auto=format&fit=crop&q=80&w=600',
    description: 'Multi-gigabit smart managed switch with PoE+'
  }
];
import { Task } from "@/types/tasks.types";

export const TASKS: Task[] = [
    {
        id: '1',
        category: 'Grocery shopping app design',
        title: 'Market Research',
        time: '10:00 AM',
        status: 'Done',
        icon: {
            name: 'grid-outline',
            backgroundColor: '#FF6B8A'
        }
    },
    {
        id: '2',
        category: 'Grocery shopping app design',
        title: 'Competitive Analysis',
        time: '12:00 PM',
        status: 'Done',
        icon: {
            name: 'grid-outline',
            backgroundColor: '#FF6B8A'
        }
    },
    {
        id: '3',
        category: 'Uber Eats redesign challenge',
        title: 'Create Low-fidelity Wireframe',
        time: '07:00 PM',
        status: 'To-Do',
        icon: {
            name: 'arrow-down-circle-outline',
            backgroundColor: '#4ADE80'
        }
    },
    {
        id: '4',
        category: 'Uber Eats redesign challenge',
        title: 'Design User Flow',
        time: '09:00 AM',
        status: 'Done',
        icon: {
            name: 'git-network-outline',
            backgroundColor: '#60A5FA'
        }
    },
    {
        id: '5',
        category: 'Fitness tracking app',
        title: 'Create Dashboard Layout',
        time: '11:30 AM',
        status: 'Done',
        icon: {
            name: 'grid-outline',
            backgroundColor: '#F59E0B'
        }
    },
    {
        id: '6',
        category: 'Fitness tracking app',
        title: 'Add Activity Charts',
        time: '02:00 PM',
        status: 'To-Do',
        icon: {
            name: 'bar-chart-outline',
            backgroundColor: '#A78BFA'
        }
    },
    {
        id: '7',
        category: 'E-commerce mobile app',
        title: 'Product Listing UI',
        time: '03:30 PM',
        status: 'Done',
        icon: {
            name: 'bag-outline',
            backgroundColor: '#34D399'
        }
    },
    {
        id: '8',
        category: 'E-commerce mobile app',
        title: 'Shopping Cart Integration',
        time: '05:00 PM',
        status: 'Done',
        icon: {
            name: 'cart-outline',
            backgroundColor: '#F87171'
        }
    },
    {
        id: '9',
        category: 'Messaging app redesign',
        title: 'Chat Screen Prototype',
        time: '06:30 PM',
        status: 'To-Do',
        icon: {
            name: 'chatbubble-outline',
            backgroundColor: '#22D3EE'
        }
    },
    {
        id: '10',
        category: 'Messaging app redesign',
        title: 'Push Notification Setup',
        time: '08:00 PM',
        status: 'To-Do',
        icon: {
            name: 'notifications-outline',
            backgroundColor: '#FB923C'
        }
    }
];

export const FILTER_OPTIONS = ["All", "To-Do", 'In Progress', 'Done'] as const
export type FilterOptionsType = (typeof FILTER_OPTIONS)[number]
import {
  AiOutlineFileProtect,
  AiOutlineProfile,
  AiOutlineException,
} from 'react-icons/ai';

import { BiGitBranch, BiRocket } from 'react-icons/bi';
import { BsShieldCheck } from 'react-icons/bs';

const menus = [
  {
    icon: <AiOutlineFileProtect size={16} />,
    title: 'Project Information',
    children: [
      { title: 'Activity' },
      { title: 'Labels' },
      { title: 'Members' },
    ],
  },
  {
    icon: <AiOutlineProfile size={16} />,
    title: 'Repository',
    children: [
      { title: 'Files' },
      { title: 'Commits' },
      { title: 'Branches' },
      { title: 'Tags' },
      { title: 'Contributors' },
      { title: 'Graph' },
      { title: 'Compare' },
    ],
  },
  {
    icon: <AiOutlineException size={16} />,
    title: 'Issues',
    children: [
      { title: 'List' },
      { title: 'Boards' },
      { title: 'Service Desk' },
      { title: 'Milestones' },
    ],
  },
  { icon: <BiGitBranch size={16} />, title: 'Merge Requests' },
  {
    icon: <BiRocket size={16} />,
    title: 'CI/CD',
    children: [
      { title: 'Pipelines' },
      { title: 'Editor' },
      { title: 'Jobs' },
      { title: 'Schedules' },
    ],
  },
  {
    icon: <BsShieldCheck size={16} />,
    title: 'Security & Complience',
    children: [
      { title: 'Discover' },
      { title: 'Audit Events' },
      { title: 'Configuration' },
    ],
  },
];

export default menus;

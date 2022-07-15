import {
  AiOutlineFileProtect,
  AiOutlineProfile,
  AiOutlineException,
} from 'react-icons/ai';

import { BiGitBranch } from 'react-icons/bi';

import { FiEdit } from 'react-icons/fi';

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
  { icon: <FiEdit size={15} />, title: 'Jira' },
  { icon: <BiGitBranch size={16} />, title: 'Merge Requests' },
];

export default menus;

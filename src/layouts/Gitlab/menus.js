import {
  AiOutlineFileProtect,
  AiOutlineProfile,
  AiOutlineException,
  AiOutlineCloudServer,
  AiOutlineAreaChart,
  AiOutlineDeploymentUnit,
  AiOutlineFormatPainter,
} from 'react-icons/ai';
import { BiGitBranch, BiRocket } from 'react-icons/bi';
import { BsShieldCheck, BsGear } from 'react-icons/bs';
import { FiMonitor } from 'react-icons/fi';
import { TbCut, TbPackage } from 'react-icons/tb';

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
  {
    icon: <BiGitBranch size={16} />,
    title: 'Merge Requests',
  },
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
  {
    icon: <AiOutlineDeploymentUnit size={16} />,
    title: 'Deployments',
    children: [
      { title: 'Feature Flags' },
      { title: 'Environments' },
      { title: 'Releases' },
    ],
  },
  {
    icon: <TbPackage size={16} />,
    title: 'Packages & Registries',
    children: [
      { title: 'Package Registry' },
      { title: 'Container Registry' },
      { title: 'Infrastructure Registry' },
    ],
  },
  {
    icon: <AiOutlineCloudServer size={16} />,
    title: 'Infrastructure',
    children: [{ title: 'Kubernetes Clusters' }, { title: 'Terraform' }],
  },
  {
    icon: <FiMonitor size={16} />,
    title: 'Monitor',
    children: [
      { title: 'Matrics' },
      { title: 'Error Tracking' },
      { title: 'Alerts' },
      { title: 'Incidents' },
    ],
  },
  {
    icon: <AiOutlineAreaChart size={16} />,
    title: 'Analytics',
    children: [
      { title: 'Value Stream' },
      { title: 'CI/CD' },
      { title: 'Repository' },
    ],
  },
  {
    icon: <AiOutlineFormatPainter size={16} />,
    title: 'Wiki',
  },
  {
    icon: <TbCut size={16} />,
    title: 'Snippets',
  },
  {
    icon: <BsGear size={16} />,
    title: 'Settings',
    children: [
      { title: 'General' },
      { title: 'Integrations' },
      { title: 'Webhooks' },
      { title: 'Repository' },
      { title: 'CI/CD' },
      { title: 'Packages & Registries' },
      { title: 'Pages' },
      { title: 'Monitor' },
      { title: 'Usage Quotas' },
    ],
  },
];

export default menus;

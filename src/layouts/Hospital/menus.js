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
    icon: AiOutlineFileProtect,
    title: 'Project Information',
    children: [
      { title: 'Activity' },
      { title: 'Labels' },
      { title: 'Members' },
    ],
  },
  {
    icon: AiOutlineProfile,
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
    icon: AiOutlineException,
    title: 'Issues',
    children: [
      { title: 'List' },
      { title: 'Boards' },
      { title: 'Service Desk' },
      { title: 'Milestones' },
    ],
  },
  {
    icon: BiGitBranch,
    title: 'Merge Requests',
  },
  {
    icon: BiRocket,
    title: 'CI/CD',
    children: [
      { title: 'Pipelines' },
      { title: 'Editor' },
      { title: 'Jobs' },
      { title: 'Schedules' },
    ],
  },
  {
    icon: BsShieldCheck,
    title: 'Security & Complience',
    children: [
      { title: 'Discover' },
      { title: 'Audit Events' },
      { title: 'Configuration' },
    ],
  },
  {
    icon: AiOutlineDeploymentUnit,
    title: 'Deployments',
    children: [
      { title: 'Feature Flags' },
      { title: 'Environments' },
      { title: 'Releases' },
    ],
  },
  {
    icon: TbPackage,
    title: 'Packages & Registries',
    children: [
      { title: 'Package Registry' },
      { title: 'Container Registry' },
      { title: 'Infrastructure Registry' },
    ],
  },
  {
    icon: AiOutlineCloudServer,
    title: 'Infrastructure',
    children: [{ title: 'Kubernetes Clusters' }, { title: 'Terraform' }],
  },
  {
    icon: FiMonitor,
    title: 'Monitor',
    children: [
      { title: 'Matrics' },
      { title: 'Error Tracking' },
      { title: 'Alerts' },
      { title: 'Incidents' },
    ],
  },
  {
    icon: AiOutlineAreaChart,
    title: 'Analytics',
    children: [
      { title: 'Value Stream' },
      { title: 'CI/CD' },
      { title: 'Repository' },
    ],
  },
  {
    icon: AiOutlineFormatPainter,
    title: 'Wiki',
  },
  {
    icon: TbCut,
    title: 'Snippets',
  },
  {
    icon: BsGear,
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

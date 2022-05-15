export default [
  {
    title: 'Home',
    route: 'home',
    icon: 'HomeIcon',
  },
  {
    title: 'Open Transction',
    route: 'open',
    icon: 'EyeIcon',
  },
  {
    title: 'Close Transction',
    route: 'close',
    icon: 'EyeOffIcon',
  },
  {
    title: 'Monetery Transction',
    route: 'transaction',
    icon: 'PocketIcon',
  },
  {
    title: 'Edit Details',
    route: 'edit',
    icon: 'EditIcon',
  },
  {
    title: 'Trade',
    icon: 'CreditCardIcon',
    children: [
      {
        title: 'Web Trade',
        route: 'trade',
        icon: 'GlobeIcon',
      },
      {

        title: 'Download MT4',
        route: 'mt4',
        icon: 'PocketIcon',
      },
    ],
  },
]

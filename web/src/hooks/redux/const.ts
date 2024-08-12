export const roles = [
  {
    value: 'staff',
    label: 'Staff',
  },
  { value: 'admin', label: 'admin' },
]
export const suffixoption = [
  {
    value: null,
    label: 'Suffix',
    disabled: true,
    selected: true,
    hidden: true,
  },
  {
    value: 'N/A',
    label: 'N/A',
  },

  {
    value: 'Jr.',
    label: 'Jr.',
  },
  {
    value: 'Sr.',
    label: 'Sr.',
  },
  {
    value: 'I',
    label: 'I',
  },
  {
    value: 'II',
    label: 'II',
  },
  {
    value: 'III',
    label: 'III',
  },
  {
    value: 'IV',
    label: 'IV',
  },
]
export const Monthoption = [
  {
    value: 0,
    label: 'Month',
    disabled: true,
    selected: true,
    hidden: true,
  },
  {
    value: 'january',
    label: 'January',
  },
  {
    value: 'febuary',
    label: 'Febuary',
  },
  {
    value: 'march',
    label: 'March',
  },
  {
    value: 'april',
    label: 'April',
  },
  {
    value: 'may',
    label: 'May',
  },
  {
    value: 'june',
    label: 'June',
  },
  {
    value: 'july',
    label: 'July',
  },
  {
    value: 'august',
    label: 'August',
  },
  {
    value: 'september',
    label: 'September',
  },
  {
    value: 'october',
    label: 'October',
  },
  {
    value: 'november',
    label: 'November',
  },
  {
    value: 'december',
    label: 'December',
  },
]

export const sex = [
  {
    value: null,
    label: 'Sex',
    disabled: true,
    selected: true,
    hidden: true,
  },
  {
    value: 'male',
    label: 'Male',
  },
  {
    value: 'female',
    label: 'Female',
  },
]

export const Gender = [
  {
    value: 0,
    label: 'Gender',
    disabled: true,
    selected: true,
    hidden: true,
  },
  {
    value: 'man',
    label: 'Man',
  },
  {
    value: 'woman',
    label: 'Woman',
  },
  {
    value: 'lgbtqa+',
    label: 'LGBTQA+',
  },
]

export const Civilstatus = [
  {
    value: 0,
    label: 'Civil Status',
    disabled: true,
    selected: true,
    hidden: true,
  },
  {
    value: 'single',
    label: 'Single',
  },
  {
    value: 'married',
    label: 'Married',
  },
  {
    value: 'widowed',
    label: 'Widowed',
  },
  {
    value: 'singleparent',
    label: 'Single Parent',
  },
  {
    value: 'livein',
    label: 'Cohabiting/Live-in',
  },
]

export const IndigentP = [
  {
    value: 0,
    label: "Are you a member of Indigenous People's Community?",
    disabled: true,
    selected: true,
    hidden: true,
  },
  {
    value: 'yes',
    label: 'Yes',
    showTextInput: true, // Added property to indicate if TextInput should be shown
  },
  {
    value: 'no',
    label: 'No',
    showTextInput: false, // Added property to indicate if TextInput should be shown
  },
]

export const SDistrict = [
  {
    value: 0,
    label: 'District',
    disabled: true,
    selected: true,
    hidden: true,
  },
  {
    value: 'd1',
    label: 'Babak District',
    showTextInput: false, // Added property to indicate if TextInput should be shown
  },
  {
    value: 'd2',
    label: 'Samal District',
    showTextInput: false, // Added property to indicate if TextInput should be shown
  },
  {
    value: 'd3',
    label: 'Kaputian District',
    showTextInput: false, // Added property to indicate if TextInput should be shown
  },
  {
    value: 'other',
    label: 'Outside IGACOS',
    showTextInput: true, // Added property to indicate if TextInput should be shown
  },
]

export const famBackground = [
  {
    value: 0,
    label: 'Family Background',
    disabled: true,
    selected: true,
    hidden: true,
  },
  {
    value: 'plt',
    label: 'Parent Living together',
    showTextInput: false,
  },
  {
    value: 'df',
    label: 'Deceased Father',
    showTextInput: false,
  },
  {
    value: 'dm',
    label: 'Deceased Mother',
    showTextInput: false,
  },
  {
    value: 'dr',
    label: 'Father Remarried',
    showTextInput: false,
  },
  {
    value: 'mr',
    label: 'Mother Remarried',
    showTextInput: false,
  },
  {
    value: 'pssw',
    label: 'Parents Separated, since when?',
    showTextInput: true, // Added property to indicate if TextInput should be shown
  },
]
export const Ofw = [
  {
    value: null,
    label: 'Do you have a family member who is an OFW?',
    disabled: true,
    selected: true,
    hidden: true,
  },
  {
    value: 'yes',
    label: 'Yes',
    showTextInput: true, // Added property to indicate if TextInput should be shown
  },
  {
    value: 'no',
    label: 'No',
    showTextInput: false, // Added property to indicate if TextInput should be shown
  },
]

export const Scategory = [
  {
    value: 0,
    label: 'Student Category',
    disabled: true,
    selected: false,
    hidden: true,
  },
  {
    value: 'Ftime',
    label: 'Full Time',
    showTextInput: false, // Added property to indicate if TextInput should be shown
  },
  {
    value: 'Wstudent',
    label: 'Working Student',
    showTextInput: true, // Added property to indicate if TextInput should be shown
  },
]

export const Studenttype = [
  {
    value: 0,
    label: 'Type of Student',
    disabled: true,
    selected: false,
    hidden: true,
  },
  {
    value: 'college1',
    label: '1st year College',
  },
  {
    value: 'trans',
    label: 'Transferee',
  },
  {
    value: 'returnee',
    label: 'Returnee',
  },
  {
    value: 'crossenrolle',
    label: 'Cross-enrollee',
  },
]

export const Scourse = [
  {
    value: 0,
    label: 'Select Course',
    disabled: true,
    selected: false,
    hidden: true,
  },
  {
    value: '1',
    label: 'BS Agri Bussiness',
  },
  {
    value: '2',
    label: 'BS Entrepreneuship',
  },
  {
    value: '3',
    label: 'Bachelor of Public Administration',
  },
  {
    value: '4',
    label: 'BS Tourism Management',
  },
  {
    value: '5',
    label: 'BS Criminology',
  },
]

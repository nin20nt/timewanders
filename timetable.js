// Check if user is logged in
if (sessionStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'index.html';
}

// Subject colors
const subjectColors = {
    'Maths Advanced': '#fcbbbb',
    'Maths Adv + Ext': '#fcbbbb',
    'Maths Extension 1': '#fcbbbb',
    'Visual Arts': '#ffbbdb',
    'Music 2': '#fcbbf4',
    'Textiles and Design': '#e9bbfc',
    'Food Technology': '#c9bbfc',
    'Chemistry': '#bbd2fc',
    'Physics': '#b7f5ed',
    'Biology': '#bbf5bc',
    'English Advanced': '#feffc2',
    'English Extension': '#fce0bb',
    'Geography Accelerated': '#dafbdb',
    'Economics': '#7cd3c3',
    'Legal Studies': '#8eaeeb',
    'HSC Software Engineering': '#d1d5dd',
    'Modern History': '#ede2d8'
};

// Timetable data
const timetableData = {
    'Emily': {
        A: {
            Monday: {
                '1': { subject: 'English Advanced', class: '11ENKD', teacher: 'J. Leonard', room: '208' },
                '2': { subject: 'Biology', class: '11BIOC', teacher: 'C. Yu', room: '404' },
                '3': { subject: 'Chemistry', class: '11CHEMF', teacher: 'D. Li', room: '401' },
                '4': { subject: 'Music 2', class: '11MUS2E', teacher: 'C. Mok', room: '101' }
            },
            Tuesday: {
                '1': { subject: 'Chemistry', class: '11CHEMF', teacher: 'D. Li', room: '401' },
                '2': { subject: 'Biology', class: '11BIOC', teacher: 'M. Allen-Scott', room: '404' },
                '3': { subject: 'Music 2', class: '11MUS2E', teacher: 'C. Mok', room: '206' },
                '4': { subject: 'Food Technology', class: '11FTD', teacher: 'M. Bloomfield', room: '317' }
            },
            Wednesday: {
                '1': { subject: 'Study', teacher: 'H. Cleary', room: 'Library' },
                '2': { subject: 'Maths Advanced', class: '11MA2UK', teacher: 'K. Murray', room: '305' },
                '3': { subject: 'Food Technology', class: '11FTD', teacher: 'M. Bloomfield', room: '317' },
                '4': { subject: 'Biology', class: '11BIOC', teacher: 'M. Allen-Scott', room: '404' }
            },
            Thursday: {
                '1': { subject: 'Food Technology', class: '11FTD', teacher: 'R. Robinson', room: '314' },
                '2': { subject: 'Music 2', class: '11MUS2E', teacher: 'C. Mok', room: '206' },
                '3': { subject: 'Maths Advanced', class: '11MA2UK', teacher: 'K. Murray', room: '305' },
                '4': { subject: 'English Advanced', class: '11ENKD', teacher: 'J. Leonard', room: '208' }
            },
            Friday: {
                '1': { subject: 'Chemistry', class: '11CHEMF', teacher: 'D. Li', room: '401' },
                '2': { subject: 'English Advanced', class: '11ENKD', teacher: 'J. Leonard', room: '215' },
                '3': { subject: 'Building Strength', class: '11BU1', teacher: 'K. Moss, I. Pozzolungo' },
                '4': { subject: 'Maths Advanced', class: '11MA2UK', teacher: 'K. Murray', room: '305' }
            }
        },
        B: {
            Monday: {
                '1': { subject: 'Chemistry', class: '11CHEMF', teacher: 'D. Li', room: '401' },
                '2': { subject: 'English Advanced', class: '11ENKD', teacher: 'J. Leonard', room: '208' },
                '3': { subject: 'Biology', class: '11BIOC', teacher: 'M. Allen-Scott', room: '404' },
                '4': { subject: 'Music 2', class: '11MUS2E', teacher: 'C. Mok', room: '101' }
            },
            Tuesday: {
                '1': { subject: 'Biology', class: '11BIOC', teacher: 'M. Allen-Scott', room: '404' },
                '2': { subject: 'Maths Advanced', class: '11MA2UK', teacher: 'K. Murray', room: '305' },
                '3': { subject: 'Music 2', class: '11MUS2E', teacher: 'C. Mok', room: '101' },
                '4': { subject: 'Food Technology', class: '11FTD', teacher: 'M. Bloomfield', room: '314' }
            },
            Wednesday: {
                '1': { subject: 'Study', teacher: 'H. Cleary', room: 'Library' },
                '2': { subject: 'Maths Advanced', class: '11MA2UK', teacher: 'K. Murray', room: '305' },
                '3': { subject: 'Food Technology', class: '11FTD', teacher: 'R. Robinson', room: '317' },
                '4': { subject: 'English Advanced', class: '11ENKD', teacher: 'J. Leonard', room: '208' }
            },
            Thursday: {
                '1': { subject: 'Music 2', class: '11MUS2E', teacher: 'C. Mok', room: '206' },
                '2': { subject: 'Chemistry', class: '11CHEMF', teacher: 'D. Li', room: '401' },
                '3': { subject: 'Food Technology', class: '11FTD', teacher: 'D. McClure', room: '314' },
                '4': { subject: 'Study', teacher: 'H. Cleary', room: 'Library' }
            },
            Friday: {
                '1': { subject: 'English Advanced', class: '11ENKD', teacher: 'J. Leonard', room: '208' },
                '2': { subject: 'Maths Advanced', class: '11MA2UK', teacher: 'K. Murray', room: '305' },
                '3': { subject: 'Biology', class: '11BIOC', teacher: 'M. Allen-Scott', room: '404' },
                '4': { subject: 'Chemistry', class: '11CHEMF', teacher: 'D. Li', room: '401' }
            }
        }
    },
    'Erica': {
        A: {
            Monday: {
                '1': { subject: 'English Advanced', class: '11ENKC', teacher: 'A. Bhattacharya', room: '202' },
                '2': { subject: 'Economics', class: '11ECOC', teacher: 'S. Boden', room: '208' },
                '3': { subject: 'Chemistry', class: '11CHEMF', teacher: 'D. Li', room: '401' },
                '4': { subject: 'Visual Arts', class: '11VAE', teacher: 'I. Farnon', room: 'VA4' }
            },
            Tuesday: {
                '1': { subject: 'Chemistry', class: '11CHEMF', teacher: 'D. Li', room: '401' },
                '2': { subject: 'Economics', class: '11ECOC', teacher: 'S. Boden', room: '208' },
                '3': { subject: 'Visual Arts', class: '11VAE', teacher: 'I. Farnon', room: 'VA4' },
                '4': { subject: 'Study', teacher: 'H. Cleary', room: 'Library' }
            },
            Wednesday: {
                '1': { subject: 'Maths Extension 1', class: '11MAEG', teacher: 'K. Guan', room: '301' },
                '2': { subject: 'Maths Adv + Ext', class: '11MAG', teacher: 'K. Guan', room: '301' },
                '3': { subject: 'English Extension', class: '11ENEXD', teacher: 'M. Carroll', room: '311' },
                '4': { subject: 'Economics', class: '11ECOC', teacher: 'S. Boden', room: '208' }
            },
            Thursday: {
                '1': { subject: 'English Extension', class: '11ENEXD', teacher: 'M. Carroll', room: '311' },
                '2': { subject: 'Visual Arts', class: '11VAE', teacher: 'I. Farnon', room: 'VA4' },
                '3': { subject: 'Maths Adv + Ext', class: '11MAG', teacher: 'K. Guan', room: '301' },
                '4': { subject: 'English Advanced', class: '11ENKC', teacher: 'A. Bhattacharya', room: '202' }
            },
            Friday: {
                '1': { subject: 'Chemistry', class: '11CHEMF', teacher: 'D. Li', room: '401' },
                '2': { subject: 'English Advanced', class: '11ENKC', teacher: 'A. Bhattacharya', room: '202' },
                '3': { subject: 'Building Strength', class: '11SBU1', teacher: 'K. Moss, I. Pozzolungo' },
                '4': { subject: 'Maths Adv + Ext', class: '11MAG', teacher: 'K. Guan', room: '301' }
            }
        },
        B: {
            Monday: {
                '1': { subject: 'Chemistry', class: '11CHEMF', teacher: 'D. Li', room: '401' },
                '2': { subject: 'English Advanced', class: '11ENKC', teacher: 'A. Bhattacharya', room: '202' },
                '3': { subject: 'Economics', class: '11ECOC', teacher: 'S. Boden', room: '208' },
                '4': { subject: 'Visual Arts', class: '11VAE', teacher: 'I. Farnon', room: 'VA4' }
            },
            Tuesday: {
                '1': { subject: 'Economics', class: '11ECOC', teacher: 'S. Boden', room: '208' },
                '2': { subject: 'Maths Adv + Ext', class: '11MAG', teacher: 'K. Guan', room: '301' },
                '3': { subject: 'Visual Arts', class: '11VAE', teacher: 'I. Farnon', room: 'VA4' },
                '4': { subject: 'Study', teacher: 'H. Cleary', room: 'Library' }
            },
            Wednesday: {
                '1': { subject: 'Maths Extension 1', class: '11MAEG', teacher: 'K. Guan', room: '301' },
                '2': { subject: 'Maths Adv + Ext', class: '11MAG', teacher: 'K. Guan', room: '301' },
                '3': { subject: 'Study', teacher: 'H. Cleary', room: 'Library' },
                '4': { subject: 'English Advanced', class: '11ENKC', teacher: 'A. Bhattacharya', room: '202' }
            },
            Thursday: {
                '1': { subject: 'Visual Arts', class: '11VAE', teacher: 'I. Farnon', room: 'VA4' },
                '2': { subject: 'Chemistry', class: '11CHEMF', teacher: 'D. Li', room: '401' },
                '3': { subject: 'English Extension', class: '11ENEXD', teacher: 'M. Carroll', room: '311' },
                '4': { subject: 'Maths Extension 1', class: '11MAEG', teacher: 'K. Guan', room: '301' }
            },
            Friday: {
                '1': { subject: 'English Advanced', class: '11ENKC', teacher: 'A. Bhattacharya', room: '202' },
                '2': { subject: 'Maths Adv + Ext', class: '11MAG', teacher: 'K. Guan', room: '301' },
                '3': { subject: 'Economics', class: '11ECOC', teacher: 'S. Boden', room: '208' },
                '4': { subject: 'Chemistry', class: '11CHEMF', teacher: 'D. Li', room: '401' }
            }
        }
    },
    'Yuju': {
        A: {
            Monday: {
                '1': { subject: 'English Advanced', class: '11ENKC', teacher: 'A. Bhattacharya', room: '202' },
                '2': { subject: 'Modern History', class: '11MHC2', teacher: 'A. Brennan', room: '307' },
                '3': { subject: 'Biology', class: '11BIOF', teacher: 'J. Tulett', room: '403' },
                '4': { subject: 'Visual Arts', class: '11VAE', teacher: 'I. Farnon', room: 'VA4' }
            },
            Tuesday: {
                '1': { subject: 'Biology', class: '11BIOF', teacher: 'J. Tulett', room: '403' },
                '2': { subject: 'Modern History', class: '11MHC2', teacher: 'A. Brennan', room: '307' },
                '3': { subject: 'Visual Arts', class: '11VAE', teacher: 'I. Farnon', room: 'VA4' },
                '4': { subject: 'Study', teacher: 'H. Cleary', room: 'Library' }
            },
            Wednesday: {
                '1': { subject: 'Maths Extension 1', class: '11MAET', teacher: 'A. Tourikis', room: '303' },
                '2': { subject: 'Maths Adv + Ext', class: '11MAT', teacher: 'A. Tourikis', room: '303' },
                '3': { subject: 'English Extension', class: '11ENEXD', teacher: 'M. Carroll', room: '311' },
                '4': { subject: 'Modern History', class: '11MHC2', teacher: 'A. Brennan', room: '307' }
            },
            Thursday: {
                '1': { subject: 'English Extension', class: '11ENEXD', teacher: 'M. Carroll', room: '311' },
                '2': { subject: 'Visual Arts', class: '11VAE', teacher: 'I. Farnon', room: 'VA4' },
                '3': { subject: 'Maths Adv + Ext', class: '11MAT', teacher: 'A. Tourikis', room: '303' },
                '4': { subject: 'English Advanced', class: '11ENKC', teacher: 'A. Bhattacharya', room: '202' }
            },
            Friday: {
                '1': { subject: 'Biology', class: '11BIOF', teacher: 'J. Tulett', room: '403' },
                '2': { subject: 'English Advanced', class: '11ENKC', teacher: 'A. Bhattacharya', room: '202' },
                '3': { subject: 'Building Strength', class: '11BU1', teacher: 'K. Moss, I. Pozzolungo' },
                '4': { subject: 'Maths Adv + Ext', class: '11MAT', teacher: 'A. Tourikis', room: '303' }
            }
        },
        B: {
            Monday: {
                '1': { subject: 'Biology', class: '11BIOF', teacher: 'J. Tulett', room: '403' },
                '2': { subject: 'English Advanced', class: '11ENKC', teacher: 'A. Bhattacharya', room: '202' },
                '3': { subject: 'Modern History', class: '11MHC2', teacher: 'A. Brennan', room: '307' },
                '4': { subject: 'Visual Arts', class: '11VAE', teacher: 'I. Farnon', room: 'VA4' }
            },
            Tuesday: {
                '1': { subject: 'Modern History', class: '11MHC2', teacher: 'A. Brennan', room: '307' },
                '2': { subject: 'Maths Adv + Ext', class: '11MAT', teacher: 'A. Tourikis', room: '303' },
                '3': { subject: 'Visual Arts', class: '11VAE', teacher: 'I. Farnon', room: 'VA4' },
                '4': { subject: 'Study', teacher: 'H. Cleary', room: 'Library' }
            },
            Wednesday: {
                '1': { subject: 'Maths Extension 1', class: '11MAET', teacher: 'A. Tourikis', room: '303' },
                '2': { subject: 'Maths Adv + Ext', class: '11MAT', teacher: 'A. Tourikis', room: '303' },
                '3': { subject: 'Study', teacher: 'H. Cleary', room: 'Library' },
                '4': { subject: 'English Advanced', class: '11ENKC', teacher: 'A. Bhattacharya', room: '202' }
            },
            Thursday: {
                '1': { subject: 'Visual Arts', class: '11VAE', teacher: 'I. Farnon', room: 'VA4' },
                '2': { subject: 'Biology', class: '11BIOF', teacher: 'J. Tulett', room: '403' },
                '3': { subject: 'English Extension', class: '11ENEXD', teacher: 'M. Carroll', room: '311' },
                '4': { subject: 'Maths Extension 1', class: '11MAET', teacher: 'A. Tourikis', room: '303' }
            },
            Friday: {
                '1': { subject: 'English Advanced', class: '11ENKC', teacher: 'A. Bhattacharya', room: '202' },
                '2': { subject: 'Maths Adv + Ext', class: '11MAT', teacher: 'A. Tourikis', room: '303' },
                '3': { subject: 'Modern History', class: '11MHC2', teacher: 'A. Brennan', room: '307' },
                '4': { subject: 'Biology', class: '11BIOF', teacher: 'J. Tulett', room: '403' }
            }
        }
    },
    'Vanessa': {
        A: {
            Monday: {
                '1': { subject: 'English Advanced', class: '11ENKB', teacher: 'M. Shonoda', room: '201' },
                '2': { subject: 'Study', teacher: 'H. Cleary', room: 'Library' },
                '3': { subject: 'Chemistry', class: '11CHEMF', teacher: 'D. Li', room: '401' },
                '4': { subject: 'Textiles and Design', class: '11TEXE', teacher: 'A. Graham', room: '315' }
            },
            Tuesday: {
                '1': { subject: 'Chemistry', class: '11CHEMF', teacher: 'D. Li', room: '401' },
                '2': { subject: 'Study', teacher: 'H. Cleary', room: 'Library' },
                '3': { subject: 'Textiles and Design', class: '11TEXE', teacher: 'A. Graham', room: '315' },
                '4': { subject: 'Biology', class: '11BIOD', teacher: 'D. Gove', room: '403' }
            },
            Wednesday: {
                '1': { subject: 'Maths Extension 1', class: '11MAES', teacher: 'L. Sztajer', room: '304' },
                '2': { subject: 'Maths Adv + Ext', class: '11MAS', teacher: 'L. Sztajer', room: '304' },
                '3': { subject: 'Biology', class: '11BIOD', teacher: 'D. Gove', room: '403' },
                '4': { subject: 'English Extension', class: '11ENEXC', teacher: 'R. Strauss', room: '211' }
            },
            Thursday: {
                '1': { subject: 'Biology', class: '11BIOD', teacher: 'D. Gove', room: '403' },
                '2': { subject: 'Textiles and Design', class: '11TEXE', teacher: 'A. Graham', room: '315' },
                '3': { subject: 'Maths Adv + Ext', class: '11MAS', teacher: 'L. Sztajer', room: '304' },
                '4': { subject: 'English Advanced', class: '11ENKB', teacher: 'M. Shonoda', room: '201' }
            },
            Friday: {
                '1': { subject: 'Chemistry', class: '11CHEMF', teacher: 'D. Li', room: '401' },
                '2': { subject: 'English Advanced', class: '11ENKB', teacher: 'M. Shonoda', room: '201' },
                '3': { subject: 'Building Strength', class: '11BU1', teacher: 'K. Moss, I. Pozzolungo' },
                '4': { subject: 'Maths Adv + Ext', class: '11MAS', teacher: 'L. Sztajer', room: '304' }
            }
        },
        B: {
            Monday: {
                '1': { subject: 'Chemistry', class: '11CHEMF', teacher: 'D. Li', room: '401' },
                '2': { subject: 'English Advanced', class: '11ENKB', teacher: 'M. Shonoda', room: '201' },
                '3': { subject: 'English Extension', class: '11ENEXC', teacher: 'R. Strauss', room: '211' },
                '4': { subject: 'Textiles and Design', class: '11TEXE', teacher: 'A. Graham', room: '315' }
            },
            Tuesday: {
                '1': { subject: 'Study', teacher: 'H. Cleary', room: 'Library' },
                '2': { subject: 'Maths Adv + Ext', class: '11MAS', teacher: 'L. Sztajer', room: '304' },
                '3': { subject: 'Textiles and Design', class: '11TEXE', teacher: 'A. Graham', room: '315' },
                '4': { subject: 'Biology', class: '11BIOD', teacher: 'D. Gove', room: '403' }
            },
            Wednesday: {
                '1': { subject: 'Maths Extension 1', class: '11MAES', teacher: 'L. Sztajer', room: '304' },
                '2': { subject: 'Maths Adv + Ext', class: '11MAS', teacher: 'L. Sztajer', room: '304' },
                '3': { subject: 'Biology', class: '11BIOD', teacher: 'D. Gove', room: '403' },
                '4': { subject: 'English Advanced', class: '11ENKB', teacher: 'M. Shonoda', room: '201' }
            },
            Thursday: {
                '1': { subject: 'Textiles and Design', class: '11TEXE', teacher: 'A. Graham', room: '315' },
                '2': { subject: 'Chemistry', class: '11CHEMF', teacher: 'D. Li', room: '401' },
                '3': { subject: 'Biology', class: '11BIOD', teacher: 'D. Gove', room: '403' },
                '4': { subject: 'Maths Extension 1', class: '11MAES', teacher: 'L. Sztajer', room: '304' }
            },
            Friday: {
                '1': { subject: 'English Advanced', class: '11ENKB', teacher: 'M. Shonoda', room: '201' },
                '2': { subject: 'Maths Adv + Ext', class: '11MAS', teacher: 'L. Sztajer', room: '304' },
                '3': { subject: 'English Extension', class: '11ENEXC', teacher: 'R. Strauss', room: '211' },
                '4': { subject: 'Chemistry', class: '11CHEMF', teacher: 'D. Li', room: '401' }
            }
        }
    },
    'Sally': {
        A: {
            Monday: {
                '1': { subject: 'English Advanced', class: '11ENKB', teacher: 'M. Shonoda', room: '201' },
                '2': { subject: 'Study', teacher: 'H. Cleary', room: 'Library' },
                '3': { subject: 'Chemistry', class: '11CHEMF', teacher: 'D. Li', room: '401' },
                '4': { subject: 'Music 2', class: '11MUS2E', teacher: 'C. Mok', room: '101' }
            },
            Tuesday: {
                '1': { subject: 'Chemistry', class: '11CHEMF', teacher: 'D. Li', room: '401' },
                '2': { subject: 'Study', teacher: 'H. Cleary', room: 'Library' },
                '3': { subject: 'Music 2', class: '11MUS2E', teacher: 'C. Mok', room: '206' },
                '4': { subject: 'Biology', class: '11BIOD', teacher: 'D. Gove', room: '403' }
            },
            Wednesday: {
                '1': { subject: 'Maths Extension 1', class: '11MAEG', teacher: 'K. Guan', room: '301' },
                '2': { subject: 'Maths Adv + Ext', class: '11MAG', teacher: 'K. Guan', room: '301' },
                '3': { subject: 'Biology', class: '11BIOD', teacher: 'D. Gove', room: '403' },
                '4': { subject: 'English Extension', class: '11ENEXC', teacher: 'R. Strauss', room: '211' }
            },
            Thursday: {
                '1': { subject: 'Biology', class: '11BIOD', teacher: 'D. Gove', room: '403' },
                '2': { subject: 'Music 2', class: '11MUS2E', teacher: 'C. Mok', room: '206' },
                '3': { subject: 'Maths Adv + Ext', class: '11MAG', teacher: 'K. Guan', room: '301' },
                '4': { subject: 'English Advanced', class: '11ENKB', teacher: 'M. Shonoda', room: '201' }
            },
            Friday: {
                '1': { subject: 'Chemistry', class: '11CHEMF', teacher: 'D. Li', room: '401' },
                '2': { subject: 'English Advanced', class: '11ENKB', teacher: 'M. Shonoda', room: '201' },
                '3': { subject: 'Building Strength', class: '11BU1', teacher: 'K. Moss, I. Pozzolungo' },
                '4': { subject: 'Maths Adv + Ext', class: '11MAG', teacher: 'K. Guan', room: '301' }
            }
        },
        B: {
            Monday: {
                '1': { subject: 'Chemistry', class: '11CHEMF', teacher: 'D. Li', room: '401' },
                '2': { subject: 'English Advanced', class: '11ENKB', teacher: 'M. Shonoda', room: '201' },
                '3': { subject: 'English Extension', class: '11ENEXC', teacher: 'R. Strauss', room: '211' },
                '4': { subject: 'Music 2', class: '11MUS2E', teacher: 'C. Mok', room: '101' }
            },
            Tuesday: {
                '1': { subject: 'Study', teacher: 'H. Cleary', room: 'Library' },
                '2': { subject: 'Maths Adv + Ext', class: '11MAG', teacher: 'K. Guan', room: '301' },
                '3': { subject: 'Music 2', class: '11MUS2E', teacher: 'C. Mok', room: '101' },
                '4': { subject: 'Biology', class: '11BIOD', teacher: 'D. Gove', room: '403' }
            },
            Wednesday: {
                '1': { subject: 'Maths Extension 1', class: '11MAEG', teacher: 'K. Guan', room: '301' },
                '2': { subject: 'Maths Adv + Ext', class: '11MAG', teacher: 'K. Guan', room: '301' },
                '3': { subject: 'Biology', class: '11BIOD', teacher: 'D. Gove', room: '403' },
                '4': { subject: 'English Advanced', class: '11ENKB', teacher: 'M. Shonoda', room: '201' }
            },
            Thursday: {
                '1': { subject: 'Music 2', class: '11MUS2E', teacher: 'C. Mok', room: '206' },
                '2': { subject: 'Chemistry', class: '11CHEMF', teacher: 'D. Li', room: '401' },
                '3': { subject: 'Biology', class: '11BIOD', teacher: 'D. Gove', room: '403' },
                '4': { subject: 'Maths Extension 1', class: '11MAEG', teacher: 'K. Guan', room: '301' }
            },
            Friday: {
                '1': { subject: 'English Advanced', class: '11ENKB', teacher: 'M. Shonoda', room: '201' },
                '2': { subject: 'Maths Adv + Ext', class: '11MAG', teacher: 'K. Guan', room: '301' },
                '3': { subject: 'English Extension', class: '11ENEXC', teacher: 'R. Strauss', room: '211' },
                '4': { subject: 'Chemistry', class: '11CHEMF', teacher: 'D. Li', room: '401' }
            }
        }
    },
    'Grace': {
        A: {
            Monday: {
                '1': { subject: 'English Advanced', class: '11ENKE', teacher: 'M. Carroll', room: '311' },
                '2': { subject: 'Biology', class: '11BIOC', teacher: 'C. Yu', room: '404' },
                '3': { subject: 'Legal Studies', class: '11LSF', teacher: 'M. Harkin', room: '309' },
                '4': { subject: 'Music 2', class: '11MUS2E', teacher: 'C. Mok', room: '101' }
            },
            Tuesday: {
                '1': { subject: 'Legal Studies', class: '11LSF', teacher: 'M. Harkin', room: '309' },
                '2': { subject: 'Biology', class: '11BIOC', teacher: 'M. Allen-Scott', room: '404' },
                '3': { subject: 'Music 2', class: '11MUS2E', teacher: 'C. Mok', room: '206' },
                '4': { subject: 'Geography Accelerated', class: '11AccGEOGD', teacher: 'V. Viner', room: '307' }
            },
            Wednesday: {
                '1': { subject: 'Maths Extension 1', class: '11MAES', teacher: 'L. Sztajer', room: '304' },
                '2': { subject: 'Maths Adv + Ext', class: '11MAS', teacher: 'L. Sztajer', room: '304' },
                '3': { subject: 'Geography Accelerated', class: '11AccGEOGD', teacher: 'V. Viner', room: '307' },
                '4': { subject: 'Biology', class: '11BIOC', teacher: 'M. Allen-Scott', room: '404' }
            },
            Thursday: {
                '1': { subject: 'Geography Accelerated', class: '11AccGEOGD', teacher: 'V. Viner', room: '216' },
                '2': { subject: 'Music 2', class: '11MUS2E', teacher: 'C. Mok', room: '206' },
                '3': { subject: 'Maths Adv + Ext', class: '11MAS', teacher: 'L. Sztajer', room: '304' },
                '4': { subject: 'English Advanced', class: '11ENKE', teacher: 'M. Carroll', room: '311' }
            },
            Friday: {
                '1': { subject: 'Legal Studies', class: '11LSF', teacher: 'M. Harkin', room: '309' },
                '2': { subject: 'English Advanced', class: '11ENKE', teacher: 'M. Carroll', room: '311' },
                '3': { subject: 'Building Strength', class: '11BU1', teacher: 'K. Moss, I. Pozzolungo'  },
                '4': { subject: 'Maths Adv + Ext', class: '11MAS', teacher: 'L. Sztajer', room: '304' }
            }
        },
        B: {
            Monday: {
                '1': { subject: 'Legal Studies', class: '11LSF', teacher: 'M. Harkin', room: '309' },
                '2': { subject: 'English Advanced', class: '11ENKE', teacher: 'M. Carroll', room: '311' },
                '3': { subject: 'Biology', class: '11BIOC', teacher: 'M. Allen-Scott', room: '404' },
                '4': { subject: 'Music 2', class: '11MUS2E', teacher: 'C. Mok', room: '101' }
            },
            Tuesday: {
                '1': { subject: 'Biology', class: '11BIOC', teacher: 'M. Allen-Scott', room: '404' },
                '2': { subject: 'Maths Adv + Ext', class: '11MAS', teacher: 'L. Sztajer', room: '304' },
                '3': { subject: 'Music 2', class: '11MUS2E', teacher: 'C. Mok', room: '101' },
                '4': { subject: 'Geography Accelerated', class: '11AccGEOGD', teacher: 'V. Viner', room: '216' }
            },
            Wednesday: {
                '1': { subject: 'Maths Extension 1', class: '11MAES', teacher: 'L. Sztajer', room: '304' },
                '2': { subject: 'Maths Adv + Ext', class: '11MAS', teacher: 'L. Sztajer', room: '304' },
                '3': { subject: 'Geography Accelerated', class: '11AccGEOGD', teacher: 'V. Viner', room: '307' },
                '4': { subject: 'English Advanced', class: '11ENKE', teacher: 'M. Carroll', room: '312' }
            },
            Thursday: {
                '1': { subject: 'Music 2', class: '11MUS2E', teacher: 'C. Mok', room: '206' },
                '2': { subject: 'Legal Studies', class: '11LSF', teacher: 'M. Harkin', room: '309' },
                '3': { subject: 'Geography Accelerated', class: '11AccGEOGD', teacher: 'V. Viner', room: '306' },
                '4': { subject: 'Maths Extension 1', class: '11MAES', teacher: 'L. Sztajer', room: '304' }
            },
            Friday: {
                '1': { subject: 'English Advanced', class: '11ENKE', teacher: 'M. Carroll', room: '311' },
                '2': { subject: 'Maths Adv + Ext', class: '11MAS', teacher: 'L. Sztajer', room: '304' },
                '3': { subject: 'Biology', class: '11BIOC', teacher: 'M. Allen-Scott', room: '404' },
                '4': { subject: 'Legal Studies', class: '11LSF', teacher: 'M. Harkin', room: '309' }
            }
        }
    },
    'Nina': {
        A: {
            Monday: {
                '1': { subject: 'English Advanced', class: '11ENKD', teacher: 'J. Leonard', room: '208' },
                '2': { subject: 'Biology', class: '11BIOC', teacher: 'C. Yu', room: '404' },
                '3': { subject: 'Physics', class: '11PHYF', teacher: 'R. Barr', room: '103' },
                '4': { subject: 'Chemistry', class: '11CHEME', teacher: 'J. Jeong', room: '401' }
            },
            Tuesday: {
                '1': { subject: 'Physics', class: '11PHYF', teacher: 'R. Barr', room: '103' },
                '2': { subject: 'Biology', class: '11BIOC', teacher: 'M. Allen-Scott', room: '404' },
                '3': { subject: 'Chemistry', class: '11CHEME', teacher: 'J. Jeong', room: '401' },
                '4': { subject: 'HSC Software Engineering', class: '11AccSED', teacher: 'G. Horan', room: '212' }
            },
            Wednesday: {
                '1': { subject: 'Maths Extension 1', class: '11MAEG', teacher: 'K. Guan', room: '301' },
                '2': { subject: 'Maths Adv + Ext', class: '11MAG', teacher: 'K. Guan', room: '301' },
                '3': { subject: 'HSC Software Engineering', class: '11AccSED', teacher: 'G. Horan', room: '212' },
                '4': { subject: 'Biology', class: '11BIOC', teacher: 'M. Allen-Scott', room: '404' }
            },
            Thursday: {
                '1': { subject: 'HSC Software Engineering', class: '11AccSED', teacher: 'G. Horan', room: '212' },
                '2': { subject: 'Chemistry', class: '11CHEME', teacher: 'J. Jeong', room: '401' },
                '3': { subject: 'Maths Adv + Ext', class: '11MAG', teacher: 'K. Guan', room: '301' },
                '4': { subject: 'English Advanced', class: '11ENKD', teacher: 'J. Leonard', room: '208' }
            },
            Friday: {
                '1': { subject: 'Physics', class: '11PHYF', teacher: 'R. Barr', room: '103' },
                '2': { subject: 'English Advanced', class: '11ENKD', teacher: 'J. Leonard', room: '215' },
                '3': { subject: 'Building Strength', class: '11BU1', teacher: 'K. Moss, I. Pozzolungo' },
                '4': { subject: 'Maths Adv + Ext', class: '11MAG', teacher: 'K. Guan', room: '301' }
            }
        },
        B: {
            Monday: {
                '1': { subject: 'Physics', class: '11PHYF', teacher: 'R. Barr', room: '103' },
                '2': { subject: 'English Advanced', class: '11ENKD', teacher: 'J. Leonard', room: '208' },
                '3': { subject: 'Biology', class: '11BIOC', teacher: 'M. Allen-Scott', room: '404' },
                '4': { subject: 'Chemistry', class: '11CHEME', teacher: 'J. Jeong', room: '401' }
            },
            Tuesday: {
                '1': { subject: 'Biology', class: '11BIOC', teacher: 'M. Allen-Scott', room: '404' },
                '2': { subject: 'Maths Adv + Ext', class: '11MAG', teacher: 'K. Guan', room: '301' },
                '3': { subject: 'Chemistry', class: '11CHEME', teacher: 'J. Jeong', room: '401' },
                '4': { subject: 'HSC Software Engineering', class: '11AccSED', teacher: 'G. Horan', room: '212' }
            },
            Wednesday: {
                '1': { subject: 'Maths Extension 1', class: '11MAEG', teacher: 'K. Guan', room: '301' },
                '2': { subject: 'Maths Adv + Ext', class: '11MAG', teacher: 'K. Guan', room: '301' },
                '3': { subject: 'Study', teacher: 'H. Cleary', room: 'Library' },
                '4': { subject: 'English Advanced', class: '11ENKD', teacher: 'J. Leonard', room: '208' }
            },
            Thursday: {
                '1': { subject: 'Chemistry', class: '11CHEME', teacher: 'J. Jeong', room: '401' },
                '2': { subject: 'Physics', class: '11PHYF', teacher: 'R. Barr', room: '103' },
                '3': { subject: 'HSC Software Engineering', class: '11AccSED', teacher: 'G. Horan', room: '212' },
                '4': { subject: 'Maths Extension 1', class: '11MAEG', teacher: 'K. Guan', room: '301' }
            },
            Friday: {
                '1': { subject: 'English Advanced', class: '11ENKD', teacher: 'J. Leonard', room: '208' },
                '2': { subject: 'Maths Adv + Ext', class: '11MAG', teacher: 'K. Guan', room: '301' },
                '3': { subject: 'Biology', class: '11BIOC', teacher: 'M. Allen-Scott', room: '404' },
                '4': { subject: 'Physics', class: '11PHYF', teacher: 'R. Barr', room: '103' }
            }
        }
    }
};

// Constants
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const periods = ['0', '1', '2', '3', '4', '5'];

// School day schedule (times can be customized per day)
// Format: 'HH:MM' in 24-hour format
const periodSchedule = {
    // Default schedule for Monday, Tuesday, Thursday, Friday
    'default': {
        '0': { start: '07:30', end: '08:40' },
        '1': { start: '08:45', end: '10:00' },
        '2': { start: '10:20', end: '11:35' },
        '3': { start: '11:40', end: '12:55' },
        '4': { start: '13:35', end: '14:50' },
        '5': { start: '14:55', end: '16:05' }
    },
    // Wednesday schedule (change times here if different)
    'Wednesday': {
        '0': { start: '07:30', end: '08:40' },
        '1': { start: '08:45', end: '09:50' },
        '2': { start: '10:10', end: '11:15' },
        '3': { start: '11:20', end: '12:25' },
        '4': { start: '13:35', end: '14:40' },
        '5': { start: '14:45', end: '14:55' }
    }
};

// Function to get current day name
function getCurrentDay() {
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayIndex = new Date().getDay();
    
    // Return day only if it's a school day (Monday-Friday)
    if (currentDayIndex >= 1 && currentDayIndex <= 5) {
        return dayNames[currentDayIndex];
    }
    
    // If it's Saturday or Sunday, return Monday (next school day)
    return 'Monday';
}

// Function to get current period based on time
function getCurrentPeriod() {
    const now = new Date();
    const currentTime = now.getHours().toString().padStart(2, '0') + ':' + 
                       now.getMinutes().toString().padStart(2, '0');
    const dayOfWeek = now.getDay();
    
    console.log('Current time:', currentTime);
    console.log('Day of week:', dayOfWeek);
    
    // Get today's schedule - only if it's a school day
    let today;
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        today = dayNames[dayOfWeek];
    } else {
        today = 'Monday'; // Default to Monday if weekend
    }
    
    const todaySchedule = today === 'Wednesday' ? periodSchedule['Wednesday'] : periodSchedule['default'];
    
    console.log('Today:', today);
    console.log('Today schedule:', todaySchedule);
    
    if (!todaySchedule) {
        return '0';
    }

    // Check if we are currently inside a period
    for (let period of periods) {
        const schedule = todaySchedule[period];
        if (!schedule) continue;

        if (currentTime >= schedule.start && currentTime < schedule.end) {
            return period; // currently in this period
        }
    }
    
    // Find the next period that starts after current time
    for (let period of periods) {
        const schedule = todaySchedule[period];
        if (schedule && currentTime < schedule.start) {
            console.log('Next period:', period);
            return period;
        }
    }
    
    // No more periods today, switch to next available day and find first period with classes
    console.log('No more periods today, switching to next available day');
    let nextDay = dayOfWeek + 1;
    
    // If it's Friday (5), switch to Monday (1)
    // If it's Saturday (6) or Sunday (0), switch to Monday (1)
    if (nextDay >= 6 || nextDay === 0) {
        nextDay = 1; // Monday
    }
    
    // Update selectedDay based on next day
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    selectedDay = dayNames[nextDay];
    
    console.log('Next day:', selectedDay);
    
    // Find first period where at least one student has a class on the next day
    for (let period of periods) {
        const hasClass = Object.keys(timetableData).some(student => 
            timetableData[student]?.[selectedWeek]?.[selectedDay]?.[period]
        );
        if (hasClass) {
            console.log('First available period on next day:', period);
            return period;
        }
    }
    
    // If no classes on next day either, just return period 0
    console.log('No classes found on next day, returning period 0');
    return '0';
}

// State
let viewMode = 'student';
let selectedWeek = 'A';
let selectedStudent = 'Emily';
let selectedDay = 'Monday';
let selectedPeriod = '0';

// Initialize
function init() {
    const studentSelect = document.getElementById('studentSelect');
    Object.keys(timetableData).forEach(student => {
        const option = document.createElement('option');
        option.value = student;
        option.textContent = student;
        studentSelect.appendChild(option);
    });
    
    // Set the student select dropdown to the selected student
    studentSelect.value = selectedStudent;

    // Set current day based on system time
    const currentDay = getCurrentDay();
    if (currentDay && days.includes(currentDay)) {
        selectedDay = currentDay;
    }
    
    // Get current period (this may update selectedDay if no period found)
    const currentPeriod = getCurrentPeriod();
    
    // Update daySelect dropdown to reflect selectedDay (which may have been updated by getCurrentPeriod)
    document.getElementById('daySelect').value = selectedDay;
    
    if (currentPeriod) {
        selectedPeriod = currentPeriod;
    }

    // Initialize period select for period view
    const periodSelect = document.getElementById('periodSelect');
    updatePeriodSelect();
    
    // Set the period select value after updating periods
    if (periodSelect.querySelector(`option[value="${selectedPeriod}"]`)) {
        periodSelect.value = selectedPeriod;
    } else if (periodSelect.options.length > 0) {
        selectedPeriod = periodSelect.options[0].value;
        periodSelect.value = selectedPeriod;
    }
    
    // Render student view on initialization
    renderStudentView();
}

function updatePeriodSelect() {
    const periodSelect = document.getElementById('periodSelect');
    periodSelect.innerHTML = '';
    
    periods.forEach(period => {
        // Check if at least one student has a class during this period on the selected day
        const hasClassInPeriod = Object.keys(timetableData).some(student => 
            timetableData[student]?.[selectedWeek]?.[selectedDay]?.[period]
        );
        
        // Allow periods 1, 2, 3, 4 even if free, but only show 0 and 5 if they have classes
        if (hasClassInPeriod || ['1', '2', '3', '4'].includes(period)) {
            const option = document.createElement('option');
            option.value = period;
            option.textContent = `Period ${period}`;
            periodSelect.appendChild(option);
        }
    });
}

function updateDaySelect() {
    const daySelect = document.getElementById('daySelect');
    const currentOptions = daySelect.querySelectorAll('option');
    
    currentOptions.forEach(option => {
        const day = option.value;
        // Check if at least one student has a class during the selected period on this day
        const hasClassOnDay = Object.keys(timetableData).some(student => 
            timetableData[student]?.[selectedWeek]?.[day]?.[selectedPeriod]
        );
        
        option.disabled = !hasClassOnDay;
    });
    
    // If current day is disabled, switch to the first available day
    if (daySelect.selectedOptions[0]?.disabled) {
        const firstAvailable = Array.from(currentOptions).find(opt => !opt.disabled);
        if (firstAvailable) {
            selectedDay = firstAvailable.value;
            daySelect.value = selectedDay;
        }
    }
}

function renderStudentView() {
    const title = document.getElementById('studentViewTitle');
    const tbody = document.getElementById('timetableBody');
    
    if (!title || !tbody) {
        console.error('Required elements not found');
        return;
    }
    
    title.textContent = `${selectedStudent} - Week ${selectedWeek}`;
    tbody.innerHTML = '';

    periods.forEach(period => {
        const row = document.createElement('tr');

        const periodCell = document.createElement('td');
        periodCell.className = 'period-label';
        periodCell.textContent = period;
        row.appendChild(periodCell);

        days.forEach(day => {
            const cell = document.createElement('td');

            const classData = timetableData[selectedStudent]?.[selectedWeek]?.[day]?.[period];
            if (classData) {
                const subject = classData.subject ?? '';
                const classCode = classData.class ?? '';
                const teacher = classData.teacher ?? '';
                const room = classData.room ?? '';

                let html = '<div class="class-info">';
                if (subject) html += `<div class="class-subject">${subject}</div>`;
                if (classCode) html += `<div class="class-code">${classCode}</div>`;
                if (teacher) html += `<div class="class-teacher">${teacher}</div>`;
                if (room) html += `<div class="class-room">Room: ${room}</div>`;
                html += '</div>';

                cell.innerHTML = html;
                const color = subjectColors[subject];
                if (color) {
                    cell.style.backgroundColor = color;
                } else {
                    cell.style.backgroundColor = '';
                }
            } else {
                cell.className = 'no-class';
                cell.textContent = '-';
            }
            row.appendChild(cell);
        });
        tbody.appendChild(row);
    });
}

function renderPeriodView() {
    document.getElementById('periodViewTitle').textContent = 
        `${selectedDay}, Period ${selectedPeriod} - Week ${selectedWeek}`;
    
    const studentsList = document.getElementById('studentsList');
    studentsList.innerHTML = '';

    Object.keys(timetableData).forEach(student => {
        const classData = timetableData[student]?.[selectedWeek]?.[selectedDay]?.[selectedPeriod];
        const card = document.createElement('div');
        card.className = 'student-card';
        
        if (classData) {
            const subject = classData.subject ?? '';
            const classCode = classData.class ?? '';
            const teacher = classData.teacher ?? '';
            const room = classData.room ?? '';

            let classInfoHtml = '<div class="student-class-info">';
            if (subject) classInfoHtml += `<div class="class-subject">${subject}</div>`;
            if (classCode) classInfoHtml += `<div class="class-code">${classCode}</div>`;
            if (teacher) classInfoHtml += `<div class="class-teacher">${teacher}</div>`;
            if (room) classInfoHtml += `<div class="class-room">Room: ${room}</div>`;
            classInfoHtml += '</div>';

            card.innerHTML = `
                <div class="student-name">${student}</div>
                ${classInfoHtml}
            `;
            const color = subjectColors[subject];
            if (color) {
                card.style.backgroundColor = color;
            }
        } else {
            card.className = 'student-card free-period-card';
            card.innerHTML = `
                <div class="student-name">${student}</div>
                <div class="free-period">Free Period</div>
            `;
        }
        
        studentsList.appendChild(card);
    });
    
    // Add image card
    const imageCard = document.createElement('div');
    imageCard.className = 'student-card image-card';
    imageCard.innerHTML = `
        <img src="photo.jpg" alt="Group Photo">
    `;
    studentsList.appendChild(imageCard);
}

// Event listeners
document.getElementById('studentViewBtn').addEventListener('click', () => {
    viewMode = 'student';
    document.getElementById('studentView').style.display = 'block';
    document.getElementById('periodView').style.display = 'none';
    document.getElementById('studentViewBtn').className = 'btn btn-primary';
    document.getElementById('periodViewBtn').className = 'btn btn-secondary';
});

document.getElementById('periodViewBtn').addEventListener('click', () => {
    viewMode = 'period';
    document.getElementById('studentView').style.display = 'none';
    document.getElementById('periodView').style.display = 'block';
    document.getElementById('studentViewBtn').className = 'btn btn-secondary';
    document.getElementById('periodViewBtn').className = 'btn btn-primary';
    renderPeriodView();
});

document.getElementById('weekABtn').addEventListener('click', () => {
    selectedWeek = 'A';
    document.getElementById('weekABtn').className = 'week-btn active';
    document.getElementById('weekBBtn').className = 'week-btn';
    if (viewMode === 'student') renderStudentView();
    else renderPeriodView();
});

document.getElementById('weekBBtn').addEventListener('click', () => {
    selectedWeek = 'B';
    document.getElementById('weekBBtn').className = 'week-btn active';
    document.getElementById('weekABtn').className = 'week-btn';
    if (viewMode === 'student') renderStudentView();
    else renderPeriodView();
});

document.getElementById('studentSelect').addEventListener('change', (e) => {
    selectedStudent = e.target.value;
    renderStudentView();
});

document.getElementById('daySelect').addEventListener('change', (e) => {
    selectedDay = e.target.value;
    updatePeriodSelect();
    renderPeriodView();
});

document.getElementById('periodSelect').addEventListener('change', (e) => {
    selectedPeriod = e.target.value;
    updateDaySelect();
    renderPeriodView();
});

document.getElementById('logoutBtn').addEventListener('click', () => {
    sessionStorage.removeItem('isLoggedIn');
    window.location.href = 'index.html';
});

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    init();
});

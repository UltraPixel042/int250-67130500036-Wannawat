export const mockCourses = [
    { 
        id: 1, 
        code: "INT250", 
        title: "CSS Framework", 
        desc: "Learn how to build responsive and interactive web applications using Vue.js and Tailwind CSS.", 
        progress: 72, 
        status: "In Progress", 
        color: "bg-yellow-200 text-yellow-700",
        upComing: [
            { no: 19, title: "State management with Pinia", duration: "30 min" },
            { no: 20, title: "Responsive layouts with Tailwind", duration: "45 min" },
            { no: 21, title: "API integration % composables", duration: "40 min" },
        ]
    },
    { 
        id: 2, 
        code: "INT161", 
        title: "Object-Oriented Programming", 
        desc: "Practice Java Programming, object-oriented design, and software development principals.", 
        progress: 58, 
        status: "In Progress", 
        color: "bg-yellow-200 text-yellow-700" ,
        upComing: [
            { no: 10, title: "Inheritance & method overriding", duration: "40 min" },
            { no: 11, title: "Polymorphism in practice", duration: "35 min" },
            { no: 12, title: "Abstract classes & interfaces", duration: "45 min" },
        ]
    },
]
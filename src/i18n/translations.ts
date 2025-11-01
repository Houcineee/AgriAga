export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      features: "Features",
      contact: "Contact"
    },
    hero: {
      title: "Innovating Water Solutions for Agriculture",
      subtitle: "Transforming the future of sustainable farming through smart water management",
      cta: "Learn More",
      ctaSecondary: "Contact Us"
    },
    about: {
      title: "About Our Project",
      description: "We are developing innovative solutions to address water challenges in agriculture. Our project focuses on sustainable water management practices that can help farmers optimize their water usage while maintaining or increasing crop yields."
    },
    features: {
      title: "Key Features",
      feature1: {
        title: "Smart Water Management",
        description: "Advanced technology to monitor and optimize water usage in real-time"
      },
      feature2: {
        title: "Sustainable Solutions",
        description: "Environmentally friendly approaches to agricultural water conservation"
      },
      feature3: {
        title: "Data-Driven Insights",
        description: "Comprehensive analytics to help farmers make informed decisions"
      },
      feature4: {
        title: "Cost Effective",
        description: "Reduce water costs while improving agricultural productivity"
      }
    },
    cta: {
      title: "Ready to Transform Your Agricultural Water Management?",
      description: "Join us in revolutionizing sustainable farming practices",
      button: "Get Started"
    },
    footer: {
      copyright: "All rights reserved.",
      slogan: "Innovating for a sustainable future"
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      features: "Fonctionnalités",
      contact: "Contact"
    },
    hero: {
      title: "Solutions d'eau innovantes pour l'agriculture",
      subtitle: "Transformer l'avenir de l'agriculture durable grâce à une gestion intelligente de l'eau",
      cta: "En savoir plus",
      ctaSecondary: "Contactez-nous"
    },
    about: {
      title: "À propos de notre projet",
      description: "Nous développons des solutions innovantes pour relever les défis liés à l'eau dans l'agriculture. Notre projet se concentre sur des pratiques de gestion durable de l'eau qui peuvent aider les agriculteurs à optimiser leur utilisation de l'eau tout en maintenant ou en augmentant les rendements des cultures."
    },
    features: {
      title: "Caractéristiques principales",
      feature1: {
        title: "Gestion intelligente de l'eau",
        description: "Technologie avancée pour surveiller et optimiser l'utilisation de l'eau en temps réel"
      },
      feature2: {
        title: "Solutions durables",
        description: "Approches respectueuses de l'environnement pour la conservation de l'eau agricole"
      },
      feature3: {
        title: "Informations basées sur les données",
        description: "Analyses complètes pour aider les agriculteurs à prendre des décisions éclairées"
      },
      feature4: {
        title: "Rentable",
        description: "Réduire les coûts de l'eau tout en améliorant la productivité agricole"
      }
    },
    cta: {
      title: "Prêt à transformer votre gestion de l'eau agricole?",
      description: "Rejoignez-nous pour révolutionner les pratiques agricoles durables",
      button: "Commencer"
    },
    footer: {
      copyright: "Tous droits réservés.",
      slogan: "Innover pour un avenir durable"
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "حول",
      features: "المميزات",
      contact: "اتصل بنا"
    },
    hero: {
      title: "حلول مبتكرة للمياه في الزراعة",
      subtitle: "تحويل مستقبل الزراعة المستدامة من خلال الإدارة الذكية للمياه",
      cta: "اعرف المزيد",
      ctaSecondary: "اتصل بنا"
    },
    about: {
      title: "حول مشروعنا",
      description: "نحن نطور حلولاً مبتكرة لمعالجة تحديات المياه في الزراعة. يركز مشروعنا على ممارسات إدارة المياه المستدامة التي يمكن أن تساعد المزارعين على تحسين استخدامهم للمياه مع الحفاظ على أو زيادة إنتاجية المحاصيل."
    },
    features: {
      title: "المميزات الرئيسية",
      feature1: {
        title: "إدارة ذكية للمياه",
        description: "تقنية متقدمة لمراقبة وتحسين استخدام المياه في الوقت الفعلي"
      },
      feature2: {
        title: "حلول مستدامة",
        description: "نهج صديق للبيئة للحفاظ على المياه الزراعية"
      },
      feature3: {
        title: "رؤى مبنية على البيانات",
        description: "تحليلات شاملة لمساعدة المزارعين على اتخاذ قرارات مستنيرة"
      },
      feature4: {
        title: "فعال من حيث التكلفة",
        description: "تقليل تكاليف المياه مع تحسين الإنتاجية الزراعية"
      }
    },
    cta: {
      title: "هل أنت مستعد لتحويل إدارة المياه الزراعية؟",
      description: "انضم إلينا في إحداث ثورة في ممارسات الزراعة المستدامة",
      button: "ابدأ الآن"
    },
    footer: {
      copyright: "جميع الحقوق محفوظة.",
      slogan: "الابتكار من أجل مستقبل مستدام"
    }
  }
};

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.en;

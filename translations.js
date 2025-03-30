const translations = {
    common: {
        about: { en: "About Me", fr: "À propos", cn: "关于我" },
        contact: { en: "Contact", fr: "Contact", cn: "联系" },
        phone: { en: "Phone", fr: "Téléphone", cn: "电话" },
        view: { en: "View", fr: "Voir", cn: "查看" },
        home: { en: "Home", fr: "Accueil", cn: "首页" }
    },
    index: {
        welcome: { en: "Welcome to My Interactive CV", fr: "Bienvenue sur mon CV interactif", cn: "欢迎来到我的互动简历" },
        subtitle: { en: "Data Enthusiast | Music Lover | Creative Thinker", fr: "Data Scientist | Musicien | Esprit Créatif", cn: "数据爱好者 | 音乐爱好者 | 创意思考者" },
        explore: { en: "Explore More", fr: "Explorer", cn: "探索更多" }
    },
    categories: {
        title: { en: "Explore My Universe", fr: "Explorez mon univers", cn: "探索我的世界" },
        subtitle: { en: "Discover my different areas of expertise", fr: "Découvrez mes différents domaines d'expertise", cn: "发现我的不同专业领域" }
    },
    cards: {
        data: {
            title: { en: "Data Science", fr: "Science des données", cn: "数据科学" },
            button: { en: "View Projects", fr: "Voir projets", cn: "查看项目" },
            skills: {
                languages: { en: "Languages", fr: "Langages", cn: "编程语言" },
                languages_desc: { en: "Python, R, SQL and more", fr: "Python, R, SQL et plus", cn: "Python, R, SQL 等" },
                software: { en: "Software", fr: "Logiciels", cn: "软件" },
                software_desc: { en: "Tools and software I use", fr: "Outils et logiciels que j'utilise", cn: "我使用的工具和软件" },
                stats: { en: "Statistics", fr: "Statistiques", cn: "统计" },
                stats_desc: { en: "My statistical skills", fr: "Mes compétences statistiques", cn: "我的统计技能" },
                projects: { en: "Projects", fr: "Projets", cn: "项目" },
                projects_desc: { en: "Explore my data projects", fr: "Découvrez mes projets data", cn: "探索我的数据项目" }
            }
        },
        music: {
            title: { en: "Musical World", fr: "Monde musical", cn: "音乐世界" },
            button: { en: "Discover More", fr: "Découvrir", cn: "发现更多" },
            skills: {
                journey: { en: "Journey", fr: "Parcours", cn: "历程" },
                journey_desc: { en: "My musical evolution", fr: "Mon évolution musicale", cn: "我的音乐发展历程" },
                competitions: { en: "Competitions", fr: "Compétitions", cn: "比赛" },
                competitions_desc: { en: "My performances", fr: "Mes performances", cn: "我的表演经历" },
                instruments: { en: "Skills", fr: "Compétences", cn: "技能" },
                instruments_desc: { en: "Instruments mastered", fr: "Instruments maîtrisés", cn: "掌握的乐器" },
                portfolio: { en: "Portfolio", fr: "Portfolio", cn: "作品集" },
                portfolio_desc: { en: "Listen to my work", fr: "Écoutez mon travail", cn: "聆听我的作品" }
            }
        },
        other: {
            title: { en: "Other Passions", fr: "Autres passions", cn: "其他爱好" },
            button: { en: "See More", fr: "Voir plus", cn: "查看更多" },
            skills: {
                writing: { en: "Author", fr: "Écriture", cn: "写作" },
                writing_desc: { en: "My writing projects", fr: "Mes projets d'écriture", cn: "我的写作项目" },
                gaming: { en: "Gaming", fr: "Jeux vidéo", cn: "电子游戏" },
                gaming_desc: { en: "My gaming universe", fr: "Mon univers de gaming", cn: "我的游戏世界" },
                travel: { en: "Travel", fr: "Voyages", cn: "旅行" },
                travel_desc: { en: "My adventures", fr: "Mes aventures", cn: "我的冒险经历" },
                ideas: { en: "Ideas", fr: "Idées", cn: "创意" },
                ideas_desc: { en: "Creative concepts", fr: "Concepts créatifs", cn: "创意概念" }
            }
        }
    },
    footer: {
        contact: { en: "Contact", fr: "Contact", cn: "联系" },
        phone: { en: "Phone", fr: "Téléphone", cn: "电话" }
    },
    titles: {
        data: { en: "Data Projects", fr: "Projets Data", cn: "数据项目" },
        music: { en: "Musical World", fr: "Monde Musical", cn: "音乐世界" },
        other: { en: "Other Passions", fr: "Autres Passions", cn: "其他爱好" },
        about: { en: "About Me", fr: "À Propos", cn: "关于我" }
    },
    data: {
        skills_title: { en: "My Skills", fr: "Mes Compétences", cn: "我的技能" },
        projects_title: { en: "My Projects", fr: "Mes Projets", cn: "我的项目" },
        skills: {
            languages: { en: "Languages", fr: "Langages", cn: "编程语言" },
            python: { en: "Python", fr: "Python", cn: "Python" },
            python_desc: { en: "Data analysis", fr: "Analyse de données", cn: "数据分析" },
            r: { en: "R", fr: "R", cn: "R" },
            r_desc: { en: "Statistical analysis", fr: "Analyse statistique", cn: "统计分析" },
            sql: { en: "SQL", fr: "SQL", cn: "SQL" },
            sql_desc: { en: "Database queries", fr: "Requêtes bases de données", cn: "数据库查询" },
            software: { en: "Software", fr: "Logiciels", cn: "软件" },
            excel: { en: "Excel", fr: "Excel", cn: "Excel" },
            excel_desc: { en: "Advanced functions", fr: "Fonctions avancées", cn: "高级功能" },
            powerbi: { en: "Power BI", fr: "Power BI", cn: "Power BI" },
            powerbi_desc: { en: "Dashboards", fr: "Tableaux de bord", cn: "仪表板" },
            access: { en: "Access", fr: "Access", cn: "Access" },
            access_desc: { en: "Databases", fr: "Bases de données", cn: "数据库" },
            stats: { en: "Statistics", fr: "Statistiques", cn: "统计" },
            stats1: { en: "Descriptive stats", fr: "Stats descriptives", cn: "描述性统计" },
            stats2: { en: "Inferential stats", fr: "Stats inférentielles", cn: "推理性统计" },
            stats3: { en: "Data cleaning", fr: "Nettoyage de données", cn: "数据清洗" },
            methods: { en: "Methods", fr: "Méthodes", cn: "方法" },
            methods1: { en: "Data visualization", fr: "Visualisation de données", cn: "数据可视化" },
            methods2: { en: "Machine Learning", fr: "Machine Learning", cn: "机器学习" },
            methods3: { en: "Survey analysis", fr: "Analyse d'enquêtes", cn: "调查分析" }
        },
        projects: {
            music: {
                title: { en: "Music Evolution", fr: "Évolution musicale", cn: "音乐演变" },
                desc: { en: "Analysis from 1960 to today", fr: "Analyse de 1960 à aujourd'hui", cn: "1960年至今的分析" }
            },
            social: {
                title: { en: "Social Networks", fr: "Réseaux sociaux", cn: "社交网络" },
                desc: { en: "Regulation impact study", fr: "Étude d'impact des régulations", cn: "监管影响研究" }
            },
            happiness: {
                title: { en: "Happiness", fr: "Bonheur", cn: "幸福指数" },
                desc: { en: "Global trends analysis", fr: "Analyse des tendances mondiales", cn: "全球趋势分析" }
            },
            survey: {
                title: { en: "Cultural Survey", fr: "Enquête culturelle", cn: "文化调查" },
                desc: { en: "Students habits investigation", fr: "Étude des habitudes étudiantes", cn: "学生习惯调查" }
            }
        }
    },
    other: {
        title: { en: "Beyond Data & Music", fr: "Au-delà des données et de la musique", cn: "数据与音乐之外" },
        subtitle: { en: "My other worlds of passion and creativity", fr: "Mes autres univers de passion et créativité", cn: "我的其他激情与创意世界" },
        passions: {
            basketball: {
                title: { en: "Streetball Player", fr: "Joueur de Streetball", cn: "街头篮球运动员" },
                desc: { en: "5 years of urban basketball — agility, teamwork, and improvisation are my game. Regular player on Paris courts with a competitive mindset.", 
                       fr: "5 ans de basketball urbain — agilité, travail d'équipe et improvisation sont mes atouts. Joueur régulier sur les terrains parisiens avec un esprit compétitif.", 
                       cn: "5年街头篮球经验——敏捷、团队合作和即兴发挥是我的强项。经常在巴黎球场打球，具有竞争意识。" },
                tags: {
                    1: { en: "Pick-up games", fr: "Matchs improvisés", cn: "即兴比赛" },
                    2: { en: "Paris spots", fr: "Spots parisiens", cn: "巴黎球场" },
                    3: { en: "Competitive", fr: "Compétitif", cn: "竞技" }
                }
            },
            gaming: {
                title: { en: "Competitive Gamer", fr: "Joueur Compétitif", cn: "竞技游戏玩家" },
                desc: { en: "Strategy and reflexes honed through esports titles — where analytics meet adrenaline. Focused on ranked play and team coordination.", 
                       fr: "Stratégie et réflexes affûtés à travers les jeux esportifs — où l'analyse rencontre l'adrénaline. Concentré sur le jeu classé et la coordination d'équipe.", 
                       cn: "通过电竞游戏磨练策略和反应能力——分析遇见激情。专注于排名赛和团队配合。" },
                tags: {
                    1: { en: "MOBAs", fr: "MOBAs", cn: "多人在线战术竞技游戏" },
                    2: { en: "FPS", fr: "FPS", cn: "第一人称射击游戏" },
                    3: { en: "Leaderboards", fr: "Classements", cn: "排行榜" }
                }
            },
            travel: {
                title: { en: "Global Explorer", fr: "Explorateur Mondial", cn: "全球探索者" },
                desc: { en: "From New York's skyscrapers to China's ancient ruins — collecting cultural perspectives across continents. Next destination: Japan.", 
                       fr: "Des gratte-ciel de New York aux ruines anciennes de la Chine — collection des perspectives culturelles à travers les continents. Prochaine destination : Japon.", 
                       cn: "从纽约的摩天大楼到中国的古代遗址——收集跨大陆的文化视角。下一站：日本。" },
                tags: {
                    1: { en: "USA", fr: "États-Unis", cn: "美国" },
                    2: { en: "China", fr: "Chine", cn: "中国" },
                    3: { en: "Europe", fr: "Europe", cn: "欧洲" }
                }
            },
            ux: {
                title: { en: "UX Contributor", fr: "Contributeur UX", cn: "用户体验贡献者" },
                desc: { en: "Approved tester on UserTesting — shaping digital experiences through rigorous analysis. Bridging tech and human-centered design.", 
                       fr: "Testeur approuvé sur UserTesting — façonner des expériences digitales grâce à une analyse rigoureuse. Faire le lien entre technologie et design centré sur l'humain.", 
                       cn: "UserTesting认证测试员——通过严格分析塑造数字体验。连接技术与以人为本的设计。" },
                tags: {
                    1: { en: "UserTesting", fr: "UserTesting", cn: "用户测试" },
                    2: { en: "QA", fr: "AQ", cn: "质量保证" },
                    3: { en: "Feedback", fr: "Retours", cn: "反馈" }
                }
            }
        }
    },
    music: {
        title: { en: "My Piano Journey", fr: "Mon Parcours Pianistique", cn: "我的钢琴之旅" },
        timeline: {
            "2009": {
                title: { en: "2009 - Piano Beginnings", fr: "2009 - Débuts au piano", cn: "2009年 - 钢琴启蒙" },
                desc: { en: "Started learning at age 6 with private teacher Mrs Liu", 
                       fr: "Commence l'apprentissage à 6 ans avec le professeur particulier Mme Liu", 
                       cn: "6岁开始跟随刘老师学习钢琴" }
            },
            "2015": {
                title: { en: "2015 - Steinway Competition", fr: "2015 - Concours Steinway", cn: "2015年 - 施坦威比赛" },
                desc: { en: "Participated in prestigious piano competitions", 
                       fr: "Participation à des concours de piano prestigieux", 
                       cn: "参加知名钢琴比赛" }
            },
            "2021": {
                title: { en: "2021 - Cycle 3 Completion", fr: "2021 - Fin de Cycle 3", cn: "2021年 - 完成第三阶段" },
                desc: { en: "Reached advanced level before pursuing other paths", 
                       fr: "Atteint un niveau avancé avant de poursuivre d'autres voies", 
                       cn: "在转向其他领域前达到高级水平" }
            },
            "2023": {
                title: { en: "2023 - Composition Era", fr: "2023 - Ère de Composition", cn: "2023年 - 创作时期" },
                desc: { en: "Transitioned to music composition using FL Studio", 
                       fr: "Transition vers la composition musicale avec FL Studio", 
                       cn: "转向使用FL Studio进行音乐创作" }
            }
        },
        skills: {
            style: {
                title: { en: "Romantic Style", fr: "Style Romantique", cn: "浪漫风格" },
                desc: { en: "Specializing in emotional and expressive pieces", 
                       fr: "Spécialisé dans les pièces émotionnelles et expressives", 
                       cn: "擅长情感丰富和富有表现力的曲目" }
            },
            anime: {
                title: { en: "Anime Music", fr: "Musique d'Anime", cn: "动漫音乐" },
                desc: { en: "Adapting Japanese anime soundtracks", 
                       fr: "Adaptation de bandes-son d'anime japonais", 
                       cn: "改编日本动漫原声" }
            },
            composition: {
                title: { en: "Composition", fr: "Composition", cn: "作曲" },
                desc: { en: "Creating original music with FL Studio", 
                       fr: "Création de musique originale avec FL Studio", 
                       cn: "使用FL Studio创作原创音乐" }
            }
        },
        projects: {
            title: { en: "Current Focus", fr: "Projets Actuels", cn: "当前重点" },
            subtitle: { en: "Developing original compositions blending:", 
                       fr: "Développement de compositions originales mélangeant :", 
                       cn: "开发融合以下元素的原创作品：" },
            list: {
                1: { en: "Romantic harmonies", fr: "Harmonies romantiques", cn: "浪漫和声" },
                2: { en: "Cinematic atmospheres", fr: "Ambiances cinématographiques", cn: "电影氛围" },
                3: { en: "Anime influences", fr: "Influences d'anime", cn: "动漫影响" }
            }
        }
    },
    about: {
        title: { en: "About Me", fr: "À Propos de Moi", cn: "关于我" },
        highlights: {
            education: { en: "BUT Data Science", fr: "BUT Science des Données", cn: "数据科学学士" },
            languages: { en: "Python | R | SQL", fr: "Python | R | SQL", cn: "Python | R | SQL" },
            musician: { en: "Musician", fr: "Musicien", cn: "音乐家" }
        },
        sections: {
            who: {
                title: { en: "Who I Am", fr: "Qui Je Suis", cn: "我是谁" },
                content: { 
                    en: "Hi, I'm Hugo MA, a first-year student in the Bachelor of Technology (B.U.T.) in Data Science. Passionate about data analysis and creative problem-solving.",
                    fr: "Bonjour, je suis Hugo MA, étudiant en première année de Bachelor Universitaire de Technologie (B.U.T.) en Science des Données. Passionné par l'analyse de données et la résolution créative de problèmes.",
                    cn: "您好，我是Hugo MA，数据科学学士学位（B.U.T.）一年级学生。热衷于数据分析和创造性解决问题。"
                }
            },
            vision: {
                title: { en: "My Vision", fr: "Ma Vision", cn: "我的愿景" },
                content: {
                    en: "This website showcases how AI tools can empower beginners to create professional projects. Built with ChatGPT and DeepSeek, it's proof that technology can accelerate learning.",
                    fr: "Ce site démontre comment les outils d'IA permettent aux débutants de créer des projets professionnels. Construit avec ChatGPT et DeepSeek, c'est la preuve que la technologie peut accélérer l'apprentissage.",
                    cn: "本网站展示了AI工具如何帮助初学者创建专业项目。使用ChatGPT和DeepSeek构建，证明了技术可以加速学习。"
                }
            },
            goals: {
                title: { en: "My Goals", fr: "Mes Objectifs", cn: "我的目标" },
                content: {
                    en: "Combine data skills with creative thinking to develop innovative solutions. Continuously learn and adapt to new technologies in our fast-evolving digital world.",
                    fr: "Combiner compétences en données et pensée créative pour développer des solutions innovantes. Apprendre continuellement et s'adapter aux nouvelles technologies dans notre monde numérique en évolution rapide.",
                    cn: "将数据技能与创造性思维相结合，开发创新解决方案。在我们快速发展的数字世界中不断学习并适应新技术。"
                }
            }
        }
    }
};

function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const keys = el.dataset.i18n.split('.');
        let text = translations;
        
        try {
            keys.forEach(key => {
                if (text[key] === undefined) throw new Error();
                text = text[key];
            });
            
            if (text[lang] !== undefined) {
                el.textContent = text[lang];
            }
        } catch (e) {
            console.warn(`Translation missing for key: ${el.dataset.i18n}`);
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    localStorage.setItem('preferredLanguage', lang);
    document.documentElement.lang = lang;
}



document.addEventListener('DOMContentLoaded', () => {
    const preferredLang = localStorage.getItem('preferredLanguage') || 'en';
    applyLanguage(preferredLang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
    });
});  // <-- Ajoutez cette parenthèse fermante manquante
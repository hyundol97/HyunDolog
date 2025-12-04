import { Icon } from '@iconify/react';

export default function HomeSkills() {
    return (
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 p-4 md:p-12">
            <div className="w-full lg:w-1/2 space-y-6">
                <h1 className="inline-block text-xl md:text-3xl font-bold px-3 md:px-4 py-2 mb-6 bg-gradient-to-r from-cyan-400/70 to-cyan-600/70 text-white rounded-xl">
                    언어 / 프레임워크 / 라이브러리
                </h1>

                <div className="space-y-4 pl-2">
                    <h2 className="text-xl font-semibold text-gray-700 underline underline-offset-4 decoration-wavy">
                        실무 경험
                    </h2>

                    <div className="space-y-3">
                        <h3 className="text-lg font-medium">능숙하게 사용 가능해요.</h3>

                        <div className="flex flex-wrap gap-3">
                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                <Icon icon="logos:javascript" width="16" height="16" />
                                JavaScript
                            </span>
                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                <Icon icon="logos:typescript-icon" width="16" height="16" />
                                TypeScript
                            </span>
                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                <Icon icon="logos:jquery" width="32" height="24" />
                                jQuery
                            </span>
                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                <Icon icon="logos:vue" width="16" height="16" />
                                Vue.js
                            </span>
                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                <Icon icon="logos:react" width="16" height="16" />
                                React
                            </span>
                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                <Icon icon="logos:html-5" width="16" height="16" />
                                HTML5
                            </span>
                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                <Icon icon="logos:css-3" width="16" height="16" />
                                CSS3
                            </span>
                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                <Icon icon="logos:element" width="16" height="16" />
                                Element Plus
                            </span>
                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                <Icon icon="logos:material-ui" width="16" height="16" />
                                Material UI
                            </span>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-medium">사용할 줄 알아요.</h3>

                        <div className="flex flex-wrap gap-3">
                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                <Icon icon="logos:mysql-icon" width="16" height="16" />
                                MySQL
                            </span>
                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                <Icon icon="logos:tailwindcss-icon" width="16" height="16" />
                                TailwindCSS
                            </span>
                        </div>
                    </div>
                </div>

                <div className="space-y-3 pl-2">
                    <h2 className="text-xl font-semibold text-gray-700 underline underline-offset-4 decoration-wavy">
                        개인 경험
                    </h2>

                    <div className="flex flex-wrap gap-3">
                        <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                            <Icon icon="logos:nextjs-icon" width="16" height="16" />
                            Next.js
                        </span>
                        <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                            <Icon icon="logos:c" width="16" height="16" />C
                        </span>
                        <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                            <Icon icon="logos:unity" width="16" height="16" />
                            Unity
                        </span>
                        <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                            <Icon icon="logos:react" width="16" height="16" />
                            React Native
                        </span>
                        <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                            <Icon icon="logos:flutter" width="16" height="16" />
                            Flutter
                        </span>
                    </div>
                </div>
            </div>

            <div className="hidden lg:flex items-center">
                <div className="w-px h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
            </div>

            <div className="w-full lg:w-1/2 space-y-6">
                <h1 className="inline-block text-xl md:text-3xl font-bold px-3 md:px-4 py-2 mb-6 bg-gradient-to-r from-cyan-700/70 to-cyan-500/70 text-white rounded-xl shadow-md">
                    도구 / 환경
                </h1>

                <div className="space-y-4 pl-2">
                    <h2 className="text-xl font-semibold text-gray-700 underline underline-offset-4 decoration-wavy">
                        실무 경험
                    </h2>

                    <div className="space-y-3">
                        <h3 className="text-lg font-medium">능숙하게 사용 가능해요.</h3>

                        <div className="flex flex-wrap gap-3">
                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                <Icon icon="logos:visual-studio-code" width="16" height="16" />
                                vscode
                            </span>
                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                <Icon icon="logos:cypress-icon" width="16" height="16" />
                                Cypress
                            </span>
                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                <Icon icon="logos:github-icon" width="16" height="16" />
                                GitHub
                            </span>
                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                <Icon icon="logos:bitbucket" width="16" height="16" />
                                Bitbucket
                            </span>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-medium">사용할 줄 알아요.</h3>

                        <div className="flex flex-wrap gap-3">
                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                <Icon icon="logos:eclipse-icon" width="16" height="16" />
                                eclipse
                            </span>
                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                <Icon icon="logos:aws" width="24" height="16" />
                                AWS
                            </span>
                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                <Icon icon="logos:storyblocks-icon" width="16" height="16" />
                                Storybook
                            </span>
                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                <Icon icon="logos:docker-icon" width="16" height="16" />
                                Docker
                            </span>
                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                <Icon icon="logos:gitlab-icon" width="16" height="16" />
                                Gitlab
                            </span>
                        </div>
                    </div>
                </div>

                <div className="space-y-3 pl-2">
                    <h2 className="text-xl font-semibold text-gray-700 underline underline-offset-4 decoration-wavy">
                        개인 경험
                    </h2>

                    <div className="flex flex-wrap gap-3">
                        <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                            <Icon icon="logos:firebase-icon" width="16" height="16" />
                            Firebase
                        </span>
                        <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                            <Icon icon="logos:vercel-icon" width="16" height="16" />
                            Vercel
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

import { Theme } from '@/components/custom/theme';
import React from 'react';
import { themesList } from '.';

const Themes = () => {
    return (
        <div className="container mx-auto min-h-screen">
            <h1 className="text-3xl font-bold text-center my-4">Elije tu Tema</h1>
            <div className="rounded-box grid  md:grid-cols-3 lg:grid-cols-5 gap-4">
                {themesList.map((item, index) => (
                    <Theme key={index} theme={item} />
                ))}
            </div>
        </div>
    );
}

export default Themes;

import React from 'react';

export default function Component({ id, title, content, date }: { id: string, title: string, content: string, date: string }) {
    return (
        <div key={id} className="bg-gray-100 border border-gray-200 rounded p-4 m-4">
            <h2 className="text-xl text-bold"><a title={title} href={`/post/${id}`}>{title}</a></h2>
            <p className="text-gray-500">{date}</p>
            <p>{content}</p>
        </div>
    );
}


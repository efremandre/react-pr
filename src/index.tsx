import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {StateType} from "./types";

const state: StateType = {
    output: {
        header: {
            headerItem: [
                {id: 1, title: 'id', item: 4},
                {id: 2, title: 'code', item: 'authentication'}
            ],
            headerDate: [
                {id: 1, title: 'Создано', item: '15.09.2023 10:39'},
                {id: 2, title: 'Изменено', item: '15.09.2023 10:39'},
                {id: 3, title: 'Удалено', item: '15.09.2023 10:39'}
            ]
        },
        items: [
            {id: 1, title: 'Permission rule visible', iconActive: true, isActive: true},
            {id: 3, title: 'Выгрузка', iconActive: true, isActive: true},
            {id: 5, title: 'Выгрузка SEED', iconActive: true, isActive: true},
            {id: 7, title: 'Выгрузка Пользователь', iconActive: true, isActive: true},
            {id: 9, title: 'Активно', iconActive: true, isActive: false},
            {id: 2, title: 'Soft Deletion', iconActive: true, isActive: false},
            {id: 4, title: 'Режим истории', iconActive: true, isActive: false},
            {id: 6, title: 'Имя файла SEED', text: '0009_system_service_field.csv'},
            {id: 8, title: 'Имя файла Пользователь', text: '0008_system_service_field_value_type_format.csv'},
            {id: 10, title: 'Имя файла Пользователь', text: '0008_system_service_field_value_type_format.csv'},
        ]
    }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <App state={state} />
);

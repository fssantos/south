import styled from 'styled-components';
import React from 'react';
import { BookOpen } from 'styled-icons/boxicons-regular/BookOpen';
import { BarChart } from 'styled-icons/boxicons-regular/BarChart';
import { Planet } from 'styled-icons/boxicons-regular/Planet';
import { AccountBalance } from 'styled-icons/material/AccountBalance';
import { InsertEmoticon } from 'styled-icons/material/InsertEmoticon';
import { KissWinkHeart } from 'styled-icons/fa-regular/KissWinkHeart';
import { ChildCare } from 'styled-icons/material/ChildCare';
import { HeartOutline } from 'styled-icons/typicons/HeartOutline';
import defaultTheme from './defaultTheme';

const EducationIcon = styled(BookOpen)``;
const BusinessIcon = styled(BarChart)``;
const FictionIcon = styled(Planet)``;
const HistoryIcon = styled(AccountBalance)``;
const SelfHelpIcon = styled(InsertEmoticon)``;
const RomanceIcon = styled(KissWinkHeart)``;
const ChildIcon = styled(ChildCare)``;
const HealthIcon = styled(HeartOutline)``;

const size = 25;

export const sections = [
    {
        query: 'Educação',
        tag: 'Educação',
        Icon: <EducationIcon size={size} color={defaultTheme.primaryFont} />
    },
    {
        query: 'Negócios',
        tag: 'Negócios',
        Icon: <BusinessIcon size={size} color={defaultTheme.primaryFont} />
    },
    {
        query: 'Ficção',
        tag: 'Ficção',
        Icon: <FictionIcon size={size} color={defaultTheme.primaryFont} />
    },
    {
        query: 'História',
        tag: 'História',
        Icon: <HistoryIcon size={size} color={defaultTheme.primaryFont} />
    },
    {
        query: 'Autoajuda',
        tag: 'Autoajuda',
        Icon: <SelfHelpIcon size={size} color={defaultTheme.primaryFont} />
    },
    {
        query: 'Romance',
        tag: 'Romance',
        Icon: <RomanceIcon size={size} color={defaultTheme.primaryFont} />
    },
    {
        query: 'Infantis',
        tag: 'Infantis',
        Icon: <ChildIcon size={size} color={defaultTheme.primaryFont} />
    },
    {
        query: 'Saúde',
        tag: 'Saúde',
        Icon: <HealthIcon size={size} color={defaultTheme.primaryFont} />
    }
];

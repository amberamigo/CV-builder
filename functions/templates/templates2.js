exports.tmpl2 = ({ name, email, phone, linkedin, address, github, 
    exp_company_name_1, exp_job_profile_1, exp_start_date_1, exp_end_date_1, 
    edu_institute_name_1, edu_course_name_1, edu_course_year_1, edu_course_score_1,
    edu_institute_name_2, edu_course_name_2, edu_course_year_2, edu_course_score_2, 
    project_name_1, project_description_1, project_link_1, project_name_2, project_description_2, project_link_2, 
    skills_name_1, skills_name_2, skills_name_3, skills_name_4, achievements_1, achievements_2, areas_of_interest_1, areas_of_interest_2 }) => {
    
        return `<!DOCTYPE html>
                <html>
                    <head>
                        <style type="text/css">
                            :root {
                                --blue: #007bff;
                                --indigo: #6610f2;
                                --purple: #6f42c1;
                                --pink: #e83e8c;
                                --red: #dc3545;
                                --orange: #fd7e14;
                                --yellow: #ffc107;
                                --green: #28a745;
                                --teal: #20c997;
                                --cyan: #17a2b8;
                                --white: #fff;
                                --gray: #6c757d;
                                --gray-dark: #343a40;
                                --primary: #007bff;
                                --secondary: #6c757d;
                                --success: #28a745;
                                --info: #17a2b8;
                                --warning: #ffc107;
                                --danger: #dc3545;
                                --light: #f8f9fa;
                                --dark: #343a40;
                                --breakpoint-xs: 0;
                                --breakpoint-sm: 576px;
                                --breakpoint-md: 768px;
                                --breakpoint-lg: 992px;
                                --breakpoint-xl: 1200px;
                                --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
                                --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
                            }
                          
                            *,
                            *::before,
                            *::after {
                                box-sizing: border-box;
                            }
                            
                            html {
                                zoom: 0.55;
                            }
                          
                            article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
                                display: block;
                            }
                            
                            body {
                                margin: 0;
                                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
                                font-size: 1rem;
                                font-weight: 400;
                                line-height: 1.5;
                                color: #212529;
                                text-align: left;
                                background-color: #fff;
                            }
                            
                            [tabindex="-1"]:focus:not(:focus-visible) {
                                outline: 0 !important;
                            }
                            
                            hr {
                                box-sizing: content-box;
                                height: 0;
                                overflow: visible;
                            }
                            
                            h1, h2, h3, h4, h5, h6 {
                                margin-top: 0;
                                margin-bottom: 0.5rem;
                            }
                            
                            p {
                                margin-top: 0;
                                margin-bottom: 1rem;
                            }
                            
                            abbr[title],
                            abbr[data-original-title] {
                                text-decoration: underline;
                                -webkit-text-decoration: underline dotted;
                                text-decoration: underline dotted;
                                cursor: help;
                                border-bottom: 0;
                                -webkit-text-decoration-skip-ink: none;
                                text-decoration-skip-ink: none;
                            }
                            
                            address {
                                margin-bottom: 1rem;
                                font-style: normal;
                                line-height: inherit;
                            }
                            
                            ol,
                            ul,
                            dl {
                                margin-top: 0;
                                margin-bottom: 1rem;
                            }
                            
                            ol ol,
                            ul ul,
                            ol ul,
                            ul ol {
                                margin-bottom: 0;
                            }
                            
                            dt {
                                font-weight: 700;
                            }
                            
                            dd {
                                margin-bottom: .5rem;
                                margin-left: 0;
                            }
                            
                            blockquote {
                                margin: 0 0 1rem;
                            }
                            
                            b,
                            strong {
                                font-weight: bolder;
                            }
                            
                            small {
                                font-size: 80%;
                            }
                            
                            sub,
                            sup {
                                position: relative;
                                font-size: 75%;
                                line-height: 0;
                                vertical-align: baseline;
                            }
                            
                            sub {
                                bottom: -.25em;
                            }
                            
                            sup {
                                top: -.5em;
                            }
                            
                            pre,
                            code,
                            kbd,
                            samp {
                                font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
                                font-size: 1em;
                            }
                            
                            svg {
                                overflow: hidden;
                                vertical-align: middle;
                            }
                            
                            table {
                                border-collapse: collapse;
                            }
                            
                            caption {
                                padding-top: 0.75rem;
                                padding-bottom: 0.75rem;
                                color: #6c757d;
                                text-align: left;
                                caption-side: bottom;
                            }
                            
                            th {
                                text-align: inherit;
                                text-align: -webkit-match-parent;
                            }
                            
                            label {
                                display: inline-block;
                                margin-bottom: 0.5rem;
                            }
                            
                            [type="number"]::-webkit-inner-spin-button,
                            [type="number"]::-webkit-outer-spin-button {
                                height: auto;
                            }
                            
                            [type="search"] {
                                outline-offset: -2px;
                                -webkit-appearance: none;
                            }
                            
                            [type="search"]::-webkit-search-decoration {
                                -webkit-appearance: none;
                            }
                            
                            ::-webkit-file-upload-button {
                                font: inherit;
                                -webkit-appearance: button;
                            }
                            
                            output {
                                display: inline-block;
                            }
                            
                            summary {
                                display: list-item;
                                cursor: pointer;
                            }
                            
                            template {
                                display: none;
                            }
                            
                            [hidden] {
                                display: none !important;
                            }
                            
                            h1, h2, h3, h4, h5, h6,
                            .h1, .h2, .h3, .h4, .h5, .h6 {
                                margin-bottom: 0.5rem;
                                font-weight: 500;
                                line-height: 1.2;
                            }
                            
                            h1, .h1 {
                                font-size: 2.5rem;
                            }
                            
                            h2, .h2 {
                                font-size: 2rem;
                            }
                            
                            h3, .h3 {
                                font-size: 1.75rem;
                            }
                            
                            h4, .h4 {
                                font-size: 1.5rem;
                            }
                            
                            h5, .h5 {
                                font-size: 1.25rem;
                            }
                            
                            h6, .h6 {
                                font-size: 1rem;
                            }
                            
                            .lead {
                                font-size: 1.25rem;
                                font-weight: 300;
                            }
                            
                            .display-1 {
                                font-size: 6rem;
                                font-weight: 300;
                                line-height: 1.2;
                            }
                            
                            .display-2 {
                                font-size: 5.5rem;
                                font-weight: 300;
                                line-height: 1.2;
                            }
                            
                            .display-3 {
                                font-size: 4.5rem;
                                font-weight: 300;
                                line-height: 1.2;
                            }
                            
                            .display-4 {
                                font-size: 3.5rem;
                                font-weight: 300;
                                line-height: 1.2;
                            }
                            
                            hr {
                                margin-top: 0.5rem;
                                margin-bottom: 0.5rem;
                                border: 0;
                                border-top: 1px solid rgba(0, 0, 0, 0.1);
                            }
                            
                            small,
                            .small {
                                font-size: 80%;
                                font-weight: 400;
                            }
                            
                            .list-unstyled {
                                padding-left: 0;
                                list-style: none;
                            }
                            
                            .list-inline {
                                padding-left: 0;
                                list-style: none;
                            }
                            
                            .list-inline-item {
                                display: inline-block;
                            }
                            
                            .list-inline-item:not(:last-child) {
                                margin-right: 0.5rem;
                            }
                            
                            .container,
                            .container-fluid,
                            .container-sm,
                            .container-md,
                            .container-lg,
                            .container-xl {
                                width: 100%;
                                padding-right: 15px;
                                padding-left: 15px;
                                margin-right: auto;
                                margin-left: auto;
                            }
                            
                            @media (min-width: 576px) {
                                .container, .container-sm {
                                max-width: 540px;
                                }
                            }
                            
                            @media (min-width: 768px) {
                                .container, .container-sm, .container-md {
                                max-width: 720px;
                                }
                            }
                            
                            @media (min-width: 992px) {
                                .container, .container-sm, .container-md, .container-lg {
                                max-width: 960px;
                                }
                            }
                            
                            @media (min-width: 1200px) {
                                .container, .container-sm, .container-md, .container-lg, .container-xl {
                                max-width: 1140px;
                                }
                            }
                            
                            .row {
                                display: -ms-flexbox;
                                display: flex;
                                -ms-flex-wrap: wrap;
                                flex-wrap: wrap;
                                margin-right: -15px;
                                margin-left: -15px;
                            }
                            
                            .no-gutters {
                                margin-right: 0;
                                margin-left: 0;
                            }
                            
                            .no-gutters > .col,
                            .no-gutters > [class*="col-"] {
                                padding-right: 0;
                                padding-left: 0;
                            }
                            
                            .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,
                            .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,
                            .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,
                            .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,
                            .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,
                            .col-xl-auto {
                                position: relative;
                                width: 100%;
                                padding-right: 15px;
                                padding-left: 15px;
                            }
                            
                            .col {
                                -ms-flex-preferred-size: 0;
                                flex-basis: 0;
                                -ms-flex-positive: 1;
                                flex-grow: 1;
                                max-width: 100%;
                            }
                            
                            .row-cols-1 > * {
                                -ms-flex: 0 0 100%;
                                flex: 0 0 100%;
                                max-width: 100%;
                            }
                            
                            .row-cols-2 > * {
                                -ms-flex: 0 0 50%;
                                flex: 0 0 50%;
                                max-width: 50%;
                            }
                            
                            .row-cols-3 > * {
                                -ms-flex: 0 0 33.333333%;
                                flex: 0 0 33.333333%;
                                max-width: 33.333333%;
                            }
                            
                            .row-cols-4 > * {
                                -ms-flex: 0 0 25%;
                                flex: 0 0 25%;
                                max-width: 25%;
                            }
                            
                            .row-cols-5 > * {
                                -ms-flex: 0 0 20%;
                                flex: 0 0 20%;
                                max-width: 20%;
                            }
                            
                            .row-cols-6 > * {
                                -ms-flex: 0 0 16.666667%;
                                flex: 0 0 16.666667%;
                                max-width: 16.666667%;
                            }
                            
                            .col-auto {
                                -ms-flex: 0 0 auto;
                                flex: 0 0 auto;
                                width: auto;
                                max-width: 100%;
                            }
                            
                            .col-1 {
                                -ms-flex: 0 0 8.333333%;
                                flex: 0 0 8.333333%;
                                max-width: 8.333333%;
                            }
                            
                            .col-2 {
                                -ms-flex: 0 0 16.666667%;
                                flex: 0 0 16.666667%;
                                max-width: 16.666667%;
                            }
                            
                            .col-3 {
                                -ms-flex: 0 0 25%;
                                flex: 0 0 25%;
                                max-width: 25%;
                            }
                            
                            .col-4 {
                                -ms-flex: 0 0 33.333333%;
                                flex: 0 0 33.333333%;
                                max-width: 33.333333%;
                            }
                            
                            .col-5 {
                                -ms-flex: 0 0 41.666667%;
                                flex: 0 0 41.666667%;
                                max-width: 41.666667%;
                            }
                            
                            .col-6 {
                                -ms-flex: 0 0 50%;
                                flex: 0 0 50%;
                                max-width: 50%;
                            }
                            
                            .col-7 {
                                -ms-flex: 0 0 58.333333%;
                                flex: 0 0 58.333333%;
                                max-width: 58.333333%;
                            }
                            
                            .col-8 {
                                -ms-flex: 0 0 66.666667%;
                                flex: 0 0 66.666667%;
                                max-width: 66.666667%;
                            }
                          
                            .col-9 {
                                -ms-flex: 0 0 75%;
                                flex: 0 0 75%;
                                max-width: 75%;
                            }
                            
                            .col-10 {
                                -ms-flex: 0 0 83.333333%;
                                flex: 0 0 83.333333%;
                                max-width: 83.333333%;
                            }
                            
                            .col-11 {
                                -ms-flex: 0 0 91.666667%;
                                flex: 0 0 91.666667%;
                                max-width: 91.666667%;
                            }
                            
                            .col-12 {
                                -ms-flex: 0 0 100%;
                                flex: 0 0 100%;
                                max-width: 100%;
                            }
                            
                            .order-first {
                                -ms-flex-order: -1;
                                order: -1;
                            }
                            
                            .order-last {
                                -ms-flex-order: 13;
                                order: 13;
                            }
                            
                            .order-0 {
                                -ms-flex-order: 0;
                                order: 0;
                            }
                            
                            .order-1 {
                                -ms-flex-order: 1;
                                order: 1;
                            }
                            
                            .order-2 {
                                -ms-flex-order: 2;
                                order: 2;
                            }
                            
                            .order-3 {
                                -ms-flex-order: 3;
                                order: 3;
                            }
                            
                            .order-4 {
                                -ms-flex-order: 4;
                                order: 4;
                            }
                            
                            .order-5 {
                                -ms-flex-order: 5;
                                order: 5;
                            }
                            
                            .order-6 {
                                -ms-flex-order: 6;
                                order: 6;
                            }
                            
                            .order-7 {
                                -ms-flex-order: 7;
                                order: 7;
                            }
                            
                            .order-8 {
                                -ms-flex-order: 8;
                                order: 8;
                            }
                            
                            .order-9 {
                                -ms-flex-order: 9;
                                order: 9;
                            }
                            
                            .order-10 {
                                -ms-flex-order: 10;
                                order: 10;
                            }
                            
                            .order-11 {
                                -ms-flex-order: 11;
                                order: 11;
                            }
                            
                            .order-12 {
                                -ms-flex-order: 12;
                                order: 12;
                            }
                            
                            .offset-1 {
                                margin-left: 8.333333%;
                            }
                            
                            .offset-2 {
                                margin-left: 16.666667%;
                            }
                            
                            .offset-3 {
                                margin-left: 25%;
                            }
                            
                            .offset-4 {
                                margin-left: 33.333333%;
                            }
                            
                            .offset-5 {
                                margin-left: 41.666667%;
                            }
                            
                            .offset-6 {
                                margin-left: 50%;
                            }
                            
                            .offset-7 {
                                margin-left: 58.333333%;
                            }
                            
                            .offset-8 {
                                margin-left: 66.666667%;
                            }
                            
                            .offset-9 {
                                margin-left: 75%;
                            }
                            
                            .offset-10 {
                                margin-left: 83.333333%;
                            }
                            
                            .offset-11 {
                                margin-left: 91.666667%;
                            }
                            
                            @media (min-width: 576px) {
                                .col-sm {
                                -ms-flex-preferred-size: 0;
                                flex-basis: 0;
                                -ms-flex-positive: 1;
                                flex-grow: 1;
                                max-width: 100%;
                                }
                                .row-cols-sm-1 > * {
                                -ms-flex: 0 0 100%;
                                flex: 0 0 100%;
                                max-width: 100%;
                                }
                                .row-cols-sm-2 > * {
                                -ms-flex: 0 0 50%;
                                flex: 0 0 50%;
                                max-width: 50%;
                                }
                                .row-cols-sm-3 > * {
                                -ms-flex: 0 0 33.333333%;
                                flex: 0 0 33.333333%;
                                max-width: 33.333333%;
                                }
                                .row-cols-sm-4 > * {
                                -ms-flex: 0 0 25%;
                                flex: 0 0 25%;
                                max-width: 25%;
                                }
                                .row-cols-sm-5 > * {
                                -ms-flex: 0 0 20%;
                                flex: 0 0 20%;
                                max-width: 20%;
                                }
                                .row-cols-sm-6 > * {
                                -ms-flex: 0 0 16.666667%;
                                flex: 0 0 16.666667%;
                                max-width: 16.666667%;
                                }
                                .col-sm-auto {
                                -ms-flex: 0 0 auto;
                                flex: 0 0 auto;
                                width: auto;
                                max-width: 100%;
                                }
                                .col-sm-1 {
                                -ms-flex: 0 0 8.333333%;
                                flex: 0 0 8.333333%;
                                max-width: 8.333333%;
                                }
                                .col-sm-2 {
                                -ms-flex: 0 0 16.666667%;
                                flex: 0 0 16.666667%;
                                max-width: 16.666667%;
                                }
                                .col-sm-3 {
                                -ms-flex: 0 0 25%;
                                flex: 0 0 25%;
                                max-width: 25%;
                                }
                                .col-sm-4 {
                                -ms-flex: 0 0 33.333333%;
                                flex: 0 0 33.333333%;
                                max-width: 33.333333%;
                                }
                                .col-sm-5 {
                                -ms-flex: 0 0 41.666667%;
                                flex: 0 0 41.666667%;
                                max-width: 41.666667%;
                                }
                                .col-sm-6 {
                                -ms-flex: 0 0 50%;
                                flex: 0 0 50%;
                                max-width: 50%;
                                }
                                .col-sm-7 {
                                -ms-flex: 0 0 58.333333%;
                                flex: 0 0 58.333333%;
                                max-width: 58.333333%;
                                }
                                .col-sm-8 {
                                -ms-flex: 0 0 66.666667%;
                                flex: 0 0 66.666667%;
                                max-width: 66.666667%;
                                }
                                .col-sm-9 {
                                -ms-flex: 0 0 75%;
                                flex: 0 0 75%;
                                max-width: 75%;
                                }
                                .col-sm-10 {
                                -ms-flex: 0 0 83.333333%;
                                flex: 0 0 83.333333%;
                                max-width: 83.333333%;
                                }
                                .col-sm-11 {
                                -ms-flex: 0 0 91.666667%;
                                flex: 0 0 91.666667%;
                                max-width: 91.666667%;
                                }
                                .col-sm-12 {
                                -ms-flex: 0 0 100%;
                                flex: 0 0 100%;
                                max-width: 100%;
                                }
                                .order-sm-first {
                                -ms-flex-order: -1;
                                order: -1;
                                }
                                .order-sm-last {
                                -ms-flex-order: 13;
                                order: 13;
                                }
                                .order-sm-0 {
                                -ms-flex-order: 0;
                                order: 0;
                                }
                                .order-sm-1 {
                                -ms-flex-order: 1;
                                order: 1;
                                }
                                .order-sm-2 {
                                -ms-flex-order: 2;
                                order: 2;
                                }
                                .order-sm-3 {
                                -ms-flex-order: 3;
                                order: 3;
                                }
                                .order-sm-4 {
                                -ms-flex-order: 4;
                                order: 4;
                                }
                                .order-sm-5 {
                                -ms-flex-order: 5;
                                order: 5;
                                }
                                .order-sm-6 {
                                -ms-flex-order: 6;
                                order: 6;
                                }
                                .order-sm-7 {
                                -ms-flex-order: 7;
                                order: 7;
                                }
                                .order-sm-8 {
                                -ms-flex-order: 8;
                                order: 8;
                                }
                                .order-sm-9 {
                                -ms-flex-order: 9;
                                order: 9;
                                }
                                .order-sm-10 {
                                -ms-flex-order: 10;
                                order: 10;
                                }
                                .order-sm-11 {
                                -ms-flex-order: 11;
                                order: 11;
                                }
                                .order-sm-12 {
                                -ms-flex-order: 12;
                                order: 12;
                                }
                                .offset-sm-0 {
                                margin-left: 0;
                                }
                                .offset-sm-1 {
                                margin-left: 8.333333%;
                                }
                                .offset-sm-2 {
                                margin-left: 16.666667%;
                                }
                                .offset-sm-3 {
                                margin-left: 25%;
                                }
                                .offset-sm-4 {
                                margin-left: 33.333333%;
                                }
                                .offset-sm-5 {
                                margin-left: 41.666667%;
                                }
                                .offset-sm-6 {
                                margin-left: 50%;
                                }
                                .offset-sm-7 {
                                margin-left: 58.333333%;
                                }
                                .offset-sm-8 {
                                margin-left: 66.666667%;
                                }
                                .offset-sm-9 {
                                margin-left: 75%;
                                }
                                .offset-sm-10 {
                                margin-left: 83.333333%;
                                }
                                .offset-sm-11 {
                                margin-left: 91.666667%;
                                }
                            }
                            
                            @media (min-width: 768px) {
                                .col-md {
                                -ms-flex-preferred-size: 0;
                                flex-basis: 0;
                                -ms-flex-positive: 1;
                                flex-grow: 1;
                                max-width: 100%;
                                }
                                .row-cols-md-1 > * {
                                -ms-flex: 0 0 100%;
                                flex: 0 0 100%;
                                max-width: 100%;
                                }
                                .row-cols-md-2 > * {
                                -ms-flex: 0 0 50%;
                                flex: 0 0 50%;
                                max-width: 50%;
                                }
                                .row-cols-md-3 > * {
                                -ms-flex: 0 0 33.333333%;
                                flex: 0 0 33.333333%;
                                max-width: 33.333333%;
                                }
                                .row-cols-md-4 > * {
                                -ms-flex: 0 0 25%;
                                flex: 0 0 25%;
                                max-width: 25%;
                                }
                                .row-cols-md-5 > * {
                                -ms-flex: 0 0 20%;
                                flex: 0 0 20%;
                                max-width: 20%;
                                }
                                .row-cols-md-6 > * {
                                -ms-flex: 0 0 16.666667%;
                                flex: 0 0 16.666667%;
                                max-width: 16.666667%;
                                }
                                .col-md-auto {
                                -ms-flex: 0 0 auto;
                                flex: 0 0 auto;
                                width: auto;
                                max-width: 100%;
                                }
                                .col-md-1 {
                                -ms-flex: 0 0 8.333333%;
                                flex: 0 0 8.333333%;
                                max-width: 8.333333%;
                                }
                                .col-md-2 {
                                -ms-flex: 0 0 16.666667%;
                                flex: 0 0 16.666667%;
                                max-width: 16.666667%;
                                }
                                .col-md-3 {
                                -ms-flex: 0 0 25%;
                                flex: 0 0 25%;
                                max-width: 25%;
                                }
                                .col-md-4 {
                                -ms-flex: 0 0 33.333333%;
                                flex: 0 0 33.333333%;
                                max-width: 33.333333%;
                                }
                                .col-md-5 {
                                -ms-flex: 0 0 41.666667%;
                                flex: 0 0 41.666667%;
                                max-width: 41.666667%;
                                }
                                .col-md-6 {
                                -ms-flex: 0 0 50%;
                                flex: 0 0 50%;
                                max-width: 50%;
                                }
                                .col-md-7 {
                                -ms-flex: 0 0 58.333333%;
                                flex: 0 0 58.333333%;
                                max-width: 58.333333%;
                                }
                                .col-md-8 {
                                -ms-flex: 0 0 66.666667%;
                                flex: 0 0 66.666667%;
                                max-width: 66.666667%;
                                }
                                .col-md-9 {
                                -ms-flex: 0 0 75%;
                                flex: 0 0 75%;
                                max-width: 75%;
                                }
                                .col-md-10 {
                                -ms-flex: 0 0 83.333333%;
                                flex: 0 0 83.333333%;
                                max-width: 83.333333%;
                                }
                                .col-md-11 {
                                -ms-flex: 0 0 91.666667%;
                                flex: 0 0 91.666667%;
                                max-width: 91.666667%;
                                }
                                .col-md-12 {
                                -ms-flex: 0 0 100%;
                                flex: 0 0 100%;
                                max-width: 100%;
                                }
                                .order-md-first {
                                -ms-flex-order: -1;
                                order: -1;
                                }
                                .order-md-last {
                                -ms-flex-order: 13;
                                order: 13;
                                }
                                .order-md-0 {
                                -ms-flex-order: 0;
                                order: 0;
                                }
                                .order-md-1 {
                                -ms-flex-order: 1;
                                order: 1;
                                }
                                .order-md-2 {
                                -ms-flex-order: 2;
                                order: 2;
                                }
                                .order-md-3 {
                                -ms-flex-order: 3;
                                order: 3;
                                }
                                .order-md-4 {
                                -ms-flex-order: 4;
                                order: 4;
                                }
                                .order-md-5 {
                                -ms-flex-order: 5;
                                order: 5;
                                }
                                .order-md-6 {
                                -ms-flex-order: 6;
                                order: 6;
                                }
                                .order-md-7 {
                                -ms-flex-order: 7;
                                order: 7;
                                }
                                .order-md-8 {
                                -ms-flex-order: 8;
                                order: 8;
                                }
                                .order-md-9 {
                                -ms-flex-order: 9;
                                order: 9;
                                }
                                .order-md-10 {
                                -ms-flex-order: 10;
                                order: 10;
                                }
                                .order-md-11 {
                                -ms-flex-order: 11;
                                order: 11;
                                }
                                .order-md-12 {
                                -ms-flex-order: 12;
                                order: 12;
                                }
                                .offset-md-0 {
                                margin-left: 0;
                                }
                                .offset-md-1 {
                                margin-left: 8.333333%;
                                }
                                .offset-md-2 {
                                margin-left: 16.666667%;
                                }
                                .offset-md-3 {
                                margin-left: 25%;
                                }
                                .offset-md-4 {
                                margin-left: 33.333333%;
                                }
                                .offset-md-5 {
                                margin-left: 41.666667%;
                                }
                                .offset-md-6 {
                                margin-left: 50%;
                                }
                                .offset-md-7 {
                                margin-left: 58.333333%;
                                }
                                .offset-md-8 {
                                margin-left: 66.666667%;
                                }
                                .offset-md-9 {
                                margin-left: 75%;
                                }
                                .offset-md-10 {
                                margin-left: 83.333333%;
                                }
                                .offset-md-11 {
                                margin-left: 91.666667%;
                                }
                            }
                          
                            @media (min-width: 992px) {
                                .col-lg {
                                -ms-flex-preferred-size: 0;
                                flex-basis: 0;
                                -ms-flex-positive: 1;
                                flex-grow: 1;
                                max-width: 100%;
                                }
                                .row-cols-lg-1 > * {
                                -ms-flex: 0 0 100%;
                                flex: 0 0 100%;
                                max-width: 100%;
                                }
                                .row-cols-lg-2 > * {
                                -ms-flex: 0 0 50%;
                                flex: 0 0 50%;
                                max-width: 50%;
                                }
                                .row-cols-lg-3 > * {
                                -ms-flex: 0 0 33.333333%;
                                flex: 0 0 33.333333%;
                                max-width: 33.333333%;
                                }
                                .row-cols-lg-4 > * {
                                -ms-flex: 0 0 25%;
                                flex: 0 0 25%;
                                max-width: 25%;
                                }
                                .row-cols-lg-5 > * {
                                -ms-flex: 0 0 20%;
                                flex: 0 0 20%;
                                max-width: 20%;
                                }
                                .row-cols-lg-6 > * {
                                -ms-flex: 0 0 16.666667%;
                                flex: 0 0 16.666667%;
                                max-width: 16.666667%;
                                }
                                .col-lg-auto {
                                -ms-flex: 0 0 auto;
                                flex: 0 0 auto;
                                width: auto;
                                max-width: 100%;
                                }
                                .col-lg-1 {
                                -ms-flex: 0 0 8.333333%;
                                flex: 0 0 8.333333%;
                                max-width: 8.333333%;
                                }
                                .col-lg-2 {
                                -ms-flex: 0 0 16.666667%;
                                flex: 0 0 16.666667%;
                                max-width: 16.666667%;
                                }
                                .col-lg-3 {
                                -ms-flex: 0 0 25%;
                                flex: 0 0 25%;
                                max-width: 25%;
                                }
                                .col-lg-4 {
                                -ms-flex: 0 0 33.333333%;
                                flex: 0 0 33.333333%;
                                max-width: 33.333333%;
                                }
                                .col-lg-5 {
                                -ms-flex: 0 0 41.666667%;
                                flex: 0 0 41.666667%;
                                max-width: 41.666667%;
                                }
                                .col-lg-6 {
                                -ms-flex: 0 0 50%;
                                flex: 0 0 50%;
                                max-width: 50%;
                                }
                                .col-lg-7 {
                                -ms-flex: 0 0 58.333333%;
                                flex: 0 0 58.333333%;
                                max-width: 58.333333%;
                                }
                                .col-lg-8 {
                                -ms-flex: 0 0 66.666667%;
                                flex: 0 0 66.666667%;
                                max-width: 66.666667%;
                                }
                                .col-lg-9 {
                                -ms-flex: 0 0 75%;
                                flex: 0 0 75%;
                                max-width: 75%;
                                }
                                .col-lg-10 {
                                -ms-flex: 0 0 83.333333%;
                                flex: 0 0 83.333333%;
                                max-width: 83.333333%;
                                }
                                .col-lg-11 {
                                -ms-flex: 0 0 91.666667%;
                                flex: 0 0 91.666667%;
                                max-width: 91.666667%;
                                }
                                .col-lg-12 {
                                -ms-flex: 0 0 100%;
                                flex: 0 0 100%;
                                max-width: 100%;
                                }
                                .order-lg-first {
                                -ms-flex-order: -1;
                                order: -1;
                                }
                                .order-lg-last {
                                -ms-flex-order: 13;
                                order: 13;
                                }
                                .order-lg-0 {
                                -ms-flex-order: 0;
                                order: 0;
                                }
                                .order-lg-1 {
                                -ms-flex-order: 1;
                                order: 1;
                                }
                                .order-lg-2 {
                                -ms-flex-order: 2;
                                order: 2;
                                }
                                .order-lg-3 {
                                -ms-flex-order: 3;
                                order: 3;
                                }
                                .order-lg-4 {
                                -ms-flex-order: 4;
                                order: 4;
                                }
                                .order-lg-5 {
                                -ms-flex-order: 5;
                                order: 5;
                                }
                                .order-lg-6 {
                                -ms-flex-order: 6;
                                order: 6;
                                }
                                .order-lg-7 {
                                -ms-flex-order: 7;
                                order: 7;
                                }
                                .order-lg-8 {
                                -ms-flex-order: 8;
                                order: 8;
                                }
                                .order-lg-9 {
                                -ms-flex-order: 9;
                                order: 9;
                                }
                                .order-lg-10 {
                                -ms-flex-order: 10;
                                order: 10;
                                }
                                .order-lg-11 {
                                -ms-flex-order: 11;
                                order: 11;
                                }
                                .order-lg-12 {
                                -ms-flex-order: 12;
                                order: 12;
                                }
                                .offset-lg-0 {
                                margin-left: 0;
                                }
                                .offset-lg-1 {
                                margin-left: 8.333333%;
                                }
                                .offset-lg-2 {
                                margin-left: 16.666667%;
                                }
                                .offset-lg-3 {
                                margin-left: 25%;
                                }
                                .offset-lg-4 {
                                margin-left: 33.333333%;
                                }
                                .offset-lg-5 {
                                margin-left: 41.666667%;
                                }
                                .offset-lg-6 {
                                margin-left: 50%;
                                }
                                .offset-lg-7 {
                                margin-left: 58.333333%;
                                }
                                .offset-lg-8 {
                                margin-left: 66.666667%;
                                }
                                .offset-lg-9 {
                                margin-left: 75%;
                                }
                                .offset-lg-10 {
                                margin-left: 83.333333%;
                                }
                                .offset-lg-11 {
                                margin-left: 91.666667%;
                                }
                            }
                            
                            @media (min-width: 1200px) {
                                .col-xl {
                                -ms-flex-preferred-size: 0;
                                flex-basis: 0;
                                -ms-flex-positive: 1;
                                flex-grow: 1;
                                max-width: 100%;
                                }
                                .row-cols-xl-1 > * {
                                -ms-flex: 0 0 100%;
                                flex: 0 0 100%;
                                max-width: 100%;
                                }
                                .row-cols-xl-2 > * {
                                -ms-flex: 0 0 50%;
                                flex: 0 0 50%;
                                max-width: 50%;
                                }
                                .row-cols-xl-3 > * {
                                -ms-flex: 0 0 33.333333%;
                                flex: 0 0 33.333333%;
                                max-width: 33.333333%;
                                }
                                .row-cols-xl-4 > * {
                                -ms-flex: 0 0 25%;
                                flex: 0 0 25%;
                                max-width: 25%;
                                }
                                .row-cols-xl-5 > * {
                                -ms-flex: 0 0 20%;
                                flex: 0 0 20%;
                                max-width: 20%;
                                }
                                .row-cols-xl-6 > * {
                                -ms-flex: 0 0 16.666667%;
                                flex: 0 0 16.666667%;
                                max-width: 16.666667%;
                                }
                                .col-xl-auto {
                                -ms-flex: 0 0 auto;
                                flex: 0 0 auto;
                                width: auto;
                                max-width: 100%;
                                }
                                .col-xl-1 {
                                -ms-flex: 0 0 8.333333%;
                                flex: 0 0 8.333333%;
                                max-width: 8.333333%;
                                }
                                .col-xl-2 {
                                -ms-flex: 0 0 16.666667%;
                                flex: 0 0 16.666667%;
                                max-width: 16.666667%;
                                }
                                .col-xl-3 {
                                -ms-flex: 0 0 25%;
                                flex: 0 0 25%;
                                max-width: 25%;
                                }
                                .col-xl-4 {
                                -ms-flex: 0 0 33.333333%;
                                flex: 0 0 33.333333%;
                                max-width: 33.333333%;
                                }
                                .col-xl-5 {
                                -ms-flex: 0 0 41.666667%;
                                flex: 0 0 41.666667%;
                                max-width: 41.666667%;
                                }
                                .col-xl-6 {
                                -ms-flex: 0 0 50%;
                                flex: 0 0 50%;
                                max-width: 50%;
                                }
                                .col-xl-7 {
                                -ms-flex: 0 0 58.333333%;
                                flex: 0 0 58.333333%;
                                max-width: 58.333333%;
                                }
                                .col-xl-8 {
                                -ms-flex: 0 0 66.666667%;
                                flex: 0 0 66.666667%;
                                max-width: 66.666667%;
                                }
                                .col-xl-9 {
                                -ms-flex: 0 0 75%;
                                flex: 0 0 75%;
                                max-width: 75%;
                                }
                                .col-xl-10 {
                                -ms-flex: 0 0 83.333333%;
                                flex: 0 0 83.333333%;
                                max-width: 83.333333%;
                                }
                                .col-xl-11 {
                                -ms-flex: 0 0 91.666667%;
                                flex: 0 0 91.666667%;
                                max-width: 91.666667%;
                                }
                                .col-xl-12 {
                                -ms-flex: 0 0 100%;
                                flex: 0 0 100%;
                                max-width: 100%;
                                }
                                .order-xl-first {
                                -ms-flex-order: -1;
                                order: -1;
                                }
                                .order-xl-last {
                                -ms-flex-order: 13;
                                order: 13;
                                }
                                .order-xl-0 {
                                -ms-flex-order: 0;
                                order: 0;
                                }
                                .order-xl-1 {
                                -ms-flex-order: 1;
                                order: 1;
                                }
                                .order-xl-2 {
                                -ms-flex-order: 2;
                                order: 2;
                                }
                                .order-xl-3 {
                                -ms-flex-order: 3;
                                order: 3;
                                }
                                .order-xl-4 {
                                -ms-flex-order: 4;
                                order: 4;
                                }
                                .order-xl-5 {
                                -ms-flex-order: 5;
                                order: 5;
                                }
                                .order-xl-6 {
                                -ms-flex-order: 6;
                                order: 6;
                                }
                                .order-xl-7 {
                                -ms-flex-order: 7;
                                order: 7;
                                }
                                .order-xl-8 {
                                -ms-flex-order: 8;
                                order: 8;
                                }
                                .order-xl-9 {
                                -ms-flex-order: 9;
                                order: 9;
                                }
                                .order-xl-10 {
                                -ms-flex-order: 10;
                                order: 10;
                                }
                                .order-xl-11 {
                                -ms-flex-order: 11;
                                order: 11;
                                }
                                .order-xl-12 {
                                -ms-flex-order: 12;
                                order: 12;
                                }
                                .offset-xl-0 {
                                margin-left: 0;
                                }
                                .offset-xl-1 {
                                margin-left: 8.333333%;
                                }
                                .offset-xl-2 {
                                margin-left: 16.666667%;
                                }
                                .offset-xl-3 {
                                margin-left: 25%;
                                }
                                .offset-xl-4 {
                                margin-left: 33.333333%;
                                }
                                .offset-xl-5 {
                                margin-left: 41.666667%;
                                }
                                .offset-xl-6 {
                                margin-left: 50%;
                                }
                                .offset-xl-7 {
                                margin-left: 58.333333%;
                                }
                                .offset-xl-8 {
                                margin-left: 66.666667%;
                                }
                                .offset-xl-9 {
                                margin-left: 75%;
                                }
                                .offset-xl-10 {
                                margin-left: 83.333333%;
                                }
                                .offset-xl-11 {
                                margin-left: 91.666667%;
                                }
                            }
                          
                            .table {
                                width: 100%;
                                margin-bottom: 1rem;
                                color: #212529;
                            }
                            
                            .table th,
                            .table td {
                                padding: 0.75rem;
                                vertical-align: top;
                                border-top: 1px solid #dee2e6;
                            }
                            
                            .table thead th {
                                vertical-align: bottom;
                                border-bottom: 2px solid #dee2e6;
                            }
                            
                            .table tbody + tbody {
                                border-top: 2px solid #dee2e6;
                            }
                            
                            .table-sm th,
                            .table-sm td {
                                padding: 0.3rem;
                            }
                            
                            .table-bordered {
                                border: 1px solid #dee2e6;
                            }
                            
                            .table-bordered th,
                            .table-bordered td {
                                border: 1px solid #dee2e6;
                            }
                            
                            .table-bordered thead th,
                            .table-bordered thead td {
                                border-bottom-width: 2px;
                            }
                            
                            .table-borderless th,
                            .table-borderless td,
                            .table-borderless thead th,
                            .table-borderless tbody + tbody {
                                border: 0;
                            }
                            
                            .table-striped tbody tr:nth-of-type(odd) {
                                background-color: rgba(0, 0, 0, 0.05);
                            }
                            
                            .table-primary,
                            .table-primary > th,
                            .table-primary > td {
                                background-color: #b8daff;
                            }
                            
                            .table-primary th,
                            .table-primary td,
                            .table-primary thead th,
                            .table-primary tbody + tbody {
                                border-color: #7abaff;
                            }
                            
                            .table-secondary,
                            .table-secondary > th,
                            .table-secondary > td {
                                background-color: #d6d8db;
                            }
                            
                            .table-secondary th,
                            .table-secondary td,
                            .table-secondary thead th,
                            .table-secondary tbody + tbody {
                                border-color: #b3b7bb;
                            }
                            
                            .table-success,
                            .table-success > th,
                            .table-success > td {
                                background-color: #c3e6cb;
                            }
                            
                            .table-success th,
                            .table-success td,
                            .table-success thead th,
                            .table-success tbody + tbody {
                                border-color: #8fd19e;
                            }
                            
                            .table-info,
                            .table-info > th,
                            .table-info > td {
                                background-color: #bee5eb;
                            }
                            
                            .table-info th,
                            .table-info td,
                            .table-info thead th,
                            .table-info tbody + tbody {
                                border-color: #86cfda;
                            }
                            
                            .table-warning,
                            .table-warning > th,
                            .table-warning > td {
                                background-color: #ffeeba;
                            }
                            
                            .table-warning th,
                            .table-warning td,
                            .table-warning thead th,
                            .table-warning tbody + tbody {
                                border-color: #ffdf7e;
                            }
                            
                            
                            .table-danger,
                            .table-danger > th,
                            .table-danger > td {
                                background-color: #f5c6cb;
                            }
                            
                            .table-danger th,
                            .table-danger td,
                            .table-danger thead th,
                            .table-danger tbody + tbody {
                                border-color: #ed969e;
                            }
                            
                            .table-light,
                            .table-light > th,
                            .table-light > td {
                                background-color: #fdfdfe;
                            }
                            
                            .table-light th,
                            .table-light td,
                            .table-light thead th,
                            .table-light tbody + tbody {
                                border-color: #fbfcfc;
                            }
                            
                            .table-dark,
                            .table-dark > th,
                            .table-dark > td {
                                background-color: #c6c8ca;
                            }
                            
                            .table-dark th,
                            .table-dark td,
                            .table-dark thead th,
                            .table-dark tbody + tbody {
                                border-color: #95999c;
                            }
                            
                            .table-active,
                            .table-active > th,
                            .table-active > td {
                                background-color: rgba(0, 0, 0, 0.075);
                            }
                            
                            .table .thead-dark th {
                                color: #fff;
                                background-color: #343a40;
                                border-color: #454d55;
                            }
                            
                            .table .thead-light th {
                                color: #495057;
                                background-color: #e9ecef;
                                border-color: #dee2e6;
                            }
                            
                            .table-dark {
                                color: #fff;
                                background-color: #343a40;
                            }
                            
                            .table-dark th,
                            .table-dark td,
                            .table-dark thead th {
                                border-color: #454d55;
                            }
                            
                            .table-dark.table-bordered {
                                border: 0;
                            }
                            
                            .table-dark.table-striped tbody tr:nth-of-type(odd) {
                                background-color: rgba(255, 255, 255, 0.05);
                            }
                            
                            .badge {
                                display: inline-block;
                                padding: 0.25em 0.4em;
                                font-size: 75%;
                                font-weight: 700;
                                line-height: 1;
                                text-align: center;
                                white-space: nowrap;
                                vertical-align: baseline;
                                border-radius: 0.25rem;
                                transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
                            }
                            
                            @media (prefers-reduced-motion: reduce) {
                                .badge {
                                transition: none;
                                }
                            }
                            
                            .badge:empty {
                                display: none;
                            }
                            
                            .btn .badge {
                                position: relative;
                                top: -1px;
                            }
                            
                            .badge-pill {
                                padding-right: 0.6em;
                                padding-left: 0.6em;
                                border-radius: 10rem;
                            }
                            
                            .badge-primary {
                                color: #fff;
                                background-color: #007bff;
                            }
                            
                            .badge-secondary {
                                color: #fff;
                                background-color: #6c757d;
                            }
                            
                            .badge-success {
                                color: #fff;
                                background-color: #28a745;
                            }
                            
                            .badge-info {
                                color: #fff;
                                background-color: #17a2b8;
                            }
                            
                            .badge-warning {
                                color: #212529;
                                background-color: #ffc107;
                            }
                            
                            .badge-danger {
                                color: #fff;
                                background-color: #dc3545;
                            }
                            
                            .badge-light {
                                color: #212529;
                                background-color: #f8f9fa;
                            }
                            
                            .badge-dark {
                                color: #fff;
                                background-color: #343a40;
                            }
                            
                            .align-baseline {
                                vertical-align: baseline !important;
                            }
                            
                            .align-top {
                                vertical-align: top !important;
                            }
                            
                            .align-middle {
                                vertical-align: middle !important;
                            }
                            
                            .align-bottom {
                                vertical-align: bottom !important;
                            }
                            
                            .align-text-bottom {
                                vertical-align: text-bottom !important;
                            }
                            
                            .align-text-top {
                                vertical-align: text-top !important;
                            }
                            
                            .bg-primary {
                                background-color: #007bff !important;
                            }
                            
                            .bg-secondary {
                                background-color: #6c757d !important;
                            }
                            
                            .bg-success {
                                background-color: #28a745 !important;
                            }
                            
                            .bg-info {
                                background-color: #17a2b8 !important;
                            }
                            
                            .bg-warning {
                                background-color: #ffc107 !important;
                            }
                            
                            .bg-danger {
                                background-color: #dc3545 !important;
                            }
                            
                            .bg-light {
                                background-color: #f8f9fa !important;
                            }
                            
                            .bg-dark {
                                background-color: #343a40 !important;
                            }
                            
                            .bg-white {
                                background-color: #fff !important;
                            }
                            
                            .bg-transparent {
                                background-color: transparent !important;
                            }
                            
                            .border {
                                border: 1px solid #dee2e6 !important;
                            }
                            
                            .border-top {
                                border-top: 1px solid #dee2e6 !important;
                            }
                            
                            .border-right {
                                border-right: 1px solid #dee2e6 !important;
                            }
                            
                            .border-bottom {
                                border-bottom: 1px solid #dee2e6 !important;
                            }
                            
                            .border-left {
                                border-left: 1px solid #dee2e6 !important;
                            }
                            
                            .border-0 {
                                border: 0 !important;
                            }
                            
                            .border-top-0 {
                                border-top: 0 !important;
                            }
                            
                            .border-right-0 {
                                border-right: 0 !important;
                            }
                            
                            .border-bottom-0 {
                                border-bottom: 0 !important;
                            }
                            
                            .border-left-0 {
                                border-left: 0 !important;
                            }
                            
                            .border-primary {
                                border-color: #007bff !important;
                            }
                            
                            .border-secondary {
                                border-color: #6c757d !important;
                            }
                            
                            .border-success {
                                border-color: #28a745 !important;
                            }
                            
                            .border-info {
                                border-color: #17a2b8 !important;
                            }
                            
                            .border-warning {
                                border-color: #ffc107 !important;
                            }
                            
                            .border-danger {
                                border-color: #dc3545 !important;
                            }
                            
                            .border-light {
                                border-color: #f8f9fa !important;
                            }
                            
                            .border-dark {
                                border-color: #343a40 !important;
                            }
                            
                            .border-white {
                                border-color: #fff !important;
                            }
                            
                            .rounded-sm {
                                border-radius: 0.2rem !important;
                            }
                            
                            .rounded {
                                border-radius: 0.25rem !important;
                            }
                            
                            .rounded-top {
                                border-top-left-radius: 0.25rem !important;
                                border-top-right-radius: 0.25rem !important;
                            }
                            
                            .rounded-right {
                                border-top-right-radius: 0.25rem !important;
                                border-bottom-right-radius: 0.25rem !important;
                            }
                            
                            .rounded-bottom {
                                border-bottom-right-radius: 0.25rem !important;
                                border-bottom-left-radius: 0.25rem !important;
                            }
                            
                            .rounded-left {
                                border-top-left-radius: 0.25rem !important;
                                border-bottom-left-radius: 0.25rem !important;
                            }
                            
                            .rounded-lg {
                                border-radius: 0.3rem !important;
                            }
                            
                            .rounded-circle {
                                border-radius: 50% !important;
                            }
                            
                            .rounded-pill {
                                border-radius: 50rem !important;
                            }
                            
                            .rounded-0 {
                                border-radius: 0 !important;
                            }
                            
                            .clearfix::after {
                                display: block;
                                clear: both;
                                content: "";
                            }
                            
                            .justify-content-start {
                                -ms-flex-pack: start !important;
                                justify-content: flex-start !important;
                            }
                            
                            .justify-content-end {
                                -ms-flex-pack: end !important;
                                justify-content: flex-end !important;
                            }
                            
                            .justify-content-center {
                                -ms-flex-pack: center !important;
                                justify-content: center !important;
                            }
                            
                            .justify-content-between {
                                -ms-flex-pack: justify !important;
                                justify-content: space-between !important;
                            }
                            
                            .justify-content-around {
                                -ms-flex-pack: distribute !important;
                                justify-content: space-around !important;
                            }
                            
                            .align-items-start {
                                -ms-flex-align: start !important;
                                align-items: flex-start !important;
                            }
                            
                            .align-items-end {
                                -ms-flex-align: end !important;
                                align-items: flex-end !important;
                            }
                            
                            .align-items-center {
                                -ms-flex-align: center !important;
                                align-items: center !important;
                            }
                            
                            .align-items-baseline {
                                -ms-flex-align: baseline !important;
                                align-items: baseline !important;
                            }
                            
                            .align-items-stretch {
                                -ms-flex-align: stretch !important;
                                align-items: stretch !important;
                            }
                            
                            .align-content-start {
                                -ms-flex-line-pack: start !important;
                                align-content: flex-start !important;
                            }
                            
                            .align-content-end {
                                -ms-flex-line-pack: end !important;
                                align-content: flex-end !important;
                            }
                            
                            .align-content-center {
                                -ms-flex-line-pack: center !important;
                                align-content: center !important;
                            }
                            
                            .align-content-between {
                                -ms-flex-line-pack: justify !important;
                                align-content: space-between !important;
                            }
                            
                            .align-content-around {
                                -ms-flex-line-pack: distribute !important;
                                align-content: space-around !important;
                            }
                            
                            .align-content-stretch {
                                -ms-flex-line-pack: stretch !important;
                                align-content: stretch !important;
                            }
                            
                            .align-self-auto {
                                -ms-flex-item-align: auto !important;
                                align-self: auto !important;
                            }
                            
                            .align-self-start {
                                -ms-flex-item-align: start !important;
                                align-self: flex-start !important;
                            }
                            
                            .align-self-end {
                                -ms-flex-item-align: end !important;
                                align-self: flex-end !important;
                            }
                            
                            .align-self-center {
                                -ms-flex-item-align: center !important;
                                align-self: center !important;
                            }
                            
                            .align-self-baseline {
                                -ms-flex-item-align: baseline !important;
                                align-self: baseline !important;
                            }
                            
                            .align-self-stretch {
                                -ms-flex-item-align: stretch !important;
                                align-self: stretch !important;
                            }
                            
                            
                            .shadow {
                                box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
                            }
                            
                            .shadow-none {
                                box-shadow: none !important;
                            }
                            
                            .w-25 {
                                width: 25% !important;
                            }
                            
                            .w-50 {
                                width: 50% !important;
                            }
                            
                            .w-75 {
                                width: 75% !important;
                            }
                            
                            .w-100 {
                                width: 100% !important;
                            }
                            
                            .w-auto {
                                width: auto !important;
                            }
                            
                            .h-25 {
                                height: 25% !important;
                            }
                            
                            .h-50 {
                                height: 50% !important;
                            }
                            
                            .h-75 {
                                height: 75% !important;
                            }
                            
                            .h-100 {
                                height: 100% !important;
                            }
                            
                            .h-auto {
                                height: auto !important;
                            }
                            
                            .mw-100 {
                                max-width: 100% !important;
                            }
                            
                            .mh-100 {
                                max-height: 100% !important;
                            }
                            
                            .min-vw-100 {
                                min-width: 100vw !important;
                            }
                            
                            .min-vh-100 {
                                min-height: 100vh !important;
                            }
                            
                            .vw-100 {
                                width: 100vw !important;
                            }
                            
                            .vh-100 {
                                height: 100vh !important;
                            }
                            
                            .m-0 {
                                margin: 0 !important;
                            }
                            
                            .mt-0,
                            .my-0 {
                                margin-top: 0 !important;
                            }
                            
                            .mr-0,
                            .mx-0 {
                                margin-right: 0 !important;
                            }
                            
                            .mb-0,
                            .my-0 {
                                margin-bottom: 0 !important;
                            }
                            
                            .ml-0,
                            .mx-0 {
                                margin-left: 0 !important;
                            }
                            
                            .m-1 {
                                margin: 0.25rem !important;
                            }
                            
                            .mt-1,
                            .my-1 {
                                margin-top: 0.25rem !important;
                            }
                            
                            .mr-1,
                            .mx-1 {
                                margin-right: 0.25rem !important;
                            }
                            
                            .mb-1,
                            .my-1 {
                                margin-bottom: 0.25rem !important;
                            }
                            
                            .ml-1,
                            .mx-1 {
                                margin-left: 0.25rem !important;
                            }
                            
                            .m-2 {
                                margin: 0.5rem !important;
                            }
                            
                            .mt-2,
                            .my-2 {
                                margin-top: 0.5rem !important;
                            }
                            
                            .mr-2,
                            .mx-2 {
                                margin-right: 0.5rem !important;
                            }
                            
                            .mb-2,
                            .my-2 {
                                margin-bottom: 0.5rem !important;
                            }
                            
                            .ml-2,
                            .mx-2 {
                                margin-left: 0.5rem !important;
                            }
                            
                            .m-3 {
                                margin: 1rem !important;
                            }
                            
                            .mt-3,
                            .my-3 {
                                margin-top: 1rem !important;
                            }
                            
                            .mr-3,
                            .mx-3 {
                                margin-right: 1rem !important;
                            }
                            
                            .mb-3,
                            .my-3 {
                                margin-bottom: 1rem !important;
                            }
                            
                            .ml-3,
                            .mx-3 {
                                margin-left: 1rem !important;
                            }
                            
                            .m-4 {
                                margin: 1.5rem !important;
                            }
                            
                            .mt-4,
                            .my-4 {
                                margin-top: 1.5rem !important;
                            }
                            
                            .mr-4,
                            .mx-4 {
                                margin-right: 1.5rem !important;
                            }
                            
                            .mb-4,
                            .my-4 {
                                margin-bottom: 1.5rem !important;
                            }
                            
                            .ml-4,
                            .mx-4 {
                                margin-left: 1.5rem !important;
                            }
                            
                            .m-5 {
                                margin: 3rem !important;
                            }
                            
                            .mt-5,
                            .my-5 {
                                margin-top: 3rem !important;
                            }
                            
                            .mr-5,
                            .mx-5 {
                                margin-right: 3rem !important;
                            }
                            
                            .mb-5,
                            .my-5 {
                                margin-bottom: 3rem !important;
                            }
                            
                            .ml-5,
                            .mx-5 {
                                margin-left: 3rem !important;
                            }
                            
                            .p-0 {
                                padding: 0 !important;
                            }
                            
                            .pt-0,
                            .py-0 {
                                padding-top: 0 !important;
                            }
                            
                            .pr-0,
                            .px-0 {
                                padding-right: 0 !important;
                            }
                            
                            .pb-0,
                            .py-0 {
                                padding-bottom: 0 !important;
                            }
                            
                            .pl-0,
                            .px-0 {
                                padding-left: 0 !important;
                            }
                            
                            .p-1 {
                                padding: 0.25rem !important;
                            }
                            
                            .pt-1,
                            .py-1 {
                                padding-top: 0.25rem !important;
                            }
                            
                            .pr-1,
                            .px-1 {
                                padding-right: 0.25rem !important;
                            }
                            
                            .pb-1,
                            .py-1 {
                                padding-bottom: 0.25rem !important;
                            }
                            
                            .pl-1,
                            .px-1 {
                                padding-left: 0.25rem !important;
                            }
                            
                            .p-2 {
                                padding: 0.5rem !important;
                            }
                            
                            .pt-2,
                            .py-2 {
                                padding-top: 0.5rem !important;
                            }
                            
                            .pr-2,
                            .px-2 {
                                padding-right: 0.5rem !important;
                            }
                            
                            .pb-2,
                            .py-2 {
                                padding-bottom: 0.5rem !important;
                            }
                            
                            .pl-2,
                            .px-2 {
                                padding-left: 0.5rem !important;
                            }
                            
                            .p-3 {
                                padding: 1rem !important;
                            }
                            
                            .pt-3,
                            .py-3 {
                                padding-top: 1rem !important;
                            }
                            
                            .pr-3,
                            .px-3 {
                                padding-right: 1rem !important;
                            }
                            
                            .pb-3,
                            .py-3 {
                                padding-bottom: 1rem !important;
                            }
                            
                            .pl-3,
                            .px-3 {
                                padding-left: 1rem !important;
                            }
                            
                            .p-4 {
                                padding: 1.5rem !important;
                            }
                            
                            .pt-4,
                            .py-4 {
                                padding-top: 1.5rem !important;
                            }
                            
                            .pr-4,
                            .px-4 {
                                padding-right: 1.5rem !important;
                            }
                            
                            .pb-4,
                            .py-4 {
                                padding-bottom: 1.5rem !important;
                            }
                            
                            .pl-4,
                            .px-4 {
                                padding-left: 1.5rem !important;
                            }
                            
                            .p-5 {
                                padding: 3rem !important;
                            }
                            
                            .pt-5,
                            .py-5 {
                                padding-top: 3rem !important;
                            }
                            
                            .pr-5,
                            .px-5 {
                                padding-right: 3rem !important;
                            }
                            
                            .pb-5,
                            .py-5 {
                                padding-bottom: 3rem !important;
                            }
                            
                            .pl-5,
                            .px-5 {
                                padding-left: 3rem !important;
                            }
                            
                            .m-auto {
                                margin: auto !important;
                            }
                            
                            .mt-auto,
                            .my-auto {
                                margin-top: auto !important;
                            }
                            
                            .mr-auto,
                            .mx-auto {
                                margin-right: auto !important;
                            }
                            
                            .mb-auto,
                            .my-auto {
                                margin-bottom: auto !important;
                            }
                            
                            .ml-auto,
                            .mx-auto {
                                margin-left: auto !important;
                            }
                            
                            
                            
                            .text-monospace {
                                font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important;
                            }
                            
                            .text-justify {
                                text-align: justify !important;
                            }
                            
                            .text-truncate {
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                            }
                            
                            .text-left {
                                text-align: left !important;
                            }
                            
                            .text-right {
                                text-align: right !important;
                            }
                            
                            .text-center {
                                text-align: center !important;
                            }
                            
                            .text-lowercase {
                                text-transform: lowercase !important;
                            }
                            
                            .text-uppercase {
                                text-transform: uppercase !important;
                            }
                            
                            .text-capitalize {
                                text-transform: capitalize !important;
                            }
                            
                            .font-weight-light {
                                font-weight: 300 !important;
                            }
                            
                            .font-weight-lighter {
                                font-weight: lighter !important;
                            }
                            
                            .font-weight-normal {
                                font-weight: 400 !important;
                            }
                            
                            .font-weight-bold {
                                font-weight: 700 !important;
                            }
                            
                            .font-weight-bolder {
                                font-weight: bolder !important;
                            }
                            
                            .font-italic {
                                font-style: italic !important;
                            }
                            
                            a.text-secondary:hover, a.text-secondary:focus {
                                color: #494f54 !important;
                            }
                            
                            .text-danger {
                                color: #dc3545 !important;
                            }
                            
                            .text-light {
                                color: #f8f9fa !important;
                            }
                            
                            .text-dark {
                                color: #343a40 !important;
                            }
                        </style>
                    </head>
                    <body>
                        <div class="container-fluid" style="margin-top: 1cm; margin-left: 0.1cm; margin-right: 0.1cm; margin-bottom: 1cm;">
                            <div class="row">
                                <div class="col-12 mx-auto" style="margin-top:0.2cm; margin-bottom:0.2cm;">
                                    <br/>
                                    <strong><h3 class="display-4" style="margin-left: 1cm; color: #011c52; "> ${name} </h3></strong>
                                    <br/>
                                </div>
                            </div>
                            <hr/>
                            <hr/>
                            <div class="row">
                                <div class="col-12 mx-auto py-3" style="color: #101010; background-color: rgb(255, 225, 126);">
                                    <h5>
                                        <strong style=" margin-left: 0.5cm;">
                                        ${email} 
                                    <span style="margin-left: 0.5cm; margin-right: 0.5cm;"> </span>
                                        ${phone}
                                    <span style="margin-left: 0.5cm; margin-right: 0.5cm;"> </span>
                                        ${address}
                                    <span style="margin-left: 0.5cm; margin-right: 0.5cm;"> </span>
                                        ${linkedin}
                                    <span style="margin-left: 0.5cm; margin-right: 0.5cm;"> </span>
                                        ${github}
                                        </strong>
                                    </h5>
                                </div>
                            </div>
                            <hr/>
                            <hr/>
                            <br/>
                            <div class="row">
                                <div class="col-12">
                                    <table class="table table-light">
                                        <thead>
                                            <tr>
                                                <th scope="col"><h4 style="color: #002266;">EXPERIENCE</h4></th>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                                <th scope="col"><h4 style="color: #002266;">SKILLS</h4></th>
                                            </tr>
                                        </thead>
                                        <tbody>>
                                            <tr>
                                                <td scope="row"><strong><h6 class="font-weight-bolder">: ${exp_company_name_1}</h6></strong></td>
                                                <td></td>
                                                <td></td>
                                                <td scope="row"><h6>${skills_name_1}</h6></td>
                                            </tr>
                                            <tr>
                                                <td scope="row"><h6>${exp_job_profile_1}</h6></td>
                                                <td scope="row"></td>
                                                <td scope="row"></td>
                                                <td scope="row"><h6>${skills_name_2}</h6></td>
                                            </tr>
                                            <tr>
                                                <td scope="row"><h6>From ${exp_start_date_1}</h6></td>
                                                <td class="text-center"><h6>To ${exp_end_date_1}</h6></td>
                                                <td scope="row"></td>
                                                <td scope="row"><h6>${skills_name_3}</h6></td>
                                            </tr>
                                            <tr>
                                                <td scope="row"></td>
                                                <td scope="row"></td>
                                                <td scope="row"></td>
                                                <td scope="row"><h6>${skills_name_4}</h6></td>
                                            </tr>
                                        </tbody>
                                        <thead>
                                            <tr>
                                                <th scope="col"><h4 style="color: #002266;">EDUCATION</h4></th>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                                <th scope="col"><h4 style="color: #002266;">AREAS OF INTEREST</h4></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td scope="row"><strong><h6 class="font-weight-bolder">: ${edu_institute_name_1}</h6></strong></td>
                                                <td scope="row" class="text-center"><h6>${edu_course_year_1}</h6></td>
                                                <td scope="row"></td>
                                                <td scope="row"></td>
                                            </tr>
                                            <tr>
                                                <td scope="row"><h6>${edu_course_name_1}</h6></td>
                                                <td scope="row" class="text-center"><h6>Score ${edu_course_score_1}</h6></td>
                                                <td spope="row"></td>
                                                <td scope="row" ><h6>${areas_of_interest_1}</h6></td>
                                            </tr>
                                            <tr>
                                                <td scope="row"><strong><h6 class="font-weight-bolder">: ${edu_institute_name_2}</h6></strong></td>
                                                <td scope="row" class="text-center"><h6>${edu_course_year_2}</h6></td>
                                                <td spope="row"></td>
                                                <td scope="row"><h6>${areas_of_interest_2}</h6></td>
                                            </tr>
                                            <tr>
                                                <td scope="row"><h6>${edu_course_name_2}</h6></td>
                                                <td scope="row" class="text-center"><h6>Score ${edu_course_score_2}</h6></td>
                                                <td scope="row"></td>
                                                <td scope="row"></td>
                                            </tr>
                                        </tbody>
                                        <thead>
                                            <tr>
                                                <th scope="col"><h4 style="color: #002266;">PROJECTS</h4></th>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                                <th scope="col"><h4 style="color: #002266;">ACHIEVEMENTS</h4></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td scope="row"><strong><h6 class="font-weight-bolder">: ${project_name_1}</h6></strong></td>
                                                <td scope="row"></td>
                                                <td spope="row"></td>
                                                <td scope="row"></td>
                                            </tr>
                                            <tr>
                                                <td scope="row"><h6>${project_description_1}</h6></td>
                                                <td scope="row"></td>
                                                <td scope="row"></td>
                                                <td scope="row"></td>
                                            </tr>
                                            <tr>
                                                <td scope="row"><h6>${project_link_1}</h6></td>
                                                <td scope="row"></td>
                                                <td scope="row"></td>
                                                <td scope="row"><h6>${achievements_1}</h6></td>
                                            </tr>
                                            <tr>
                                                <td scope="row"><strong><h6 class="font-weight-bolder">: ${project_name_2}</h6></strong></td>
                                                <td scope="row"></td>
                                                <td spope="row"></td>
                                                <td scope="row"><h6>${achievements_2}</h6></td>
                                            </tr>
                                            <tr>
                                                <td scope="row"><h6>${project_description_2}</h6></td>
                                                <td scope="row"></td>
                                                <td scope="row"></td>
                                                <td scope="row"></td>
                                            </tr>
                                            <tr>
                                                <td scope="row"><h6>${project_link_2}</h6></td>
                                                <td scope="row"></td>
                                                <td scope="row"></td>
                                                <td scope="row"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </body>
                </html>
            `;

  }
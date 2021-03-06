

import { LinkButton } from '../../Components/LinkButton/LinkButton';
import { DivTitle } from '../../Components/DivTitle/DivTitle';
import { Title } from '../../Components/Title/Title';
import { Gallery } from '../../Components/Carousel/Gallery';
import { Daily } from '../../Components/Daily/Daily';

import './Home.scss'

export function Home() {
    return (
        <div id="PageHome">
            <main>
                <DivTitle>
                    <Title
                        Text="DESTAQUES"
                    />
                </DivTitle>

                <Gallery />

                <DivTitle>
                    <Title
                        Text="POSTAGENS DIÁRIAS"
                    />
                </DivTitle>

                <Daily />
            </main>
        </div>
    );
}
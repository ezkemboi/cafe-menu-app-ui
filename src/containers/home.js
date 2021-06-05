import Page from '../components/page';
import Button from '../components/button';
import NavBar from '../components/navbar';

const Home = () => {
    const handleAddMenu = () => {
        // psuh to add menu page
    }

    return (
        <Page>
            <NavBar>
                <h3>Menu</h3>
                <Button
                    primary={true}
                    handleClick={handleAddMenu}
                >
                    Add Menu Item
                </Button>
            </NavBar>
            <div>
                The Body is here and it will take long
            </div>
            <div>body</div>
        </Page>
    )
}

export default Home;

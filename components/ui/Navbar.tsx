import { useTheme, Text, Spacer, Image, Link } from '@nextui-org/react'
import * as Link_1 from 'next/Link';
 
export const Navbar = () => {

    const { theme } = useTheme()
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0px 20px',
            backgroundColor: theme?.colors.gray800.value
        }}>.

            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"

                alt="icono e app"
                width={70}
                height={70}
            />

            <Link_1.NextLink href="/" passHref>
                <Link>
                    <Text color='white' h2>
                        P
                    </Text>
                    <Text color='white' h3>
                        okemon
                    </Text>
                </Link>
            </Link_1.NextLink>



            <Spacer css={
                { flex: 1 }
            } />

            <Link_1.NextLink href="/favorites">
                <Link css={{marginRight:'20px'}}>
                    <Text color='white' >
                        Favoritos
                    </Text>
                </Link>
            </Link_1.NextLink>

        </div>
    );
};

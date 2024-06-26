import Image from "next/image";

export const Instructions = () => {
    return (
        <div className="instructions pl-10 mt-10">
            <div className="flex items-center flex-col flex-grow text-center text-lg rounded-xl border-2 border-primary bg-white bg-opacity-10 p-4">
                <h1 className="text-4xl font-bold mb-5 underline">Game Instructions</h1>
               
                <ol className="list-decimal list-inside space-y-2 mb-5">
                    <p className="underline">How to get started 🐸:</p>
                    <li>Entry Fee: Begin by paying the Greens Fee. Look for the ⛳️ icon to proceed.</li>
                    <li>Follow Hole Instructions: Enter Shot value and play the Shot 🏌️. You can play as many number of shots you want before committing score. </li>
                    <li>Commit & Check Score: Once you've played all your shots, finalize your game by committing your scores 🏁. After that click on check Score 🎰</li>
                    <li>Aim for Hall of Fame: Each accurate shot brings you closer to the Hall of Fame. 🥳</li>
                    <li>Withdraw Balance: Retrieve any remaining balance from your play. 💰</li>
                </ol>
                <p>
                    <Image
                        src="/grass-border.png"
                        width="530"
                        height="230"
                        alt="Level devider"
                    />
                </p>
            </div>

            {/* Checkpoint 1 */}
            <div className="break-words mt-10 mb-10">
               
                
                <div className="mt-10">
                    ⛳️ You know the drill, each number you find is more than just a digit; it's a piece of the puzzle that is Ethereum.<br />
                    Tally up the values to determine the ETH value for your last shot.
                </div>
            </div>
            <p className="flex items-center flex-col flex-grow">
                <Image
                    src="/grass-border.png"
                    width="530"
                    height="230"
                    alt="Level devider"
                />
            </p>


            {/* SCORING */}
            <p className="flex items-center flex-col flex-grow text-xl">
                Now that you have taken all your shots, it's time to commit your score 🏁 and see how you did 🎰!
            </p>
            <div className=" mt-20">
                <h2 className="text-2xl mb-5"><code>🏆 Hall of Fame 🏆</code></h2>
                If you managed to take the correct number of shots with the right amount of ETH, <br />
                you'll get the chance to immortalize your name in the SpeedRun Golf Hall of Fame, your moment to shine among the best players!
            </div>
            <div className="flex-container mb-10">
                <div className="break-words mt-10">
                    <h2 className="text-2xl mb-5"><code>🎯 SCORING 🎯</code></h2>
                    <ul className="list-disc pl-5 mt-4 mb-8">
                        <li>-✌️ Eagle: Congratulations! You scored two under par.</li>
                        <li>-☝️ Birdie: Well done! You scored one under par.</li>
                        <li>&nbsp;🥳 &nbsp;Par: Winner, Winner Chicken Dinner 🎉 You've matched par perfectly!</li>
                        <li>+☝️ Bogey: Just one over par. Keep practicing!</li>
                        <li>+✌️ Double Bogey: Scoring two over par. Keep your chin up!</li>
                    </ul>
                </div>
                <Image
                    src="/winner.png"
                    width="230"
                    height="230"
                    alt="Winner"
                    className="winner-image"
                />
            </div>
            <div className="text-lg mb-5" >
                Once you've committed your score and finished playing, click on the <code>💰</code> button to withdraw your balance. <br />
                This action will reset your game, allowing you to play again, especially if you didn't achieve a 'Hole in One 🏆' on your first try.
            </div>


            <p>Thanks for playing! We hope your journey was both enlightening and enjoyable. ✌️</p>
        </div>
    );
};

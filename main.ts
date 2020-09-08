//% color=#4698CB weight=90 icon="\uf013" block="PlusPlus"
namespace PlusPlus {

    /**
     * BUD powered piston simple flying machine.
     */
    //% weight=100
    //% blockId="pp_simple_flying_machine" block="simple flying machine"
    export function simple_flying_machine() {
        let position: Position = player.position()
		blocks.place(blocks.blockWithData(PISTON, 5), positions.add(position, pos(1, 1, 4)))
		blocks.place(SLIME_BLOCK, positions.add(position, pos(0, 1, 4)))
		blocks.place(SLIME_BLOCK, positions.add(position, pos(-1, 1, 4)))
		blocks.place(SLIME_BLOCK, positions.add(position, pos(2, 1, 3)))
		blocks.place(SLIME_BLOCK, positions.add(position, pos(1, 1, 3)))
		blocks.place(blocks.blockWithData(STICKY_PISTON, 4), positions.add(position, pos(0, 1, 3)))
		blocks.place(blocks.blockWithData(OBSERVER, 5), positions.add(position, pos(2, 1, 4)))
		blocks.place(blocks.blockWithData(OBSERVER, 4), positions.add(position, pos(-1, 1, 3)))
		/*
		Dear curious fellow, here's my original setblock design with honey blocks:
		    player.execute("/setblock ~1 ~1 ~4 piston 5 replace")
			player.execute("/setblock ~ ~1 ~4 honey_block 0 replace")
			player.execute("/setblock ~-1 ~1 ~4 honey_block 0 replace")
			player.execute("/setblock ~2 ~1 ~3 honey_block 0 replace")
			player.execute("/setblock ~1 ~1 ~3 honey_block 0 replace")
			player.execute("/setblock ~ ~1 ~3 sticky_piston 4 replace")
			player.execute("/setblock ~2 ~1 ~4 observer 5 replace")
			player.execute("/setblock ~-1 ~1 ~3 observer 4 replace")
		*/
    }

}

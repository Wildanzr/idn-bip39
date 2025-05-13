"use client";

import React, { useState } from "react";
import { BIP39_WORDLIST } from "@/constants/bip39";
import { HDKey } from "@scure/bip32";
import { mnemonicToSeed } from "@scure/bip39";
import { Buffer } from "buffer";
import { ethers } from "ethers";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Copy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Wallet {
  address: string;
  mnemonic: string;
  privateKey: string;
}

const GenerateWallet = () => {
  const [wallet, setWallet] = useState<Wallet | undefined>(undefined);
  const [copyStatus, setCopyStatus] = useState<{ [key: string]: boolean }>({});
  const [isGenerating, setIsGenerating] = useState(false);

  const generateRandomWords = (count: number = 12): string => {
    const mnemonicWords = [];
    const usedIndices = new Set<number>();

    // TODO: It should use entropy for better randomness
    while (mnemonicWords.length < count) {
      const index = Math.floor(Math.random() * BIP39_WORDLIST.length);
      if (!usedIndices.has(index)) {
        usedIndices.add(index);
        mnemonicWords.push(BIP39_WORDLIST[index]);
      }
    }

    return mnemonicWords.join(" ");
  };

  const generateNewWallet = async () => {
    try {
      setIsGenerating(true);
      setCopyStatus({});

      const mnemonic = generateRandomWords();
      const masterseed = await Promise.resolve(mnemonicToSeed(mnemonic));
      const ethPath = "m/44'/60'/0'/0/0";
      const ethNode = HDKey.fromMasterSeed(masterseed).derive(ethPath);

      // Create Ethereum wallet from the derived private key using the Buffer from 'buffer' package
      const ethPrivateKey = Buffer.from(ethNode.privateKey!).toString("hex");
      const ethWallet = new ethers.Wallet(`0x${ethPrivateKey}`);
      setWallet({
        mnemonic,
        address: ethWallet.address,
        privateKey: ethWallet.privateKey,
      });
    } catch (error) {
      console.error("Error generating wallet:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopyStatus({ ...copyStatus, [field]: true });
    setTimeout(() => {
      setCopyStatus({ ...copyStatus, [field]: false });
    }, 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto py-6 space-y-6">
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-center">Pembuat Dompet Ethereum</CardTitle>
          <CardDescription className="text-center">
            Buat dompet Ethereum baru dengan frasa pemulihan mnemonic
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Button
            onClick={generateNewWallet}
            disabled={isGenerating}
            size="lg"
            className="w-64"
          >
            {isGenerating ? "Membuat..." : "Buat Dompet Baru"}
          </Button>
        </CardContent>
      </Card>

      {wallet && (
        <Card className="border-2">
          <CardHeader>
            <CardTitle>Dompet Anda</CardTitle>
            <CardDescription>
              Detail dompet dibuat dengan aman di browser Anda
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Alamat Dompet</h3>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() =>
                          copyToClipboard(wallet.address, "address")
                        }
                      >
                        <Copy className="h-4 w-4" />
                        <span className="sr-only">Salin alamat</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        {copyStatus.address
                          ? "Tersalin!"
                          : "Salin ke clipboard"}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="bg-muted p-3 rounded-md text-xs font-mono break-all">
                {wallet.address}
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Kunci Pribadi</h3>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() =>
                          copyToClipboard(wallet.privateKey, "privateKey")
                        }
                      >
                        <Copy className="h-4 w-4" />
                        <span className="sr-only">Salin kunci pribadi</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        {copyStatus.privateKey
                          ? "Tersalin!"
                          : "Salin ke clipboard"}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="bg-muted p-3 rounded-md text-xs font-mono break-all">
                {wallet.privateKey}
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">
                  Frasa Pemulihan (Mnemonic)
                </h3>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() =>
                          copyToClipboard(wallet.mnemonic, "mnemonic")
                        }
                      >
                        <Copy className="h-4 w-4" />
                        <span className="sr-only">Salin mnemonic</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        {copyStatus.mnemonic
                          ? "Tersalin!"
                          : "Salin ke clipboard"}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="bg-muted p-3 rounded-md text-xs font-mono">
                <div className="flex flex-wrap gap-1">
                  {wallet.mnemonic.split(" ").map((word, index) => (
                    <Badge key={index} variant="outline" className="font-mono">
                      {index + 1}. {word}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Alert variant="destructive" className="w-full">
              <AlertTitle>Peringatan Keamanan</AlertTitle>
              <AlertDescription>
                Jangan pernah membagikan kunci pribadi atau frasa mnemonic
                kepada siapapun. Simpan secara aman secara offline.
              </AlertDescription>
            </Alert>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default GenerateWallet;

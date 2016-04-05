close all

Xm = 640;
Ym = 480;

im = zeros(Xm,Ym);
c = -rand(1) + rand(1)*1i;

for ii=1:Xm,
    for jj=1:Ym,
        x = (ii - Xm/2)/(Xm/2);
        y = (jj - Ym/2) / (Ym/2);
        im(ii,jj) = getIterationVal(x,y,c);
    end
    ii
end

imagesc(im)
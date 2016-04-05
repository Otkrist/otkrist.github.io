function [i]=getIterationVal(x,y,c)

z = x+y*1i;
for i=1:2000
  z = z*z+ c;
  if abs(z) > 5
    return
  end
end
